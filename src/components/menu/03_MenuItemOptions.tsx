import { MenuItemOptionSetT } from 'menuData/menuData'
import { MenuItemSubOptions } from './04b_MenuItemSubOptions'
import { Dispatch, SetStateAction, useState } from 'react'
import { MenuItemMasterOptions } from './04a_MenuItemMasterOptions'

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

      {
        // Split master items and sub options into separate components
        // This is done so multiple master items can be selected
      }
      {MenuItemOptionSets.MenuItemOptionSetItems.map(
        (MenuItemOptionSetItems) => {
          if (isMasterSetItem === true) {
            return (
              // Master items
              <MenuItemMasterOptions
                key={MenuItemOptionSetItems.MenuItemOptionSetItemId}
                MenuItemOptionSetItems={MenuItemOptionSetItems}
                setItemPrice={setItemPrice}
                isMasterSetItem={MenuItemOptionSets.IsMasterOptionSet}
                basePrice={basePrice}
                masterItemSelected={masterItemSelected}
                setMasterItemSelected={setMasterItemSelected}
              />
            )
          } else {
            return (
              // Sub options
              <MenuItemSubOptions
                key={MenuItemOptionSetItems.MenuItemOptionSetItemId}
                MenuItemOptionSetItems={MenuItemOptionSetItems}
                setItemPrice={setItemPrice}
                isMasterSetItem={MenuItemOptionSets.IsMasterOptionSet}
              />
            )
          }
        }
      )}
    </div>
  )
}
