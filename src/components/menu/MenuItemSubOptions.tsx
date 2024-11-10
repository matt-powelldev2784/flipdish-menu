import { MenuItemOptionSetItemT } from 'menuData/menuData'
import { Dispatch, SetStateAction, useState } from 'react'

interface MenuItemOptionItemProps {
  MenuItemOptionSetItems: MenuItemOptionSetItemT
  setItemPrice: Dispatch<SetStateAction<number>>
  isMasterSetItem: boolean

  basePrice: number
}

export const MenuItemSubOptions = ({
  MenuItemOptionSetItems,
  setItemPrice,
  isMasterSetItem,
  basePrice
}: MenuItemOptionItemProps) => {
  const [itemSelected, setItemSelected] = useState(false)
  const displayOrder = MenuItemOptionSetItems.DisplayOrder

  const selectItem = () => {
    setItemSelected(true)
    setItemPrice((prev) => {
      return prev + MenuItemOptionSetItems.Price
    })
  }

  const deselectItem = () => {
    setItemSelected(false)
    setItemPrice((prev) => {
      return prev - MenuItemOptionSetItems.Price
    })
  }

  return (
    <div
      className="bg-green-100"
      key={MenuItemOptionSetItems.MenuItemOptionSetItemId}
    >
      {itemSelected === false && isMasterSetItem === true && (
        <>
          <p className="mt-1 bg-blue-500 text-yellow-500">
            {MenuItemOptionSetItems.Name}
            <br />
            options price = {MenuItemOptionSetItems.Price}
            <br />
            display order = {displayOrder}
          </p>
          <button
            onClick={itemSelected ? deselectItem : selectItem}
            className=" bg-slate-500 p-2 text-3xl "
          >
            {itemSelected ? 'Deselect' : 'Select'}
          </button>
        </>
      )}

      {itemSelected === true && isMasterSetItem === true && (
        <button
          onClick={() => {
            setItemPrice(basePrice)
            setItemSelected(false)
          }}
          className="bg-slate-500 p-2 text-3xl"
        >
          Reset Item {displayOrder}
        </button>
      )}

      {isMasterSetItem === false && (
        <>
          <p className="mt-1 bg-yellow-500 text-slate-500">
            {MenuItemOptionSetItems.Name}
            <br />
            options price = {MenuItemOptionSetItems.Price}
            <br />
            display order = {displayOrder}
          </p>
          <button
            onClick={itemSelected ? deselectItem : selectItem}
            className=" bg-slate-500 p-2 text-3xl "
          >
            {itemSelected ? 'Deselect' : 'Select'}
          </button>
        </>
      )}
    </div>
  )
}
