import { CartItem as CartItemT } from 'menuContext/MenuContext'

interface CartItemProps {
  cartItem: CartItemT
}

export const CartItem = ({ cartItem }: CartItemProps) => {
  return (
    <div
      className="m-2 flex w-full flex-col items-start justify-between"
      key={cartItem.id}
    >
      <div className="flex w-full justify-between">
        <p className="font-bold">{cartItem.name}</p>
        <p>£{cartItem.price.toFixed(2)}</p>
      </div>

      {cartItem.menuOptions?.map((menuOption) => {
        return (
          <div key={menuOption.id} className="flex w-full justify-between">
            <p>{menuOption.name}</p>
            <p>£{menuOption.price.toFixed(2)}</p>
          </div>
        )
      })}
    </div>
  )
}
