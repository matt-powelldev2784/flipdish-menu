import { MenuDataT } from 'menuData/menuData'
import { menuData } from 'menuData/menuData'
import { createContext, useContext, useState, ReactNode } from 'react'

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
  menuData: MenuDataT
  cartItems: CartItem[]
  currentSelectedMenuItemId: number | null
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addItem = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return (
    <MenuContext.Provider
      value={{
        menuData,
        cartItems,
        currentSelectedMenuItemId: null,
        addItem,
        removeItem
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
