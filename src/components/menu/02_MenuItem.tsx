import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemT } from 'menuData/menuData'

interface MenuItemsProps {
  MenuItems: MenuItemT
}

export const MenuItem = ({ MenuItems }: MenuItemsProps) => {
  const itemPrice = MenuItems.Price
  const menuItemId = MenuItems.MenuItemId
  const { setCurrentMenuItemId } = useMenuContext()

  return (
    <div className="mt-4 border-2" key={MenuItems.MenuSectionId}>
      <div className="flex w-full justify-around">
        <p className="w-full bg-red-100 text-blue-500">
          {MenuItems.Name} - {MenuItems.Description} - {MenuItems.Price}
        </p>
        <button
          onClick={() => setCurrentMenuItemId(menuItemId)}
          className="bg-blue-500 p-2 text-xl"
        >
          Add Item
        </button>
        <p className="mr-4 font-bold">{itemPrice}</p>
      </div>
    </div>
  )
}
