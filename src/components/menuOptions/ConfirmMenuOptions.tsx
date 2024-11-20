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
  if (!currentMenuItemId) return <p>Server error</p>
  if (!tempCartItem) return <p>Server error</p>
  if (!tempCartTotalPrice) return <p>Server error</p>

  const menuItem = findMenuItemById(currentMenuItemId)
  if (!menuItem) return <p>Server error</p>

  const itemIsPricedByMasterOption = menuItem.MenuItemOptionSets.some(
    (optionSet) => optionSet.IsMasterOptionSet
  )

  return (
    <div className="m-4 flex w-full max-w-[700px] flex-col items-center rounded-lg bg-neutral-300 p-4">
      <p className="text-lg font-bold">{tempCartItem.name}</p>
      {tempCartItem.menuOptions?.map((menuOption) => {
        return (
          <div
            className="flex w-full items-center justify-between"
            key={menuOption.id}
          >
            <p className="">{menuOption.name}</p>

            {itemIsPricedByMasterOption ? (
              <p className="">£{menuOption.price.toFixed(2)}</p>
            ) : (
              <p className="">£{tempCartTotalPrice.toFixed(2)}</p>
            )}
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
