import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react'

export type MenuLevel = 'main' | 'options' | 'confirmOptions'

export type TempCartItem = CartItem | null

export interface MenuOption {
  id: number
  menuOptionId: number
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
  menuOptions?: MenuOption[]
}

interface MenuContextType {
  cartItems: CartItem[]
  currentMenuItemId: number | null
  setCurrentMenuItemId: Dispatch<SetStateAction<number | null>>
  currentMenuLevel: MenuLevel
  setCurrentMenuLevel: Dispatch<SetStateAction<MenuLevel>>
  numberOfOptionsSelected: number
  setNumberOfOptionsSelected: Dispatch<SetStateAction<number>>
  optionsCanBeSelected: boolean
  setOptionsCanBeSelected: Dispatch<SetStateAction<boolean>>
  tempCartItem: TempCartItem
  setTempCartItem: Dispatch<SetStateAction<TempCartItem>>
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  addTempCartSubOption: (option: MenuOption) => void
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
  const [numberOfOptionsSelected, setNumberOfOptionsSelected] = useState(0)
  const [optionsCanBeSelected, setOptionsCanBeSelected] = useState(false)
  const [tempCartItem, setTempCartItem] = useState<TempCartItem>(null)

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const addTempCartSubOption = (menuOption: MenuOption) => {
    setTempCartItem((prev) => {
      if (prev === null) return null

      if (!prev.menuOptions) {
        return {
          ...prev,
          menuOptions: [menuOption]
        }
      }

      // only allow each subOption to be added once
      const subOptionExists = prev.menuOptions?.some(
        (option) => option.menuOptionId === menuOption.menuOptionId
      )
      if (subOptionExists) return prev

      return {
        ...prev,
        menuOptions: [...prev.menuOptions, menuOption]
      }
    })
  }

  const removeTempCartSubOption = (menuOptionId: number) => {
    setTempCartItem((prev) => {
      if (prev) {
        return {
          ...prev,
          subOptions: prev.menuOptions?.filter(
            (option) => option.menuOptionId !== menuOptionId
          )
        }
      }
      return prev
    })
  }

  const resetMenuItemsState = () => {
    setCurrentMenuItemId(null)
    setTempCartItem(null)
    setNumberOfOptionsSelected(0)
    setCurrentMenuLevel('main')
  }

  const resetMenuOptionsState = () => {
    setNumberOfOptionsSelected(0)
    setOptionsCanBeSelected(false)
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
        numberOfOptionsSelected,
        setNumberOfOptionsSelected,
        optionsCanBeSelected,
        setOptionsCanBeSelected,
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