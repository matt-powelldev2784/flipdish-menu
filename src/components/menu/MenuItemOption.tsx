import { MenuItemOptionSetT } from 'menuData/menuData'
import { MenuItemOptionItem } from './MenuItemOptionItem'

interface MenuItemOptionProps {
  MenuItemOptionSets: MenuItemOptionSetT
}

export const MenuItemOption = ({ MenuItemOptionSets }: MenuItemOptionProps) => {
  return (
    <div key={MenuItemOptionSets.MenuItemOptionSetId}>
      <p className="bg-orange-100 text-green-500">{MenuItemOptionSets.Name}</p>

      {MenuItemOptionSets.MenuItemOptionSetItems.map(
        (MenuItemOptionSetItems) => {
          return (
            <MenuItemOptionItem
              key={MenuItemOptionSetItems.MenuItemOptionSetItemId}
              MenuItemOptionSetItems={MenuItemOptionSetItems}
            />
          )
        }
      )}
    </div>
  )
}
