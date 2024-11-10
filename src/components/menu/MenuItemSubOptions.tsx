import { MenuItemOptionSetItemT } from 'menuData/menuData'
import { Dispatch, SetStateAction, useState } from 'react'

interface MenuItemOptionItemProps {
  MenuItemOptionSetItems: MenuItemOptionSetItemT
  setItemPrice: Dispatch<SetStateAction<number>>
  isMasterSetItem: boolean
  masterItemSelected: boolean
  setMasterItemSelected: Dispatch<SetStateAction<boolean>>
  basePrice: number
}

export const MenuItemSubOptions = ({
  MenuItemOptionSetItems,
  setItemPrice,
  isMasterSetItem,
  masterItemSelected,
  setMasterItemSelected,
  basePrice
}: MenuItemOptionItemProps) => {
  const [itemSelected, setItemSelected] = useState(false)
  const displayOrder = MenuItemOptionSetItems.DisplayOrder

  const selectItem = () => {
    setItemPrice((prev) => {
      if (isMasterSetItem) {
        setMasterItemSelected(true)
        return prev + MenuItemOptionSetItems.Price
      } else {
        setItemSelected(true)
        return prev + MenuItemOptionSetItems.Price
      }
    })
  }
  const deselectItem = () => {
    setItemPrice((prev) => {
      if (isMasterSetItem) {
        setMasterItemSelected(true)
        return prev - MenuItemOptionSetItems.Price
      } else {
        setItemSelected(false)
        return prev - MenuItemOptionSetItems.Price
      }
    })
  }

  return (
    <div
      className="bg-green-100"
      key={MenuItemOptionSetItems.MenuItemOptionSetItemId}
    >
      {masterItemSelected === false && isMasterSetItem === true && (
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

      {masterItemSelected === true && isMasterSetItem === true && (
        <button
          onClick={() => {
            setMasterItemSelected(false)
            setItemPrice(basePrice)
          }}
          className="bg-slate-500 p-2 text-3xl"
        >
          Reset Item1
        </button>
      )}

      {isMasterSetItem === false && (
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
    </div>
  )
}
