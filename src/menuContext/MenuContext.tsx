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

export interface MenuContextType {
  cartItems: CartItem[]
  cartTotalPrice: number
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
  tempCartTotalPrice: number | undefined
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  addOptionToTempCart: (option: MenuOption) => void
  removeOptionFromTempCart: (subOptionId: number) => void
  resetMenuOptionsState: () => void
  resetMenuItemsState: () => void
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined)

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
          menuOptions: prev.menuOptions?.filter(
            (option) => option.menuOptionId !== menuOptionId
          )
        }
      }
      return prev
    })
  }

  const cartTotalPrice = cartItems.reduce((acc, item) => {
    const subTotal = item.menuOptions?.reduce(
      (acc, option) => acc + option.price * option.quantity,
      0
    )
    return acc + item.price * item.quantity + (subTotal || 0)
  }, 0)

  const tempCartTotalPrice =
    tempCartItem?.menuOptions?.reduce(
      (acc, option) => {
        return acc + option.price * option.quantity
      },
      tempCartItem?.price || 0
    ) || tempCartItem?.price

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

  return (
    <MenuContext.Provider
      value={{
        cartItems,
        cartTotalPrice,
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
        tempCartTotalPrice,
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
