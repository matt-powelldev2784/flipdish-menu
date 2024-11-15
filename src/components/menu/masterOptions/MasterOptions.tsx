import { useMenuContext } from 'cartContext/CartContext'
import { findMenuItemById } from 'utils/findMenuItemById'
import { MasterOption } from './MasterOption'

export const MasterOptions = () => {
  const { currentMenuItemId, resetMenuItemsState, currentMenuItemType } =
    useMenuContext()
  if (!currentMenuItemId) return <p>master options error</p>
  const menuItem = findMenuItemById(currentMenuItemId)
  if (menuItem === '') return <p>master options error</p>
  const menuOptions = menuItem.MenuItemOptionSets

  //render master options
  return (
    <div className="mt-2 flex flex-col items-center">
      {/******* render header ********/}
      <button
        onClick={resetMenuItemsState}
        className="w-[300px] bg-slate-400 p-2 text-xl "
      >
        Back to Menu
      </button>
      <p className="font-bold">{menuItem.Name}</p>

      {/******* render master options ********/}
      <div className="flex w-full flex-col items-center gap-2">
        {menuOptions.map((menuOption) => {
          const isMasterOption = menuOption.IsMasterOptionSet
          if (!isMasterOption) return null
          const menuOptions = menuOption.MenuItemOptionSetItems

          return menuOptions.map((menuOption) => {
            return (
              <MasterOption
                key={menuOption.MenuItemOptionSetItemId}
                id={menuOption.MenuItemOptionSetItemId}
                name={menuOption.Name}
                price={menuOption.Price}
                menuItemType={currentMenuItemType}
              />
            )
          })
        })}
      </div>
    </div>
  )
}
