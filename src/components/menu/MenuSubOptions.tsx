import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemT } from 'menuData/menuData'

interface MasterItemProps {
  menuItem: MenuItemT
}

export const MenuSubOptions = ({ menuItem }: MasterItemProps) => {
  const { setCurrentMenuItemId, setCurrentMasterItemId } = useMenuContext()
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

      {menuOptions.map((menuOptions) => {
        const isMasterOption = menuOptions.IsMasterOptionSet
        const menuSubOptions = menuOptions.MenuItemOptionSetItems

        return (
          <div key={menuOptions.MenuItemOptionSetId}>
            {menuSubOptions.map((menuSubOptions) => {
              const subOptionId = menuSubOptions.MenuItemOptionSetItemId
              return (
                <div key={menuSubOptions.MenuItemOptionSetItemId}>
                  <p>
                    isMasterOption = {isMasterOption.toString()} -{' '}
                    {menuSubOptions.Name} - {menuSubOptions.Price}
                  </p>
                  <button
                    onClick={() => setCurrentMasterItemId(subOptionId)}
                    className="bg-blue-500 p-2 text-xl"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setCurrentMasterItemId(null)}
                    className="bg-blue-500 p-2 text-xl"
                  >
                    Remove
                  </button>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
