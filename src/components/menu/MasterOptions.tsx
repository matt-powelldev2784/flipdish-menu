import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemT } from 'menuData/menuData'
import { useSelectedOption } from './hooks/useSelectedOption'

interface MasterItemProps {
  menuItem: MenuItemT
}

export const MasterOptions = ({ menuItem }: MasterItemProps) => {
  const { setCurrentMenuItemId } = useMenuContext()
  const { masterItemSelected, selectedOptions, onSelectOption } =
    useSelectedOption()
  const menuOptions = menuItem.MenuItemOptionSets

  return (
    <div className="mt-2 flex flex-col items-center">
      {/******* render header ********/}
      <button
        onClick={() => setCurrentMenuItemId(null)}
        className="w-[300px] bg-slate-400 p-2 text-xl"
      >
        Back to Menu
      </button>
      <p className="font-bold">{menuItem.Name}</p>

      {/******* render selected options ********/}
      <div className="my-2 flex flex-col items-center rounded-xl">
        <p>Selected Options</p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-2">
          {selectedOptions.length === 0 && <p>No options selected</p>}

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
      <div className="flex w-full flex-col items-center gap-2">
        {menuOptions.map((menuOption) => {
          const isMasterOption = menuOption.IsMasterOptionSet
          if (!isMasterOption) return null

          // when one master item is selected filter out all other master items
          // this is so two master items are not selected at the same time
          // for instance you cannot select a small and large chips and the same time
          const menuOptions = menuOption.MenuItemOptionSetItems.filter(() => {
            if (masterItemSelected) return null
            return true
          })

          return menuOptions.map((menuOption) => {
            return (
              <div
                key={menuOption.MenuItemOptionSetItemId}
                className=" flex w-full max-w-96 flex-row items-center justify-between rounded bg-neutral-300 p-2 px-10"
              >
                <p>
                  {menuOption.Name}- {menuOption.Price}
                </p>
                <button
                  className="rounded bg-[#015BBB] px-2 py-1 text-white"
                  onClick={() => {
                    onSelectOption({ isMasterOption, menuOption })
                  }}
                >
                  +
                </button>
              </div>
            )
          })
        })}
      </div>
    </div>
  )
}
