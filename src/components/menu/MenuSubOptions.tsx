import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemT } from 'menuData/menuData'

interface MasterItemProps {
  menuItem: MenuItemT
}

export const MenuSubOptions = ({ menuItem }: MasterItemProps) => {
  const { setCurrentMenuItemId } = useMenuContext()
  const menuOptions = menuItem.MenuItemOptionSets
  console.log('menuOptions', menuOptions)

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
        console.log('menuSubOptions', menuSubOptions)

        return (
          <div key={menuOptions.MenuItemOptionSetId}>
            {menuSubOptions.map((menuSubOptions) => {
              console.log('menuSubOptions', menuSubOptions)

              return (
                <div key={menuSubOptions.MenuItemOptionSetItemId}>
                  <p>
                    isMasterOption = {isMasterOption.toString()} -{' '}
                    {menuSubOptions.Name} - {menuSubOptions.Price}
                  </p>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
