import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemOptionSetItemT } from 'menuData/menuData'
import { Dispatch, SetStateAction } from 'react'

interface menuOptionType extends MenuItemOptionSetItemT {
  minSelectAmount: number
  maxSelectAmount: number
  isMasterOption: boolean
}

interface MenuOptionProps {
  menuOption: menuOptionType
  menuOptionIndex: number
  setMenuOptionIndex: Dispatch<SetStateAction<number>>
  menuOptionsLength: number
}

export const MenuOption = ({
  menuOption,
  menuOptionIndex,
  setMenuOptionIndex,
  menuOptionsLength
}: MenuOptionProps) => {
  const { addTempCartSubOption } = useMenuContext()
  const id = menuOption.MenuItemOptionSetItemId
  const name = menuOption.Name
  const price = menuOption.Price

  const onSelectMenuItem = () => {
    addTempCartSubOption({
      id: Date.now(),
      subOptionId: id,
      name,
      price,
      quantity: 1
    })

    if (menuOptionIndex === menuOptionsLength - 1) {
      return
    }

    setMenuOptionIndex((prev) => prev + 1)
  }

  return (
    <article
      key={id}
      className=" flex w-full  flex-row items-center justify-between rounded bg-neutral-300 p-2 px-10 "
    >
      <p>
        {name} - {price}
      </p>
      <button
        className="w-20 rounded bg-[#015BBB] px-2 py-1 text-white"
        onClick={onSelectMenuItem}
      >
        Select
      </button>
    </article>
  )
}
