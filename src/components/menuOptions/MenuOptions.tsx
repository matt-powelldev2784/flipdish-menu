import { useMenuContext } from 'menuContext/MenuContext'
import { findMenuItemById } from 'utils/findMenuItemById'
import { MenuOption } from './MenuOption'
import { useState } from 'react'

export const MenuOptions = () => {
  const [menuOptionIndex, setMenuOptionIndex] = useState(0)
  const {
    currentMenuItemId,
    resetMenuOptionsState,
    setCurrentMenuLevel,
    optionsCanBeConfirmed,
    allowZeroMinSelection,
    numberOfOptionsSelected
  } = useMenuContext()
  if (!currentMenuItemId) return <p>Server error</p>

  const menuItem = findMenuItemById(currentMenuItemId)
  if (menuItem === undefined) return <p>Server error</p>

  const menuOptions = menuItem.MenuItemOptionSets
  const menuOptionsLength = menuOptions.length

  const onConfirmOptions = () => {
    // don't allow option selection if the menu options are not validated
    if (!optionsCanBeConfirmed) return
    // if the last option set being viewed, move to the confirm options screen
    if (menuOptionIndex === menuOptionsLength - 1) {
      setCurrentMenuLevel('confirmOptions')
    }
    //update relevant states on successful confirmation
    resetMenuOptionsState()
    setMenuOptionIndex((prev) => prev + 1)
  }

  return (
    <div className="mt-2 flex w-full max-w-[700px] flex-col items-center">
      {/************** Menu Item Name ***************/}
      <p className="m-2 text-2xl font-bold">{menuItem.Name}</p>

      {/************** menu options ***************/}
      <div className="flex w-full flex-col items-center gap-2">
        {menuOptions.map((menuOption, index) => {
          if (index !== menuOptionIndex) return null
          const isMasterOption = menuOption.IsMasterOptionSet
          const minSelectAmount = menuOption.MinSelectCount || 0
          const maxSelectAmount = menuOption.MaxSelectCount || 1
          const menuOptions = menuOption.MenuItemOptionSetItems.map(
            (menuOption) => {
              return {
                ...menuOption,
                isMasterOption,
                minSelectAmount,
                maxSelectAmount
              }
            }
          )

          return menuOptions.map((menuOption) => {
            return (
              <MenuOption
                key={menuOption.MenuItemOptionSetItemId}
                menuOption={menuOption}
              />
            )
          })
        })}

        {/************** confirm selection button ***************/}
        {/* Sometimes the user is not required to select any options.
            The button text is conditionally rendered to allow for:
            'No Selection Required' if the min required options are zero
            or 'Confirm Selection' if min required options is more than zero */}
        <button
          onClick={onConfirmOptions}
          className={`m-2 h-10 w-64 rounded bg-[#015BBB] px-2 py-1 text-lg text-white ${
            optionsCanBeConfirmed ? 'opacity-100' : 'opacity-30'
          }`}
        >
          {allowZeroMinSelection && numberOfOptionsSelected === 0
            ? 'No Selection Required'
            : 'Confirm Selection'}
        </button>
      </div>
    </div>
  )
}
