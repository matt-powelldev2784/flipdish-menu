/* eslint-disable prettier/prettier */
import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemT } from 'menuData/menuData'
import { useState } from 'react'

interface MasterItemProps {
  menuItem: MenuItemT
}

export const MenuSubOptions = ({ menuItem }: MasterItemProps) => {
  const [masterItemSelected, setMasterItemSelected] = useState(false)
  const { setCurrentMenuItemId, currentMasterItemId, setCurrentMasterItemId } =
    useMenuContext()
  const menuOptions = menuItem.MenuItemOptionSets

  return (
    <div>
      <button
        onClick={() => setCurrentMenuItemId(null)}
        className="bg-slate-400 p-2 text-xl"
      >
        Back to Menu
      </button>
      <p>{menuItem.Name}</p>

      {menuOptions.map((menuOption) => {
        const isMasterOption = menuOption.IsMasterOptionSet

        // when one master item is selected filter out all other master items
        // this is so two master items are not selected at the same time
        // for instance you cannot select a small and large chips and the same time
        const menuItems = menuOption.MenuItemOptionSetItems.filter((item) => {
          if (!masterItemSelected) return true
          if (!isMasterOption) return true
          return item.MenuItemOptionSetItemId === currentMasterItemId
        })

        return menuItems.map((menuItem) => {
          return (
            <div
              key={menuItem.MenuItemOptionSetItemId}
              className="m-4 flex flex-row justify-between"
            >
              <p>
                {menuItem.Name}- {menuItem.Price}
              </p>
              <button
                className="bg-slate-500 p-2"
                onClick={() => {
                  setCurrentMasterItemId(menuItem.MenuItemOptionSetItemId)
                  setMasterItemSelected(true)
                }}
              >
                Add Item
              </button>
            </div>
          )
        })
      })}
    </div>
  )
}
