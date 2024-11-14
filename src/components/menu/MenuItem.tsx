import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemType } from './MenuItems'

interface MenuItemProps {
  id: number
  menuItemType: MenuItemType
  name: string
  price: number
}

export const MenuItem = ({ id, name, price, menuItemType }: MenuItemProps) => {
  const { addItem, setCurrentMenuItemId } = useMenuContext()

  const onSelectMenuItem = () => {
    if (menuItemType === 'noOptions') {
      addItem({
        id: Date.now(),
        menuItemId: id,
        name,
        price,
        quantity: 1
      })
    }

    if (menuItemType === 'options') {
      setCurrentMenuItemId(id)
    }

    if (menuItemType === 'options') {
      setCurrentMenuItemId(id)
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
