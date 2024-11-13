import { menuData } from 'menuData/menuData'
import { MenuSection } from './menu/MenuSection'
import { MasterOptions } from './menu/MasterOptions'
import { useMenuContext } from 'cartContext/CartContext'
import { findMenuItemById } from 'utils/findMenuItemById'
import flipDishLogo from 'assets/flipdish-logo.svg'

function App() {
  const { currentMenuItemId } = useMenuContext()
  const currentMenuItem = findMenuItemById(currentMenuItemId)
  const menuSections = menuData.MenuSections

  return (
    <main className="relative overflow-hidden bg-white">
      <div className="mt-2 flex flex-col items-center">
        <img
          src={flipDishLogo}
          alt="Flip Dish Logo"
          className="h-[57px] w-[190px] "
        />
        <h1 className="text-xl text-[#015BBB] ">Flip Dish Menu</h1>
      </div>

      {!currentMenuItem &&
        // render all menu sections if no menu item is selected
        menuSections.map((menuSection) => {
          return (
            <MenuSection
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
