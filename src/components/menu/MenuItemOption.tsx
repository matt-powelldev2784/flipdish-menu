import { MenuItemOptionSetT } from 'menuData/menuData'
import { MenuItemOptionItem } from './MenuItemOptionItem'
import { Dispatch, SetStateAction } from 'react'

interface MenuItemOptionProps {
  MenuItemOptionSets: MenuItemOptionSetT
  setItemPrice?: Dispatch<SetStateAction<number | undefined>>
}

export const MenuItemOption = ({
  MenuItemOptionSets,
  setItemPrice
}: MenuItemOptionProps) => {
  const isMasterSetItem = MenuItemOptionSets.IsMasterOptionSet.toString()

  return (
    <div key={MenuItemOptionSets.MenuItemOptionSetId}>
      <p className="bg-orange-100 text-green-500">{MenuItemOptionSets.Name}</p>
      <p className="bg-orange-100 text-green-500">
        isMasterSetItem = {isMasterSetItem}
      </p>

      {MenuItemOptionSets.MenuItemOptionSetItems.map(
        (MenuItemOptionSetItems) => {
          return (
            <MenuItemOptionItem
              key={MenuItemOptionSetItems.MenuItemOptionSetItemId}
              MenuItemOptionSetItems={MenuItemOptionSetItems}
              setItemPrice={setItemPrice}
            />
          )
        }
      )}
    </div>
  )
}
