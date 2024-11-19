import { useMenuContext } from 'menuContext/MenuContext'
import { MenuItemOptionSetItemT } from 'menuData/menuData'
import { useState } from 'react'
import { useAllowZeroAsMinSelection } from './hooks/useAllowZeroAsMinSelection'

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
    addOptionToTempCart,
    removeOptionFromTempCart,
    numberOfOptionsSelected,
    setNumberOfOptionsSelected,
    setOptionsCanBeConfirmed
  } = useMenuContext()
  const id = menuOption.MenuItemOptionSetItemId
  const name = menuOption.Name
  const price = menuOption.Price
  const optionCanBeSelected =
    numberOfOptionsSelected < menuOption.maxSelectAmount
  useAllowZeroAsMinSelection(menuOption.minSelectAmount)

  const onSelectOption = () => {
    addOptionToTempCart({
      id: Date.now(),
      menuOptionId: id,
      name,
      price,
      quantity: 1
    })

    setOptionSelected(true)
    setNumberOfOptionsSelected((prev) => prev + 1)

    // set state to show the options can be confirmed if the min selection criteria is met
    // add 1 to the number of options selected to include the current selection
    if (numberOfOptionsSelected + 1 >= menuOption.minSelectAmount) {
      setOptionsCanBeConfirmed(true)
    }
  }

  const onDeselectOption = () => {
    removeOptionFromTempCart(id)
    setOptionSelected(false)
    setNumberOfOptionsSelected((prev) => prev - 1)

    // set state to show the options cannot be confirmed if the min selection criteria is not met
    // subtract 1 from the number of options selected to include the current deselection
    if (numberOfOptionsSelected - 1 < menuOption.minSelectAmount) {
      setOptionsCanBeConfirmed(false)
    }
  }

  return (
    <article
      key={id}
      className=" flex h-12 w-full flex-row items-center justify-between rounded bg-neutral-300 p-2 px-10"
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
