import { useMenuContext } from 'cartContext/CartContext'
import { useState } from 'react'

interface SubOptionProps {
  id: number
  name: string
  price: number
}

export const SubOption = ({ id, name, price }: SubOptionProps) => {
  const [itemSelected, setItemSelected] = useState(false)
  const {
    currentMenuItemType,
    setCurrentMenuLevel,
    addTempCartSubOption,
    tempCartItem,
    addToCart,
    resetMenuItemsState
  } = useMenuContext()

  const onSelectMenuItem = () => {
    if (currentMenuItemType === 'master') {
      setItemSelected(true)
      addTempCartSubOption({
        id: Date.now(),
        subOptionId: id,
        name,
        price,
        quantity: 1
      })
    }

    if (currentMenuItemType === 'subOptions') {
      addTempCartSubOption({
        id: Date.now(),
        subOptionId: id,
        name,
        price,
        quantity: 1
      })
      if (tempCartItem !== null) {
        addToCart(tempCartItem)
        resetMenuItemsState()
        setCurrentMenuLevel('main')
      }
    }
  }

  return (
    <article
      key={id}
      className=" flex w-full  flex-row items-center justify-between rounded bg-neutral-300 p-2 px-10 "
    >
      <p>
        {name} - {price}
      </p>

      {itemSelected ? (
        <button
          className="w-20 rounded bg-red-500 px-2 py-1 text-white"
          onClick={onSelectMenuItem}
        >
          Remove
        </button>
      ) : (
        <button
          className="w-20 rounded bg-[#015BBB] px-2 py-1 text-white"
          onClick={onSelectMenuItem}
        >
          Select
        </button>
      )}
    </article>
  )
}
