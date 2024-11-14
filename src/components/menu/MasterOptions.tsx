import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemT } from 'menuData/menuData'
import { MenuItem } from './MenuItem'

interface MasterItemProps {
  menuItem: MenuItemT
}

export const MasterOptions = ({ menuItem }: MasterItemProps) => {
  const { setCurrentMenuItemId, setCurrentMasterItemId } = useMenuContext()
  const menuOptions = menuItem.MenuItemOptionSets

  //render master options
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
                contextUpdateFunction={setCurrentMasterItemId}
                menuItemType={menuItemType}
              />
            )
          })
        })}
      </div>
    </div>
  )
}
