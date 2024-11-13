import { useState } from 'react'
import { MenuItemOptionSetItemT } from 'menuData/menuData'
import { useMenuContext } from 'cartContext/CartContext'

interface SelectedOption {
  id: number
  name: string
  price: number
}

interface onSelectOptionProps {
  isMasterOption: boolean
  menuOption: MenuItemOptionSetItemT
}

export const useSelectedOption = () => {
  const [masterItemSelected, setMasterItemSelected] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([])
  const { setCurrentMasterItemId } = useMenuContext()

  const onSelectOption = ({
    isMasterOption,
    menuOption
  }: onSelectOptionProps) => {
    if (isMasterOption) {
      setCurrentMasterItemId(menuOption.MenuItemOptionSetItemId)
    }

    setMasterItemSelected(true)

    setSelectedOptions((prevOptions) => {
      const optionAlreadySelected = prevOptions.some(
        (option) => option.id === menuOption.MenuItemOptionSetItemId
      )

      // don't allow the same option to be selected twice
      if (optionAlreadySelected) {
        return [...prevOptions]
      }

      return [
        ...prevOptions,
        {
          id: menuOption.MenuItemOptionSetItemId,
          name: menuOption.Name,
          price: menuOption.Price
        }
      ]
    })
  }

  return {
    masterItemSelected,
    selectedOptions,
    onSelectOption
  }
}
