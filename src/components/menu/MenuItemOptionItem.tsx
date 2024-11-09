import { MenuItemOptionSetItemT } from 'menuData/menuData'

interface MenuItemOptionItemProps {
  MenuItemOptionSetItems: MenuItemOptionSetItemT
}

export const MenuItemOptionItem = ({
  MenuItemOptionSetItems
}: MenuItemOptionItemProps) => {
  return (
    <div
      className="bg-green-100"
      key={MenuItemOptionSetItems.MenuItemOptionSetItemId}
    >
      <p className="bg-blue-500 text-yellow-500">
        {MenuItemOptionSetItems.Name} - {MenuItemOptionSetItems.Price}
      </p>
    </div>
  )
}
