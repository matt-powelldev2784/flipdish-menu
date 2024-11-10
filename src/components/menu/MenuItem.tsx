import { MenuItemT } from 'menuData/menuData'
import { MenuItemOption } from './MenuItemOption'
import { useState } from 'react'

interface MenuItemsProps {
  MenuItems: MenuItemT
}

export const MenuItem = ({ MenuItems }: MenuItemsProps) => {
  const [itemPrice, setItemPrice] = useState(MenuItems.Price)

  return (
    <div className="mt-4 border-2" key={MenuItems.MenuSectionId}>
      <div className="flex w-full justify-around">
        <p className="w-full bg-red-100 text-blue-500">
          {MenuItems.Name} - {MenuItems.Description} - {MenuItems.Price}
        </p>
        <p className="mr-4 font-bold">{itemPrice}</p>
      </div>

      {MenuItems.MenuItemOptionSets.map((MenuItemOptionSets) => {
        return (
          <MenuItemOption
            key={MenuItemOptionSets.MenuItemOptionSetId}
            MenuItemOptionSets={MenuItemOptionSets}
            setItemPrice={setItemPrice}
          />
        )
      })}
    </div>
  )
}
