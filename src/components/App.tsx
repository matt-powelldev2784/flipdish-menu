import { menuData } from 'menuData/menuData'
import { useMenuContext } from 'menuContext/MenuContext'
import flipDishLogo from 'assets/flipdish-logo.svg'
import { MenuItems } from './menuItems/MenuItems'
import { MenuOptions } from './menuOptions/MenuOptions'
import { ConfirmMenuOptions } from './menuOptions/ConfirmMenuOptions'
import cartIcon from 'assets/cart.svg'

function App() {
  const { currentMenuLevel, cartItems } = useMenuContext()
  const numOfCartItems = cartItems.length
  const menuSections = menuData.MenuSections

  return (
    <main className="relative flex flex-col items-center overflow-hidden bg-white pb-24">
      <div className="mt-2 flex flex-col items-center">
        <img
          src={flipDishLogo}
          alt="Flip Dish Logo"
          className="h-[57px] w-[190px] "
        />
        <h1 className="text-3xl font-bold text-[#015BBB]">Menu</h1>
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

      {currentMenuLevel === 'options' && <MenuOptions />}

      {currentMenuLevel === 'confirmOptions' && <ConfirmMenuOptions />}

      <div className="absolute right-10 top-4 flex size-16 w-20 items-center justify-center">
        <p className="w-20 text-xl font-bold text-[#015BBB]">
          {numOfCartItems}
        </p>
        <img src={cartIcon} alt="cart icon" className="size-12" />
      </div>
    </main>
  )
}

export default App
