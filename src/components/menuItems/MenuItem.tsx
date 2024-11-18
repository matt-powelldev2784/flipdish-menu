import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemT } from 'menuData/menuData'

interface MenuItemProps {
  menuItem: MenuItemT
}

export const MenuItem = ({ menuItem }: MenuItemProps) => {
  const {
    addToCart,
    setCurrentMenuItemId,
    setTempCartItem,
    setCurrentMenuLevel
  } = useMenuContext()
  const menuItemHasOptions = menuItem.MenuItemOptionSets.length > 0
  const id = menuItem.MenuItemId
  const name = menuItem.Name
  const description = menuItem.Description
  const price = menuItem.Price
  const noImageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
  const imageUrl = menuItem.ImageUrl || noImageUrl
  const itemIsPricedByMasterOption = menuItem.MenuItemOptionSets.some(
    (optionSet) => optionSet.IsMasterOptionSet
  )

  const onSelectMenuItem = () => {
    if (menuItemHasOptions === false) {
      return addToCart({
        id: Date.now(),
        menuItemId: id,
        name,
        price,
        quantity: 1
      })
    }

    if (menuItemHasOptions === true) {
      setTempCartItem({
        id: Date.now(),
        menuItemId: id,
        name,
        price,
        quantity: 1
      })

      setCurrentMenuItemId(id)
      setCurrentMenuLevel('options')
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
        {itemIsPricedByMasterOption ? (
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
