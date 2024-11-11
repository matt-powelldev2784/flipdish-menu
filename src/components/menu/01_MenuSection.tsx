import { MenuSectionT } from 'menuData/menuData'
import { MenuItem } from './02_MenuItem'

interface MenuSectionProps {
  MenuSection: MenuSectionT
}

export const MenuSection = ({ MenuSection }: MenuSectionProps) => {
  return (
    <div className="mt-8" key={MenuSection.MenuSectionId}>
      <p className="bg-slate-500 text-red-500">{MenuSection.Name}</p>

      <div>
        {MenuSection.MenuItems.map((menuItems) => {
          return <MenuItem key={menuItems.MenuItemId} MenuItems={menuItems} />
        })}
      </div>
    </div>
  )
}
