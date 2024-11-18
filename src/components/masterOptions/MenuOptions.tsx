import { useMenuContext } from 'cartContext/CartContext'
import { findMenuItemById } from 'utils/findMenuItemById'
import { MenuOption } from './MenuOption'
import backIcon from '../../assets/back.svg'

export const MenuOptions = () => {
  const { currentMenuItemId, resetMenuItemsState } = useMenuContext()
  if (!currentMenuItemId) return <p>Server error</p>
  const menuItem = findMenuItemById(currentMenuItemId)
  if (menuItem === '') return <p>Server error</p>
  const menuOptions = menuItem.MenuItemOptionSets

  //render master options
  return (
    <div className="mt-2 flex w-full max-w-[700px] flex-col items-center">
      {/******* render header ********/}
      <button
        onClick={resetMenuItemsState}
        className=" absolute left-2 top-2 m-2 p-1 text-white"
      >
        <img src={backIcon} alt="back icon" />
      </button>

      <p className="m-2 text-2xl font-bold">{menuItem.Name}</p>

      {/******* render master options ********/}
      <div className="flex w-full flex-col gap-2">
        {menuOptions.map((menuOption) => {
          const isMasterOption = menuOption.IsMasterOptionSet
          const minSelectAmount = menuOption.MinSelectCount || 1
          const maxSelectAmount = menuOption.MaxSelectCount || 1
          const menuOptions = menuOption.MenuItemOptionSetItems.map(
            (menuOption) => {
              return {
                ...menuOption,
                isMasterOption,
                minSelectAmount,
                maxSelectAmount
              }
            }
          )

          return menuOptions.map((menuOption) => {
            return (
              <MenuOption
                key={menuOption.MenuItemOptionSetItemId}
                menuOption={menuOption}
              />
            )
          })
        })}
      </div>
    </div>
  )
}
