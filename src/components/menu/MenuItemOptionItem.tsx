import { MenuItemOptionSetItemT } from 'menuData/menuData'
import { Dispatch, SetStateAction } from 'react'

interface MenuItemOptionItemProps {
  MenuItemOptionSetItems: MenuItemOptionSetItemT
  setItemPrice: Dispatch<SetStateAction<number>>
}

export const MenuItemOptionItem = ({
  MenuItemOptionSetItems,
  setItemPrice
}: MenuItemOptionItemProps) => {
  const displayOrder = MenuItemOptionSetItems.DisplayOrder

  const addToItemPrice = (price: number) => {
    console.log('price', price)
    setItemPrice((prev) => {
      console.log('prev', prev)
      return prev || 0 + price
    })
  }
  const subtractFromItemPrice = (price: number) =>
    setItemPrice((prev) => prev || 0 - price)

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
      <button
        onClick={() => addToItemPrice(MenuItemOptionSetItems.Price)}
        className="size-12 bg-slate-500 text-3xl "
      >
        +
      </button>
      <button
        onClick={() => subtractFromItemPrice(MenuItemOptionSetItems.Price)}
        className="size-12 bg-slate-500 text-3xl "
      >
        -
      </button>
    </div>
  )
}
