import { useMenuContext } from 'cartContext/CartContext'
import { findMenuItemById } from 'utils/findMenuItemById'
import { SubOption } from './SubOption'
import backIcon from '../../assets/back.svg'

export const SubOptions = () => {
  const {
    currentMenuItemId,
    currentMenuItemType,
    tempCartItem,
    addToCart,
    resetMenuItemsState
  } = useMenuContext()
  if (!currentMenuItemId) return <p>Server error</p>
  const menuItem = findMenuItemById(currentMenuItemId)
  if (menuItem === '') return <p>Server error</p>
  const menuOptions = menuItem.MenuItemOptionSets

  //render  options
  return (
    <div className="mt-2 flex w-full max-w-[700px] flex-col items-center">
      {/******* render header ********/}
      <button
        onClick={resetMenuItemsState}
        className=" absolute left-2 top-2 m-2 p-1 text-white"
      >
        <img src={backIcon} alt="back icon" />
      </button>
      <p className="m-2 text-2xl font-bold">{menuItem.Name}</p>

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

        {/******* conditionally render add to cart button ********/}
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
