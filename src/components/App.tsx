import { menuData } from 'menuData/menuData'
import { MenuSection } from './menu/MenuSection'
import { MenuSubOptions } from './menu/MenuSubOptions'
import { useMenuContext } from 'cartContext/CartContext'
import { findMenuItemById } from 'utils/findMenuItemById'

function App() {
  const { currentMenuItemId } = useMenuContext()
  const currentMenuItem = findMenuItemById(currentMenuItemId)
  const menuSections = menuData.MenuSections

  return (
    <div className="relative overflow-hidden bg-white">
      <p className="text-red-500">Menu</p>

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
        currentMenuItem && <MenuSubOptions menuItem={currentMenuItem} />
      }
    </div>
  )
}

export default App
