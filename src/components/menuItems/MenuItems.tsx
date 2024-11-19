import { MenuSectionT } from 'menuData/menuData'
import { MenuItem } from './MenuItem'

interface MenuItemsProps {
  MenuSection: MenuSectionT
}

export const MenuItems = ({ MenuSection }: MenuItemsProps) => {
  const menuItems = MenuSection.MenuItems

  return (
    <section
      className="mx-4 mt-3 w-full max-w-[700px]"
      key={MenuSection.MenuSectionId}
    >
      <p className="bg-[#015BBB] p-2 text-center text-white">
        {MenuSection.Name}
      </p>

      <div className="flex w-full flex-col">
        {menuItems.map((menuItem) => {
          return <MenuItem key={menuItem.MenuItemId} menuItem={menuItem} />
        })}
      </div>
    </section>
  )
}
