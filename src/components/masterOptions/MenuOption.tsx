import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemOptionSetItemT } from 'menuData/menuData'
import { Dispatch, SetStateAction, useState } from 'react'

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
  const [optionSelected, setOptionSelected] = useState(false)
  const [optionSelectCount, setOptionSelectCount] = useState(0)
  const { addTempCartSubOption, removeTempCartSubOption } = useMenuContext()
  const id = menuOption.MenuItemOptionSetItemId
  const name = menuOption.Name
  const price = menuOption.Price
  const optionCanBeSelected = optionSelectCount < menuOption.maxSelectAmount

  const onSelectOption = () => {
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

    setOptionSelected(true)
    setOptionSelectCount((prev) => prev + 1)
  }

  const onDeselectOption = () => {
    removeTempCartSubOption(id)
    setOptionSelected(false)
    setOptionSelectCount((prev) => prev - 1)
  }

  return (
    <article
      key={id}
      className=" flex w-full  flex-row items-center justify-between rounded bg-neutral-300 p-2 px-10 "
    >
      <p>
        {name} - {price}
      </p>
      {optionCanBeSelected && (
        <button
          className="w-20 rounded bg-[#015BBB] px-2 py-1 text-white"
          onClick={onSelectOption}
        >
          Select
        </button>
      )}

      {optionSelected && (
        <button
          className="w-20 rounded bg-red-500 px-2 py-1 text-white"
          onClick={onDeselectOption}
        >
          Remove
        </button>
      )}
    </article>
  )
}
