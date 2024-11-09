import { MenuItemT } from 'menuData/menuData'
import { MenuItemOption } from './MenuItemOption'

interface MenuItemsProps {
  MenuItems: MenuItemT
}

export const MenuItem = ({ MenuItems }: MenuItemsProps) => {
  return (
    <div className="mt-4" key={MenuItems.MenuSectionId}>
      <p className="bg-red-100 text-blue-500">
        {MenuItems.Name} - {MenuItems.Description} - {MenuItems.Price}
      </p>

      {MenuItems.MenuItemOptionSets.map((MenuItemOptionSets) => {
        return (
          <MenuItemOption
            key={MenuItemOptionSets.MenuItemOptionSetId}
            MenuItemOptionSets={MenuItemOptionSets}
          />
        )
      })}
    </div>
  )
}
