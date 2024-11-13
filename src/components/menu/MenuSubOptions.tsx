import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemT } from 'menuData/menuData'
import { useSelectedOption } from './hooks/useSelectedOption'

interface MasterItemProps {
  menuItem: MenuItemT
}

export const MenuSubOptions = ({ menuItem }: MasterItemProps) => {
  const { setCurrentMenuItemId, currentMasterItemId } = useMenuContext()
  const { masterItemSelected, selectedOptions, onSelectOption } =
    useSelectedOption()
  const menuOptions = menuItem.MenuItemOptionSets

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={() => setCurrentMenuItemId(null)}
        className="w-[300px] bg-slate-400 p-2 text-xl"
      >
        Back to Menu
      </button>
      <p className="font-bold">{menuItem.Name}</p>

      {/******* render selected options ********/}
      <div className="flex flex-col items-center">
        <p>Selected Options</p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-2">
          {selectedOptions.map((option) => {
            //render selected options
            return (
              <p
                key={option.id}
                className="rounded-xl bg-[#015BBB] px-2 py-1 text-white"
              >
                {option.name}
              </p>
            )
          })}
        </div>
      </div>

      {/******* when menu options exist, render the menu options ********/}
      {menuOptions.map((menuOption) => {
        const isMasterOption = menuOption.IsMasterOptionSet

        // when one master item is selected filter out all other master items
        // this is so two master items are not selected at the same time
        // for instance you cannot select a small and large chips and the same time
        const menuOptions = menuOption.MenuItemOptionSetItems.filter(
          (option) => {
            if (!masterItemSelected) return true
            if (!isMasterOption) return true
            return option.MenuItemOptionSetItemId === currentMasterItemId
          }
        )

        return menuOptions.map((menuOption) => {
          return (
            <div
              key={menuOption.MenuItemOptionSetItemId}
              className="m-4 flex flex-row justify-between"
            >
              <p>
                {menuOption.Name}- {menuOption.Price}
              </p>
              <button
                className="bg-slate-500 p-2"
                onClick={() => {
                  onSelectOption({ isMasterOption, menuOption })
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
