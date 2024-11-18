import { useMenuContext } from 'menuContext/MenuContext'
import { findMenuItemById } from 'utils/findMenuItemById'
import { MenuOption } from './MenuOption'
import backIcon from '../../assets/back.svg'
import { useState } from 'react'

export const MenuOptions = () => {
  const [menuOptionIndex, setMenuOptionIndex] = useState(0)
  const {
    currentMenuItemId,
    resetMenuItemsState,
    resetMenuOptionsState,
    setCurrentMenuLevel,
    optionsCanBeSelected
  } = useMenuContext()
  if (!currentMenuItemId) return <p>Server error</p>
  const menuItem = findMenuItemById(currentMenuItemId)
  if (menuItem === '') return <p>Server error</p>
  const menuOptions = menuItem.MenuItemOptionSets
  const menuOptionsLength = menuOptions.length

  return (
    <div className="mt-2 flex w-full max-w-[700px] flex-col items-center">
      {/************** header ***************/}
      <button
        onClick={resetMenuItemsState}
        className=" absolute left-2 top-2 m-2 p-1 text-white"
      >
        <img src={backIcon} alt="back icon" />
      </button>

      <p className="m-2 text-2xl font-bold">{menuItem.Name}</p>

      {/************** menu options ***************/}
      <div className="flex w-full flex-col items-center gap-2">
        {menuOptions.map((menuOption, index) => {
          if (index !== menuOptionIndex) return null
          const isMasterOption = menuOption.IsMasterOptionSet
          const minSelectAmount = menuOption.MinSelectCount || 1
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
        <button
          className={`m-2 h-10 w-64 rounded bg-[#015BBB] px-2 py-1 text-lg text-white ${
            optionsCanBeSelected ? 'opacity-100' : 'opacity-30'
          }`}
          onClick={() => {
            console.log('optionsCanBeSelected---', optionsCanBeSelected)
            if (!optionsCanBeSelected) return
            if (menuOptionIndex === menuOptionsLength - 1) {
              setCurrentMenuLevel('confirmOptions')
            }
            resetMenuOptionsState()
            setMenuOptionIndex((prev) => prev + 1)
          }}
        >
          Confirm Selection
        </button>
      </div>
    </div>
  )
}