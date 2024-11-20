import { menuData, MenuItem } from 'menuData/menuData'

type FindMenuItemById = (menuItemId: number) => MenuItem | undefined

export const findMenuItemById: FindMenuItemById = (menuItemId) => {
  for (const section of menuData.MenuSections) {
    const menuItem = section.MenuItems.find(
      (item) => item.MenuItemId === menuItemId
    )

    if (menuItem) {
      return menuItem
    }
  }
}
