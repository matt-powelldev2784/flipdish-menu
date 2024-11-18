import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react'

export type MenuLevel = 'main' | 'options'

export type TempCartItem = CartItem | null

export interface SubOption {
  id: number
  subOptionId: number
  name: string
  quantity: number
  price: number
}

export interface CartItem {
  id: number
  name: string
  menuItemId: number
  quantity: number
  price: number
  subOptions?: SubOption[]
}

interface MenuContextType {
  cartItems: CartItem[]
  currentMenuItemId: number | null
  setCurrentMenuItemId: Dispatch<SetStateAction<number | null>>
  currentMenuLevel: MenuLevel
  setCurrentMenuLevel: Dispatch<SetStateAction<MenuLevel>>
  menuOptionSelectedCount: number
  setMenuOptionSelectedCount: Dispatch<SetStateAction<number>>
  tempCartItem: TempCartItem
  setTempCartItem: Dispatch<SetStateAction<TempCartItem>>
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  addTempCartSubOption: (subOption: SubOption) => void
  removeTempCartSubOption: (subOptionId: number) => void
  resetMenuOptionsState: () => void
  resetMenuItemsState: () => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export const useMenuContext = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [currentMenuItemId, setCurrentMenuItemId] = useState<number | null>(
    null
  )
  const [currentMenuLevel, setCurrentMenuLevel] = useState<MenuLevel>('main')
  const [menuOptionSelectedCount, setMenuOptionSelectedCount] = useState(0)
  const [tempCartItem, setTempCartItem] = useState<TempCartItem>(null)

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const addTempCartSubOption = (subOption: SubOption) => {
    setTempCartItem((prev) => {
      if (prev === null) return null

      if (!prev.subOptions) {
        return {
          ...prev,
          subOptions: [subOption]
        }
      }

      // only allow each subOption to be added once
      const subOptionExists = prev.subOptions?.some(
        (option) => option.subOptionId === subOption.subOptionId
      )
      if (subOptionExists) return prev

      return {
        ...prev,
        subOptions: [...prev.subOptions, subOption]
      }
    })
  }

  const removeTempCartSubOption = (subOptionId: number) => {
    setTempCartItem((prev) => {
      if (prev) {
        return {
          ...prev,
          subOptions: prev.subOptions?.filter(
            (option) => option.subOptionId !== subOptionId
          )
        }
      }
      return prev
    })
  }

  const resetMenuItemsState = () => {
    setCurrentMenuItemId(null)
    setTempCartItem(null)
    setMenuOptionSelectedCount(0)
    setCurrentMenuLevel('main')
  }

  const resetMenuOptionsState = () => {
    setMenuOptionSelectedCount(0)
  }

  // logs left in so cart items can be viewed in console
  console.log('--------------------------state update ----------')
  console.log('cartItems', cartItems)
  console.log('tempCartItem', tempCartItem)

  return (
    <MenuContext.Provider
      value={{
        cartItems,
        currentMenuItemId,
        setCurrentMenuItemId,
        currentMenuLevel,
        setCurrentMenuLevel,
        menuOptionSelectedCount,
        setMenuOptionSelectedCount,
        tempCartItem,
        setTempCartItem,
        addToCart,
        removeFromCart,
        addTempCartSubOption,
        removeTempCartSubOption,
        resetMenuOptionsState,
        resetMenuItemsState
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
