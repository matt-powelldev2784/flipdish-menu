import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react'

export type MenuItemType = 'master' | 'options' | 'noOptions' | null
export interface SubOption {
  subOptionId: string
  subOptionName: string
  quantity: number
  price: number
}

export interface CartItem {
  id: number
  name: string
  menuItemId: number
  quantity: number
  price: number
}

interface MenuContextType {
  cartItems: CartItem[]
  currentMenuItemId: number | null
  setCurrentMenuItemId: Dispatch<SetStateAction<number | null>>
  currentMenuItemType: MenuItemType
  setCurrentMenuItemType: Dispatch<SetStateAction<MenuItemType>>
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
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

  const addItem = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  console.log('cartItems', cartItems)

  return (
    <MenuContext.Provider
      value={{
        cartItems,
        currentMenuItemId,
        setCurrentMenuItemId,
        currentMenuItemType,
        setCurrentMenuItemType,
        addItem,
        removeItem
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
