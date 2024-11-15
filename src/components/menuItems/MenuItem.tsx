import { MenuItemType, useMenuContext } from 'cartContext/CartContext'

interface MenuItemProps {
  id: number
  menuItemType: MenuItemType
  name: string
  price: number
}

export const MenuItem = ({ id, name, price, menuItemType }: MenuItemProps) => {
  const {
    addToCart,
    setCurrentMenuItemId,
    setCurrentMenuItemType,
    setTempCartItem,
    setCurrentMenuLevel
  } = useMenuContext()

  const onSelectMenuItem = () => {
    if (menuItemType === 'noOptions') {
      return addToCart({
        id: Date.now(),
        menuItemType: 'noOptions',
        menuItemId: id,
        name,
        price,
        quantity: 1
      })
    }

    if (menuItemType === 'master') {
      setTempCartItem({
        id: Date.now(),
        menuItemType: 'master',
        menuItemId: id,
        name,
        price,
        quantity: 1
      })

      setCurrentMenuItemId(id)
      setCurrentMenuItemType(menuItemType)
      setCurrentMenuLevel('master')
    }

    if (menuItemType === 'subOptions') {
      setTempCartItem({
        id: Date.now(),
        menuItemType: 'subOptions',
        menuItemId: id,
        name,
        price,
        quantity: 1
      })

      setCurrentMenuItemId(id)
      setCurrentMenuItemType(menuItemType)
      setCurrentMenuLevel('subOptions')
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
        className="w-20 rounded bg-[#015BBB] px-2 py-1 text-white"
        onClick={onSelectMenuItem}
      >
        Select
      </button>
    </article>
  )
}
