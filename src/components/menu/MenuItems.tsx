import { MenuSectionT } from 'menuData/menuData'
import { useMenuContext } from 'cartContext/CartContext'
import { MenuItem } from './MenuItem'

interface MenuSectionProps {
  MenuSection: MenuSectionT
}

export type MenuItemType = 'master' | 'options' | 'noOptions' | undefined

export const MenuItems = ({ MenuSection }: MenuSectionProps) => {
  const { setCurrentMenuItemId } = useMenuContext()
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

          const masterMenuItems = menuOptions.filter(
            (menuOption) => menuOption.IsMasterOptionSet
          )

          const getMenuItemType = (): MenuItemType => {
            if (menuItemHasMasterOptions) return 'master'
            if (menuItemHasOptions) return 'options'
            if (menuItemHasNoOptions) return 'noOptions'
          }

          const menuItemType = getMenuItemType()

          return (
            <>
              {masterMenuItems && (
                <MenuItem
                  id={menuItem.MenuItemId}
                  name={menuItem.Name}
                  price={menuItem.Price}
                  contextUpdateFunction={setCurrentMenuItemId}
                  menuItemType={menuItemType}
                />
              )}
            </>
          )
        })}
      </div>
    </section>
  )
}
