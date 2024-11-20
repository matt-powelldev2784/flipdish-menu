import { useMenuContext } from 'menuContext/MenuContext'
import { CartItem } from './CartItem'

export const Cart = () => {
  const { cartItems, cartTotalPrice } = useMenuContext()

  if (cartItems.length === 0) {
    return <p className="m-4 text-xl">No Cart Items</p>
  }

  return (
    <div className="m-4 flex w-full max-w-[700px] flex-col items-center rounded-lg bg-neutral-300 p-4">
      <p className="text-lg font-bold">Cart</p>
      {cartItems?.map((cartItem) => {
        return <CartItem key={cartItem.id} cartItem={cartItem} />
      })}
      <p>Total Price: £{cartTotalPrice.toFixed(2)}</p>
    </div>
  )
}
