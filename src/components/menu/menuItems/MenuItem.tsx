import { MenuItemType, useMenuContext } from 'cartContext/CartContext'

interface MenuItemProps {
  id: number
  menuItemType: MenuItemType
  name: string
  price: number
}

export const MenuItem = ({ id, name, price, menuItemType }: MenuItemProps) => {
  const { addToCart, setCurrentMenuItemId, setCurrentMenuItemType } =
    useMenuContext()

  const onSelectMenuItem = () => {
    if (menuItemType === 'noOptions') {
      addToCart({
        id: Date.now(),
        menuItemId: id,
        name,
        price,
        quantity: 1
      })
    }

    if (menuItemType !== 'noOptions') {
      setCurrentMenuItemId(id)
      setCurrentMenuItemType(menuItemType)
    }
  }

  return (
    <article
      key={id}
      className=" flex w-full  flex-row items-center justify-between rounded bg-neutral-300 p-2 px-10 "
    >
      <p>
        {name} - {price}
      </p>
      <button
        className="rounded bg-[#015BBB] px-2 py-1 text-white"
        onClick={onSelectMenuItem}
      >
        Select
      </button>
    </article>
  )
}