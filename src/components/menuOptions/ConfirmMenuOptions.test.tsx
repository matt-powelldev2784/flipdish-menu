import { screen } from '@testing-library/react'
import { renderWithContext } from '../../../tests/utils/renderWithContext'
import { CartItem } from 'menuContext/MenuContext'
import { ConfirmMenuOptions } from './ConfirmMenuOptions'
import { tempCartItemMock } from '../../../tests/mocks/tempCartItemMock'

const calculateTempCartTotalPrice = (tempCartItem: CartItem | null) => {
  if (!tempCartItem) return 0
  const subTotal = tempCartItem.menuOptions?.reduce(
    (acc, option) => acc + option.price * option.quantity,
    0
  )
  return tempCartItem.price * tempCartItem.quantity + (subTotal || 0)
}

const tempCartTotalPrice = calculateTempCartTotalPrice(tempCartItemMock)

test('will check temp cart item total price is correct', () => {
  renderWithContext({
    children: <ConfirmMenuOptions />,
    contextValues: {
      tempCartItem: tempCartItemMock,
      tempCartTotalPrice: tempCartTotalPrice
    }
  })

  const tempCartTotalPriceText = screen.getByText('Add To Cart For £5.50')
  expect(tempCartTotalPriceText).toBeInTheDocument()
})
