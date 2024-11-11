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

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (item: CartItem) => {
    setItems((prevItems) => [...prevItems, item])
  }

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
