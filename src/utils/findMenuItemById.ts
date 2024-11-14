import { menuData, MenuItemT } from 'menuData/menuData'

type FindMenuItemById = (menuItemId: number) => MenuItemT | ''

export const findMenuItemById: FindMenuItemById = (menuItemId) => {
  for (const section of menuData.MenuSections) {
    const menuItem = section.MenuItems.find(
      (item) => item.MenuItemId === menuItemId
    )

    if (menuItem) {
      return menuItem
    }
  }
  return ''
}
