import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react'

export type MenuItemType = 'master' | 'subOptions' | 'noOptions' | null

export type MenuLevel = 'main' | 'master' | 'subOptions'

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
  menuItemType: MenuItemType
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
  currentMenuItemType: MenuItemType
  setCurrentMenuItemType: Dispatch<SetStateAction<MenuItemType>>
  currentMenuLevel: MenuLevel
  setCurrentMenuLevel: Dispatch<SetStateAction<MenuLevel>>
  tempCartItem: TempCartItem
  setTempCartItem: Dispatch<SetStateAction<TempCartItem>>
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  addTempCartSubOption: (subOption: SubOption) => void
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
  const [currentMenuItemType, setCurrentMenuItemType] =
    useState<MenuItemType>(null)
  const [currentMenuLevel, setCurrentMenuLevel] = useState<MenuLevel>('main')
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

  const resetMenuItemsState = () => {
    setCurrentMenuItemId(null)
    setCurrentMenuItemType(null)
    setTempCartItem(null)
    setCurrentMenuLevel('main')
  }

  console.log('---------------------------------')
  console.log('cartItems', cartItems)
  console.log('tempCartItem', tempCartItem)
  console.log('currentMenuLevel', currentMenuLevel)
  console.log('currentMenuItemType', currentMenuItemType)

  return (
    <MenuContext.Provider
      value={{
        cartItems,
        currentMenuItemId,
        setCurrentMenuItemId,
        currentMenuItemType,
        setCurrentMenuItemType,
        currentMenuLevel,
        setCurrentMenuLevel,
        tempCartItem,
        setTempCartItem,
        addToCart,
        removeFromCart,
        addTempCartSubOption,
        resetMenuItemsState
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
