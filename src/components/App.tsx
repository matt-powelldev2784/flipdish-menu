import { menuData } from 'menuData/menuData'
import { MenuSectionT } from 'types/MenuDataTypes'
import { MenuSection } from './menu/MenuSection'

function App() {
  const menuSections = menuData.MenuSections

  return (
    <div className="relative overflow-hidden bg-white">
      <p className="text-red-500">Menu Sections</p>
      {menuSections.map((menuSection: MenuSectionT) => {
        return (
          <MenuSection
            key={menuSection.MenuSectionId}
            MenuSection={menuSection}
          />
        )
      })}
    </div>
  )
}

export default App
