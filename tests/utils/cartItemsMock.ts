import { CartItem } from './../../src/menuContext/MenuContext'

export const cartItemsMock: CartItem[] = [
  {
    id: 1732450770084,
    menuItemId: 1299632,
    name: 'Salad',
    price: 5,
    quantity: 1,
    menuOptions: [
      {
        id: 1732450770829,
        menuOptionId: 13502386,
        name: 'Small',
        price: 0,
        quantity: 1
      }
    ]
  },
  {
    id: 1732450773431,
    menuItemId: 1446427,
    name: 'Chips',
    price: 0,
    quantity: 1,
    menuOptions: [
      {
        id: 1732450774469,
        menuOptionId: 15749311,
        name: 'Small',
        price: 3,
        quantity: 1
      },
      {
        id: 1732450776298,
        menuOptionId: 15749314,
        name: 'Cheese',
        price: 0.2,
        quantity: 1
      },
      {
        id: 1732450782222,
        menuOptionId: 15749322,
        name: 'Coke',
        price: 0,
        quantity: 1
      }
    ]
  },
  {
    id: 1732450787349,
    menuItemId: 1299634,
    name: 'Curry',
    price: 10,
    quantity: 1
  }
]
