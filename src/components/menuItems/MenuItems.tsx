import { MenuSectionT } from 'menuData/menuData'
import { MenuItemType } from 'cartContext/CartContext'
import { MenuItem } from './MenuItem'

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

      <div className="flex w-full flex-col">
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
            if (menuItemHasOptions) return 'subOptions'
            if (menuItemHasNoOptions) return 'noOptions'
            return null
          }
          const menuItemType = getMenuItemType()

          const defaultImageUrl =
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'

          return (
            <MenuItem
              key={menuItem.MenuItemId}
              id={menuItem.MenuItemId}
              name={menuItem.Name}
              price={menuItem.Price}
              menuItemType={menuItemType}
              description={menuItem.Description || ''}
              imageUrl={menuItem.ImageUrl || defaultImageUrl}
            />
          )
        })}
      </div>
    </section>
  )
}
