import { MenuItemOptionSetItemT } from 'menuData/menuData'
import { Dispatch, SetStateAction } from 'react'

interface MenuItemOptionItemProps {
  MenuItemOptionSetItems: MenuItemOptionSetItemT
  setItemPrice?: Dispatch<SetStateAction<number | undefined>>
}

export const MenuItemOptionItem = ({
  MenuItemOptionSetItems
}: MenuItemOptionItemProps) => {
  const displayOrder = MenuItemOptionSetItems.DisplayOrder

  return (
    <div
      className="bg-green-100"
      key={MenuItemOptionSetItems.MenuItemOptionSetItemId}
    >
      <p className="mt-1 bg-blue-500 text-yellow-500">
        {MenuItemOptionSetItems.Name}
        <br />
        options price = {MenuItemOptionSetItems.Price}
        <br />
        display order = {displayOrder}
      </p>
      <button className="size-12 bg-slate-500 text-3xl ">+</button>
      <button className="size-12 bg-slate-500 text-3xl ">-</button>
    </div>
  )
}
