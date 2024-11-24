import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { MenuContext, MenuContextType } from '../../src/menuContext/MenuContext'

interface RenderWithContextProps {
  children: ReactNode
  contextValues?: Partial<MenuContextType>
}

export const renderWithContext = ({
  children,
  contextValues
}: RenderWithContextProps) => {
  const defaultContextValues: MenuContextType = {
    cartItems: [],
    cartTotalPrice: 0,
    currentMenuItemId: null,
    setCurrentMenuItemId: () => {},
    currentMenuLevel: 'main',
    setCurrentMenuLevel: () => {},
    numberOfOptionsSelected: 0,
    setNumberOfOptionsSelected: () => {},
    optionsCanBeConfirmed: false,
    setOptionsCanBeConfirmed: () => {},
    allowZeroMinSelection: false,
    setAllowZeroMinSelection: () => {},
    tempCartItem: null,
    setTempCartItem: () => {},
    tempCartTotalPrice: 0,
    addToCart: () => {},
    removeFromCart: () => {},
    addOptionToTempCart: () => {},
    removeOptionFromTempCart: () => {},
    resetMenuOptionsState: () => {},
    resetMenuItemsState: () => {}
  }

  const value = { ...defaultContextValues, ...contextValues }

  return render(
    <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
  )
}
