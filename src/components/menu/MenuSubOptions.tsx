import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemT } from 'menuData/menuData'

interface MasterItemProps {
  menuItem: MenuItemT
}

export const MenuSubOptions = ({ menuItem }: MasterItemProps) => {
  const { setCurrentMenuItemId } = useMenuContext()
  console.log('menuItem', menuItem)

  return (
    <div>
      <button
        onClick={() => setCurrentMenuItemId(null)}
        className="bg-slate-400 p-2 text-xl"
      >
        Back to Menu
      </button>
      <p>{menuItem.Name}</p>
    </div>
  )
}
