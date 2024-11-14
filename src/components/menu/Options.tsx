import { useMenuContext } from 'cartContext/CartContext'
import { MenuItem } from './MenuItem'
import { findMenuItemById } from 'utils/findMenuItemById'

export const Options = () => {
  const { menuItemType, menuItemId } = useMenuContext()
  if (!menuItemId) return <p>error</p>
  const menuItem = findMenuItemById(menuItemId)
  if (menuItem === '') return <p>error</p>
  const menuOptions = menuItem.MenuItemOptionSets

  //render master options
  return (
    <div className="mt-2 flex flex-col items-center">
      {/******* render header ********/}
      <button
        className="w-[300px] bg-slate-400 p-2 text-xl "
        onClick={() => {}}
      >
        Back to Menu
      </button>
      <p className="font-bold">{menuItem.Name}</p>

      {/******* render master options ********/}
      <div className="flex w-full flex-col items-center gap-2">
        {menuOptions.map((menuOption) => {
          const isMasterOption = menuOption.IsMasterOptionSet
          if (isMasterOption) return null
          const menuOptions = menuOption.MenuItemOptionSetItems

          return menuOptions.map((menuOption) => {
            return (
              <MenuItem
                key={menuOption.MenuItemOptionSetItemId}
                id={menuOption.MenuItemOptionSetItemId}
                name={menuOption.Name}
                price={menuOption.Price}
                menuItemType={menuItemType}
              />
            )
          })
        })}
      </div>
    </div>
  )
}
