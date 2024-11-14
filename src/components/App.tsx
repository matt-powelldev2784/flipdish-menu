import { menuData } from 'menuData/menuData'
import { MenuItems } from './menu/MenuItems'
import { MasterOptions } from './menu/MasterOptions'
import { useMenuContext } from 'cartContext/CartContext'
import { findMenuItemById } from 'utils/findMenuItemById'
import flipDishLogo from 'assets/flipdish-logo.svg'

function App() {
  const { menuItemId } = useMenuContext()
  const currentMenuItem = findMenuItemById(menuItemId)
  const menuSections = menuData.MenuSections

  return (
    <main className="relative flex flex-col items-center overflow-hidden bg-white">
      <div className="mt-2 flex flex-col items-center">
        <img
          src={flipDishLogo}
          alt="Flip Dish Logo"
          className="h-[57px] w-[190px] "
        />
        <h1 className="text-xl text-[#015BBB] ">Flip Dish Menu</h1>
      </div>

      {!currentMenuItem &&
        // render all menu items if no menu item is selected
        menuSections.map((menuSection) => {
          return (
            <MenuItems
              key={menuSection.MenuSectionId}
              MenuSection={menuSection}
            />
          )
        })}

      {
        // render menu item sub options if a menu item is selected
        currentMenuItem && <MasterOptions menuItem={currentMenuItem} />
      }
    </main>
  )
}

export default App
