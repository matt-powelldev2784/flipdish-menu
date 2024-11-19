import { useMenuContext } from 'menuContext/MenuContext'

export const Cart = () => {
  const { cartItems } = useMenuContext()
  if (cartItems.length === 0) return <p>No Cart Items</p>

  return (
    <div className="m-4 flex w-full max-w-[700px] flex-col items-center rounded-lg bg-neutral-300 p-4">
      <p className="text-lg font-bold">Cart</p>
      {cartItems?.map((cartItem) => {
        return (
          <div
            className="flex w-full items-center justify-between"
            key={cartItem.id}
          >
            <p className="">{cartItem.name}</p>
            <p className="">£{cartItem.price.toFixed(2)}</p>
          </div>
        )
      })}
    </div>
  )
}
