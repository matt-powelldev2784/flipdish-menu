import { useMenuContext } from 'cartContext/CartContext'
import { findMenuItemById } from 'utils/findMenuItemById'
import { SubOption } from './SubOption'

export const SubOptions = () => {
  const {
    currentMenuItemId,
    setCurrentMenuLevel,
    currentMenuItemType,
    tempCartItem,
    addToCart,
    resetMenuItemsState
  } = useMenuContext()
  if (!currentMenuItemId) return <p>options error</p>
  const menuItem = findMenuItemById(currentMenuItemId)
  if (menuItem === '') return <p>options error</p>
  const menuOptions = menuItem.MenuItemOptionSets

  //render  options
  return (
    <div className="mt-2 flex w-full max-w-[700px] flex-col items-center">
      {/******* render header ********/}
      <button
        className="w-[300px] bg-slate-400 p-2 text-xl "
        onClick={() => {
          setCurrentMenuLevel('main')
        }}
      >
        Back to Menu
      </button>
      <p className="font-bold">{menuItem.Name}</p>

      {/******* render options ********/}
      <div className="flex w-full flex-col items-center gap-2">
        {menuOptions.map((menuOption) => {
          const isMasterOption = menuOption.IsMasterOptionSet
          if (isMasterOption) return null
          const menuOptions = menuOption.MenuItemOptionSetItems

          return menuOptions.map((menuOption) => {
            return (
              <SubOption
                key={menuOption.MenuItemOptionSetItemId}
                id={menuOption.MenuItemOptionSetItemId}
                name={menuOption.Name}
                price={menuOption.Price}
              />
            )
          })
        })}

        {currentMenuItemType === 'master' && (
          <button
            className="m-4 w-[300px] rounded bg-[#015BBB] p-2 text-xl text-white"
            onClick={() => {
              if (!tempCartItem) return
              addToCart(tempCartItem)
              resetMenuItemsState()
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}
