import { useMenuContext } from 'cartContext/CartContext'
import { MenuItemOptionSetItemT, MenuItemT } from 'menuData/menuData'
import { useState } from 'react'

interface MasterItemProps {
  menuItem: MenuItemT
}

interface SelectedOptions {
  id: number
  name: string
  price: number
}

interface onSelectOptionProps {
  isMasterOption: boolean
  menuOption: MenuItemOptionSetItemT
}

export const MenuSubOptions = ({ menuItem }: MasterItemProps) => {
  const [masterItemSelected, setMasterItemSelected] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions[]>([])
  const { setCurrentMenuItemId, currentMasterItemId, setCurrentMasterItemId } =
    useMenuContext()
  const menuOptions = menuItem.MenuItemOptionSets

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

  return (
    <div>
      <button
        onClick={() => setCurrentMenuItemId(null)}
        className="bg-slate-400 p-2 text-xl"
      >
        Back to Menu
      </button>
      <p>{menuItem.Name}</p>

      {selectedOptions.map((option) => {
        return (
          <p key={option.id}>
            {option.id} - {option.name} - {option.price}
          </p>
        )
      })}

      {menuOptions.map((menuOption) => {
        const isMasterOption = menuOption.IsMasterOptionSet

        // when one master item is selected filter out all other master items
        // this is so two master items are not selected at the same time
        // for instance you cannot select a small and large chips and the same time
        const menuOptions = menuOption.MenuItemOptionSetItems.filter(
          (option) => {
            if (!masterItemSelected) return true
            if (!isMasterOption) return true
            return option.MenuItemOptionSetItemId === currentMasterItemId
          }
        )

        return menuOptions.map((menuOption) => {
          return (
            <div
              key={menuOption.MenuItemOptionSetItemId}
              className="m-4 flex flex-row justify-between"
            >
              <p>
                {menuOption.Name}- {menuOption.Price}
              </p>
              <button
                className="bg-slate-500 p-2"
                onClick={() => {
                  onSelectOption({ isMasterOption, menuOption })
                }}
              >
                Add Item
              </button>
            </div>
          )
        })
      })}
    </div>
  )
}
