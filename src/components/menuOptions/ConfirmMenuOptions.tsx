import { useMenuContext } from 'menuContext/MenuContext'
import { findMenuItemById } from 'utils/findMenuItemById'

export const ConfirmMenuOptions = () => {
  const {
    tempCartItem,
    addToCart,
    setCurrentMenuLevel,
    resetMenuItemsState,
    tempCartTotalPrice,
    currentMenuItemId
  } = useMenuContext()
  console.log('currentMenuItemId', currentMenuItemId)
  console.log('tempCartItem', tempCartItem)
  console.log('tempCartTotalPrice', tempCartTotalPrice)
  if (!currentMenuItemId) return <p>Server error</p>
  if (!tempCartItem) return <p>Server error</p>
  if (!tempCartTotalPrice) return <p>Server error</p>

  const menuItem = findMenuItemById(currentMenuItemId)
  if (!menuItem) return <p>Server error</p>

  return (
    <div className="m-4 flex w-full max-w-[700px] flex-col items-center rounded-lg bg-neutral-300 p-4">
      <div className="flex w-full items-center justify-between">
        <p className="text-lg font-bold">{tempCartItem.name}</p>
        <p className="text-lg font-bold">£{tempCartItem.price.toFixed(2)}</p>
      </div>

      {tempCartItem.menuOptions?.map((menuOption) => {
        console.log('menuOption', menuOption)

        return (
          <div
            className="flex w-full items-center justify-between"
            key={menuOption.id}
          >
            <p className="">{menuOption.name}</p>

            <p className="">£{menuOption.price.toFixed(2)}</p>
          </div>
        )
      })}

      <button
        className="m-2 h-10 w-64 rounded bg-[#015BBB] px-2 py-1 text-lg text-white"
        onClick={() => {
          addToCart(tempCartItem)
          setCurrentMenuLevel('main')
          resetMenuItemsState()
        }}
      >
        Add Item To Cart
      </button>
    </div>
  )
}
