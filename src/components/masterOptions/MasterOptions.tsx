import { useMenuContext } from 'cartContext/CartContext'
import { findMenuItemById } from 'utils/findMenuItemById'
import { MasterOption } from './MasterOption'
import backIcon from '../../assets/back.svg'

export const MasterOptions = () => {
  const { currentMenuItemId, resetMenuItemsState } = useMenuContext()
  if (!currentMenuItemId) return <p>master options error</p>
  const menuItem = findMenuItemById(currentMenuItemId)
  if (menuItem === '') return <p>master options error</p>
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
          if (!isMasterOption) return null
          const menuOptions = menuOption.MenuItemOptionSetItems

          return menuOptions.map((menuOption) => {
            return (
              <MasterOption
                key={menuOption.MenuItemOptionSetItemId}
                id={menuOption.MenuItemOptionSetItemId}
                name={menuOption.Name}
                price={menuOption.Price}
              />
            )
          })
        })}
      </div>
    </div>
  )
}
