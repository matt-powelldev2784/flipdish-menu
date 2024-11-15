import { menuData } from 'menuData/menuData'
import { useMenuContext } from 'cartContext/CartContext'
import flipDishLogo from 'assets/flipdish-logo.svg'
import { MenuItems } from './menuItems/MenuItems'
import { MasterOptions } from './masterOptions/MasterOptions'
import { SubOptions } from './subOptions/SubOptions'

function App() {
  const { currentMenuLevel } = useMenuContext()
  const menuSections = menuData.MenuSections

  return (
    <main className="relative flex flex-col items-center overflow-hidden bg-white pb-24">
      <div className="mt-2 flex flex-col items-center">
        <img
          src={flipDishLogo}
          alt="Flip Dish Logo"
          className="h-[57px] w-[190px] "
        />
        <h1 className="text-bold text-3xl text-[#015BBB]">Menu</h1>
      </div>

      {currentMenuLevel === 'main' &&
        menuSections.map((menuSection) => {
          return (
            <MenuItems
              key={menuSection.MenuSectionId}
              MenuSection={menuSection}
            />
          )
        })}

      {currentMenuLevel === 'master' && <MasterOptions />}

      {currentMenuLevel === 'subOptions' && <SubOptions />}
    </main>
  )
}

export default App
