import { useMenuContext } from 'cartContext/MenuContext'
import { MenuItemOptionSetItemT } from 'menuData/menuData'
import { useState } from 'react'

interface menuOptionType extends MenuItemOptionSetItemT {
  minSelectAmount: number
  maxSelectAmount: number
  isMasterOption: boolean
}

interface MenuOptionProps {
  menuOption: menuOptionType
}

export const MenuOption = ({ menuOption }: MenuOptionProps) => {
  const [optionSelected, setOptionSelected] = useState(false)
  const {
    addTempCartSubOption,
    removeTempCartSubOption,
    numberOfOptionsSelected,
    setNumberOfOptionsSelected
  } = useMenuContext()
  const id = menuOption.MenuItemOptionSetItemId
  const name = menuOption.Name
  const price = menuOption.Price
  const optionCanBeSelected =
    numberOfOptionsSelected < menuOption.maxSelectAmount

  console.log('***************')
  console.log('numberOfOptionsSelected', numberOfOptionsSelected)
  console.log('optionCanBeSelected', optionCanBeSelected)
  console.log('menuOption.maxSelectAmount', menuOption.maxSelectAmount)

  const onSelectOption = () => {
    addTempCartSubOption({
      id: Date.now(),
      subOptionId: id,
      name,
      price,
      quantity: 1
    })

    setOptionSelected(true)
    setNumberOfOptionsSelected((prev) => prev + 1)
  }

  const onDeselectOption = () => {
    removeTempCartSubOption(id)
    setOptionSelected(false)
    setNumberOfOptionsSelected((prev) => prev - 1)
  }

  return (
    <article
      key={id}
      className=" flex w-full  flex-row items-center justify-between rounded bg-neutral-300 p-2 px-10 "
    >
      <p>
        {name} - {price}
      </p>
      {optionCanBeSelected && !optionSelected && (
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
