import { MenuItemType, useMenuContext } from 'cartContext/CartContext'

interface MenuItemProps {
  id: number
  menuItemType: MenuItemType
  name: string
  price: number
  description: string
  imageUrl: string
}

export const MenuItem = ({
  id,
  name,
  price,
  menuItemType,
  description,
  imageUrl
}: MenuItemProps) => {
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
      className=" my-2 flex h-28 w-full flex-row items-center justify-between rounded bg-neutral-300 p-2 px-10"
    >
      <div className="relative size-20 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="size-full rounded-xl object-cover"
        />
      </div>

      <div className="flex w-[400px] max-w-[400px] flex-col items-start justify-center py-2">
        <p className="font-bold">{name}</p>
        <p className="text-sm">{description}</p>
        {menuItemType === 'master' ? (
          <p className="text-sm text-red-500"> Select item for price options</p>
        ) : (
          <p>£{price.toFixed(2)}</p>
        )}
      </div>

      <button
        className="w-20 rounded bg-[#015BBB] px-2 py-1 text-white"
        onClick={onSelectMenuItem}
      >
        Select
      </button>
    </article>
  )
}
