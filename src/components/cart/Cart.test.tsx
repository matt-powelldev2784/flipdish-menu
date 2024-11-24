import { screen } from '@testing-library/react'
import { renderWithContext } from '../../../tests/utils/renderWithContext'
import { Cart } from './Cart'
import { cartItemsMock } from '../../../tests/mocks/cartItemsMock'
import { CartItem } from 'menuContext/MenuContext'

const calculateCartTotalPrice = (cartItems: CartItem[]) => {
  return cartItems.reduce((acc, item) => {
    const subTotal = item.menuOptions?.reduce(
      (acc, option) => acc + option.price * option.quantity,
      0
    )
    return acc + item.price * item.quantity + (subTotal || 0)
  }, 0)
}

const cartTotalPrice = calculateCartTotalPrice(cartItemsMock)

test('should check cart items total price is correctly calculated', () => {
  renderWithContext({
    children: <Cart />,
    contextValues: {
      cartItems: cartItemsMock,
      cartTotalPrice: cartTotalPrice
    }
  })

  const totalPrice = screen.getByText('Total Price: £18.20')
  expect(totalPrice).toBeInTheDocument()
})
