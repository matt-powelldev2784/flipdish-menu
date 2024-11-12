import { MenuSectionT } from 'menuData/menuData'
import { useMenuContext } from 'cartContext/CartContext'

interface MenuSectionProps {
  MenuSection: MenuSectionT
}

export const MenuSection = ({ MenuSection }: MenuSectionProps) => {
  const { setCurrentMenuItemId } = useMenuContext()
  const menuItems = MenuSection.MenuItems

  return (
    <div className="mt-8" key={MenuSection.MenuSectionId}>
      <p className="bg-slate-500 text-red-500">{MenuSection.Name}</p>

      <div>
        {menuItems.map((menuItem) => {
          const itemPrice = menuItem.Price
          const menuItemId = menuItem.MenuItemId

          return (
            <div className="mt-4 border-2" key={menuItemId}>
              <div className="flex w-full justify-around">
                <p className="w-full bg-red-100 text-blue-500">
                  {menuItem.Name} - {menuItem.Description} - {menuItem.Price}
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
        })}
      </div>
    </div>
  )
}