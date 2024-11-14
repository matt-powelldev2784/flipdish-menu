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

export interface SubOption {
  id: string
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
  currentMenuItemType: MenuItemType
  setCurrentMenuItemType: Dispatch<SetStateAction<MenuItemType>>
  currentMenuLevel: MenuLevel
  setCurrentMenuLevel: Dispatch<SetStateAction<MenuLevel>>
  tempCartItems: CartItem[]
  setTempCartItems: Dispatch<SetStateAction<CartItem[]>>
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
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
  const [tempCartItems, setTempCartItems] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  console.log('---------------------------------')
  console.log('cartItems', cartItems)
  console.log('tempCartItems', tempCartItems)
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
        tempCartItems,
        setTempCartItems,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
