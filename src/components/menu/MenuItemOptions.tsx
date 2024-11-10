import { MenuItemOptionSetT } from 'menuData/menuData'
import { MenuItemOptionItem } from './MenuItemOptionItem'
import { Dispatch, SetStateAction, useState } from 'react'

interface MenuItemOptionProps {
  MenuItemOptionSets: MenuItemOptionSetT
  setItemPrice: Dispatch<SetStateAction<number>>
  basePrice: number
}

export const MenuItemOptions = ({
  MenuItemOptionSets,
  setItemPrice,
  basePrice
}: MenuItemOptionProps) => {
  const [masterItemSelected, setMasterItemSelected] = useState(false)
  const isMasterSetItem = MenuItemOptionSets.IsMasterOptionSet

  return (
    <div key={MenuItemOptionSets.MenuItemOptionSetId}>
      <p className="bg-orange-100 text-green-500">{MenuItemOptionSets.Name}</p>
      <p className="bg-orange-100 text-green-500">
        isMasterSetItem = {isMasterSetItem.toString()}
      </p>

      {MenuItemOptionSets.MenuItemOptionSetItems.map(
        (MenuItemOptionSetItems) => {
          return (
            <MenuItemOptionItem
              key={MenuItemOptionSetItems.MenuItemOptionSetItemId}
              MenuItemOptionSetItems={MenuItemOptionSetItems}
              setItemPrice={setItemPrice}
              isMasterSetItem={MenuItemOptionSets.IsMasterOptionSet}
              masterItemSelected={masterItemSelected}
              setMasterItemSelected={setMasterItemSelected}
              basePrice={basePrice}
            />
          )
        }
      )}
    </div>
  )
}
