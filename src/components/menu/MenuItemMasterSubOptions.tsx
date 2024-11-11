import { MenuItemOptionSetItemT } from 'menuData/menuData'
import { Dispatch, SetStateAction } from 'react'

interface MenuItemOptionItemProps {
  MenuItemOptionSetItems: MenuItemOptionSetItemT
  setItemPrice: Dispatch<SetStateAction<number>>
  isMasterSetItem: boolean
  masterItemSelected: boolean
  setMasterItemSelected: Dispatch<SetStateAction<boolean>>
  basePrice: number
}

export const MenuItemMasterSubOptions = ({
  MenuItemOptionSetItems,
  setItemPrice,
  masterItemSelected,
  setMasterItemSelected,
  basePrice
}: MenuItemOptionItemProps) => {
  const displayOrder = MenuItemOptionSetItems.DisplayOrder

  const selectItem = () => {
    setMasterItemSelected(true)
    setItemPrice((prev) => {
      return prev + MenuItemOptionSetItems.Price
    })
  }

  const deselectItem = () => {
    setMasterItemSelected(false)
    setItemPrice((prev) => {
      return prev - MenuItemOptionSetItems.Price
    })
  }

  return (
    <div
      className="bg-green-100"
      key={MenuItemOptionSetItems.MenuItemOptionSetItemId}
    >
      {masterItemSelected === false && (
        <>
          <p className="mt-1 bg-blue-500 text-yellow-500">
            {MenuItemOptionSetItems.Name}
            <br />
            options price = {MenuItemOptionSetItems.Price}
            <br />
            display order = {displayOrder}
          </p>
          <button
            onClick={masterItemSelected ? deselectItem : selectItem}
            className=" bg-slate-500 p-2 text-3xl "
          >
            {masterItemSelected ? 'Deselect' : 'Select'}
          </button>
        </>
      )}

      {masterItemSelected === true && (
        <button
          onClick={() => {
            setItemPrice(basePrice)
            setMasterItemSelected(false)
          }}
          className="bg-slate-500 p-2 text-3xl"
        >
          Reset Item {displayOrder}
        </button>
      )}
    </div>
  )
}
