import { MenuSectionT } from 'menuData/menuData'
import { MenuItem } from './MenuItem'
import { MenuItemType } from 'cartContext/CartContext'

interface MenuSectionProps {
  MenuSection: MenuSectionT
}

export const MenuItems = ({ MenuSection }: MenuSectionProps) => {
  const menuItems = MenuSection.MenuItems

  return (
    <section
      className="mx-4 mt-3 w-full max-w-[700px]"
      key={MenuSection.MenuSectionId}
    >
      <p className="bg-[#015BBB] p-2 text-center text-white">
        {MenuSection.Name}
      </p>

      <div className="flex w-full flex-col gap-2">
        {menuItems.map((menuItem) => {
          const menuOptions = menuItem.MenuItemOptionSets

          const menuItemHasMasterOptions = menuOptions.some(
            (menuOption) => menuOption.IsMasterOptionSet
          )
          const menuItemHasOptions = menuOptions.some(
            (menuOption) => !menuOption.IsMasterOptionSet
          )
          const menuItemHasNoOptions = menuOptions.length === 0

          const getMenuItemType = (): MenuItemType => {
            if (menuItemHasMasterOptions) return 'master'
            if (menuItemHasOptions) return 'options'
            if (menuItemHasNoOptions) return 'noOptions'
            return null
          }

          const menuItemType = getMenuItemType()

          return (
            <MenuItem
              key={menuItem.MenuItemId}
              id={menuItem.MenuItemId}
              name={menuItem.Name}
              price={menuItem.Price}
              menuItemType={menuItemType}
            />
          )
        })}
      </div>
    </section>
  )
}
