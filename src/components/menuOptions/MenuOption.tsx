import { useMenuContext } from 'menuContext/MenuContext'
import { MenuItemOptionSetItem } from 'menuData/menuData'
import { useState } from 'react'
import { useAllowZeroAsMinSelection } from './hooks/useAllowZeroAsMinSelection'

interface menuOptionType extends MenuItemOptionSetItem {
  minSelectAmount: number
  maxSelectAmount: number
  isMasterOption: boolean
}

interface MenuOptionProps {
  menuOption: menuOptionType
}

export const MenuOption = ({ menuOption }: MenuOptionProps) => {
  const [optionIsSelected, setOptionIsSelected] = useState(false)
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

    setOptionIsSelected(true)
    setNumberOfOptionsSelected((prev) => prev + 1)

    // set state to show the options can be confirmed if the min selection criteria is met
    // add 1 to the number of options selected to include the current selection
    if (numberOfOptionsSelected + 1 >= menuOption.minSelectAmount) {
      setOptionsCanBeConfirmed(true)
    }
  }

  const onDeselectOption = () => {
    removeOptionFromTempCart(id)
    setOptionIsSelected(false)
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
      <div className="mr-4 flex w-[500px] justify-between">
        <p>{name}</p>
        <p>£{price.toFixed(2)}</p>
      </div>

      <div className="w-24">
        {optionCanBeSelected && !optionIsSelected && (
          <button
            className="w-24 rounded bg-[#015BBB] px-2 py-1 text-white"
            onClick={onSelectOption}
          >
            Select
          </button>
        )}

        {optionIsSelected && (
          <button
            className="w-24 rounded bg-red-500 px-2 py-1 text-white"
            onClick={onDeselectOption}
          >
            Remove
          </button>
        )}
      </div>
    </article>
  )
}
