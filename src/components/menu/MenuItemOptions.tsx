import { MenuItemOptionSetT } from 'menuData/menuData'
import { MenuItemSubOptions } from './MenuItemSubOptions'
import { Dispatch, SetStateAction } from 'react'

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
            <MenuItemSubOptions
              key={MenuItemOptionSetItems.MenuItemOptionSetItemId}
              MenuItemOptionSetItems={MenuItemOptionSetItems}
              setItemPrice={setItemPrice}
              isMasterSetItem={MenuItemOptionSets.IsMasterOptionSet}
              basePrice={basePrice}
            />
          )
        }
      )}
    </div>
  )
}
