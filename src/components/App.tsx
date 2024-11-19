import { menuData } from 'menuData/menuData'
import { useMenuContext } from 'menuContext/MenuContext'
import flipDishLogo from 'assets/flipdish-logo.svg'
import { MenuItems } from './menuItems/MenuItems'
import { MenuOptions } from './menuOptions/MenuOptions'
import { ConfirmMenuOptions } from './menuOptions/ConfirmMenuOptions'
import cartIcon from 'assets/cart.svg'
import backIcon from 'assets/back.svg'

function App() {
  const { currentMenuLevel, cartItems, resetMenuItemsState } = useMenuContext()
  const numOfCartItems = cartItems.length
  const menuSections = menuData.MenuSections

  return (
    <main className="relative flex flex-col items-center overflow-hidden bg-white pb-24">
      {/*********************************** header ***********************************/}
      <div className="mt-2 flex flex-col items-center">
        <img
          src={flipDishLogo}
          alt="Flip Dish Logo"
          className="h-[57px] w-[190px] "
        />
        <h1 className="text-3xl font-bold text-[#015BBB]">Menu</h1>
      </div>

      {/*********************************** menu items ***********************************/}
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

      {/*********************************** Cart Icon ***********************************/}
      <div className="absolute right-10 top-4 flex size-16 w-20 items-center justify-center">
        <p className="w-20 text-2xl font-bold text-[#015BBB]">
          {numOfCartItems}
        </p>
        <img src={cartIcon} alt="cart icon" className="size-12" />
      </div>

      {/************* Only display back button on menu options screens *************/}
      {currentMenuLevel !== 'main' && (
        <button
          onClick={resetMenuItemsState}
          className=" absolute left-2 top-2 m-2 p-1 text-white"
        >
          <img src={backIcon} alt="back icon" />
        </button>
      )}
    </main>
  )
}

export default App
