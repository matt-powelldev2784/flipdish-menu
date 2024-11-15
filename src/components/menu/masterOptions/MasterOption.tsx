import { useMenuContext } from 'cartContext/CartContext'

interface MenuItemProps {
  id: number
  name: string
  price: number
}

export const MasterOption = ({ id, name, price }: MenuItemProps) => {
  const { setTempCartItems, currentMenuItemType, setCurrentMenuLevel } =
    useMenuContext()

  const onSelectMenuItem = () => {
    setTempCartItems((prev) => [
      ...prev,
      {
        menuItemType: currentMenuItemType,
        id: Date.now(),
        menuItemId: id,
        name,
        price,
        quantity: 1
      }
    ])
    setCurrentMenuLevel('subOptions')
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