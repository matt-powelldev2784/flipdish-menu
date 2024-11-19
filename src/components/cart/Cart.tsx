import { useMenuContext } from 'menuContext/MenuContext'

export const Cart = () => {
  const { cartItems, cartTotalPrice } = useMenuContext()

  if (cartItems.length === 0) {
    console.log('aa')
    return <p className="m-4 text-xl">No Cart Items</p>
  }

  return (
    <div className="m-4 flex w-full max-w-[700px] flex-col items-center rounded-lg bg-neutral-300 p-4">
      <p className="text-lg font-bold">Cart</p>
      {cartItems?.map((cartItem) => {
        return (
          <div
            className="flex w-full items-center justify-between"
            key={cartItem.id}
          >
            <p>{cartItem.name}</p>
            <p>£{cartItem.price.toFixed(2)}</p>
          </div>
        )
      })}
      <p>Total Price: £{cartTotalPrice.toFixed(2)}</p>
    </div>
  )
}
