import { menuData } from 'menuData/menuData'
import { useMenuContext } from 'cartContext/CartContext'
import flipDishLogo from 'assets/flipdish-logo.svg'
import { MenuItems } from './menu/menuItems/MenuItems'
import { MasterOptions } from './menu/masterOptions/MasterOptions'
import { Options } from './menu/options/Options'

function App() {
  const { menuItemType } = useMenuContext()
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

      {!menuItemType &&
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
        menuItemType === 'master' && <MasterOptions />
      }

      {menuItemType === 'options' && <Options />}
    </main>
  )
}

export default App
