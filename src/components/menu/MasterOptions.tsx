import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemT } from 'menuData/menuData'

interface MasterItemProps {
  menuItem: MenuItemT
}

export const MasterOptions = ({ menuItem }: MasterItemProps) => {
  const { setCurrentMenuItemId, setCurrentMasterItemId } = useMenuContext()
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

      {/******* render master options ********/}
      <div className="flex w-full flex-col items-center gap-2">
        {menuOptions.map((menuOption) => {
          const isMasterOption = menuOption.IsMasterOptionSet
          if (!isMasterOption) return null
          const menuOptions = menuOption.MenuItemOptionSetItems

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
                    setCurrentMasterItemId(menuOption.MenuItemOptionSetItemId)
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
