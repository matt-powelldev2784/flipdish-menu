import { menuData } from 'menuData/menuData'
import { MenuSection } from './menu/01_MenuSection'
import { CartContextProvider } from 'cartContext/CartContext'

function App() {
  const menuSections = menuData.MenuSections

  return (
    <CartContextProvider>
      <div className="relative overflow-hidden bg-white">
        <p className="text-red-500">Menu Sections</p>
        {menuSections.map((menuSection) => {
          return (
            <MenuSection
              key={menuSection.MenuSectionId}
              MenuSection={menuSection}
            />
          )
        })}
      </div>
    </CartContextProvider>
  )
}

export default App
