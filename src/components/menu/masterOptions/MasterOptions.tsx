import { useMenuContext } from 'cartContext/CartContext'
import { findMenuItemById } from 'utils/findMenuItemById'
import { MenuItem } from '../menuItems/MenuItem'

export const MasterOptions = () => {
  const { currentMenuItemType, currentMenuItemId, setCurrentMenuItemType } =
    useMenuContext()
  if (!currentMenuItemId) return <p>error</p>
  const menuItem = findMenuItemById(currentMenuItemId)
  if (menuItem === '') return <p>error</p>
  const menuOptions = menuItem.MenuItemOptionSets

  //render master options
  return (
    <div className="mt-2 flex flex-col items-center">
      {/******* render header ********/}
      <button
        className="w-[300px] bg-slate-400 p-2 text-xl "
        onClick={() => {
          setCurrentMenuItemType(null)
        }}
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
              <MenuItem
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