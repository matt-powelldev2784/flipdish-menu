import { MenuItemT } from 'menuData/menuData'
import { MenuItemOptions } from './03_MenuItemOptions'
import { useState } from 'react'

interface MenuItemsProps {
  MenuItems: MenuItemT
}

export const MenuItem = ({ MenuItems }: MenuItemsProps) => {
  const [itemPrice, setItemPrice] = useState(MenuItems.Price)
  const [menuItemSelected, setMenuItemSelected] = useState(false)

  return (
    <div className="mt-4 border-2" key={MenuItems.MenuSectionId}>
      <div className="flex w-full justify-around">
        <p className="w-full bg-red-100 text-blue-500">
          {MenuItems.Name} - {MenuItems.Description} - {MenuItems.Price}
        </p>
        <button
          onClick={() => setMenuItemSelected(!menuItemSelected)}
          className="bg-blue-500 p-2 text-xl"
        >
          Add Item
        </button>
        <p className="mr-4 font-bold">{itemPrice}</p>
      </div>

      {MenuItems.MenuItemOptionSets.map((MenuItemOptionSets) => {
        if (menuItemSelected === false) return null

        return (
          <MenuItemOptions
            key={MenuItemOptionSets.MenuItemOptionSetId}
            MenuItemOptionSets={MenuItemOptionSets}
            setItemPrice={setItemPrice}
            basePrice={MenuItems.Price}
          />
        )
      })}
    </div>
  )
}
