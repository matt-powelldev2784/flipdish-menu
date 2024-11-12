import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from 'react'

export interface SubOption {
  subOptionId: string
  subOptionName: string
  quantity: number
  price: number
}

export interface CartItem {
  id: number
  masterItemId: number
  masterOptionName: string
  subOptions: SubOption[]
  quantity: number
  totalPrice: number
}

interface MenuContextType {
  cartItems: CartItem[]
  currentMenuItemId: number | null
  setCurrentMenuItemId: Dispatch<SetStateAction<number | null>>
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

  const addItem = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return (
    <MenuContext.Provider
      value={{
        cartItems,
        currentMenuItemId,
        setCurrentMenuItemId,
        addItem,
        removeItem
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
