import { menuData } from 'menuData/menuData'

function App() {
  console.log(menuData.MenuSections[0].MenuItems)

  return (
    <div className="relative overflow-hidden bg-white">
      <p>Menu Sections</p>
      {menuData.MenuSections.map((menuSection) => {
        return (
          <div key={menuSection.MenuSectionId}>
            <p>{menuSection.Name}</p>
          </div>
        )
      })}
      <p>Menu Sections</p>
    </div>
  )
}

export default App
