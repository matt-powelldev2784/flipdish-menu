import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react'

export type MenuLevel = 'main' | 'options' | 'confirmOptions' | 'cart'

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
  optionsCanBeConfirmed: boolean
  setOptionsCanBeConfirmed: Dispatch<SetStateAction<boolean>>
  allowZeroMinSelection: boolean
  setAllowZeroMinSelection: Dispatch<SetStateAction<boolean>>
  tempCartItem: TempCartItem
  setTempCartItem: Dispatch<SetStateAction<TempCartItem>>
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  addOptionToTempCart: (option: MenuOption) => void
  removeOptionFromTempCart: (subOptionId: number) => void
  resetMenuOptionsState: () => void
  resetMenuItemsState: () => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export const useMenuContext = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenuContext must be used within a MenuContextProvider')
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
  const [optionsCanBeConfirmed, setOptionsCanBeConfirmed] = useState(false)
  const [allowZeroMinSelection, setAllowZeroMinSelection] = useState(false)
  const [tempCartItem, setTempCartItem] = useState<TempCartItem>(null)

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const addOptionToTempCart = (menuOption: MenuOption) => {
    setTempCartItem((prev) => {
      if (prev === null) return null

      if (!prev.menuOptions) {
        return {
          ...prev,
          menuOptions: [menuOption]
        }
      }

      // only allow each menu option to be added once
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

  const removeOptionFromTempCart = (menuOptionId: number) => {
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
    setOptionsCanBeConfirmed(false)
    setAllowZeroMinSelection(false)
    setCurrentMenuLevel('main')
  }

  const resetMenuOptionsState = () => {
    setNumberOfOptionsSelected(0)
    setOptionsCanBeConfirmed(false)
    setAllowZeroMinSelection(false)
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
        optionsCanBeConfirmed,
        setOptionsCanBeConfirmed,
        allowZeroMinSelection,
        setAllowZeroMinSelection,
        tempCartItem,
        setTempCartItem,
        addToCart,
        removeFromCart,
        addOptionToTempCart,
        removeOptionFromTempCart,
        resetMenuOptionsState,
        resetMenuItemsState
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
