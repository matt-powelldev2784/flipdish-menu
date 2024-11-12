import { menuData, MenuItemT } from 'menuData/menuData'

interface FindMenuItemById {
  (menuItemId: number | null): MenuItemT | undefined
}

export const findMenuItemById: FindMenuItemById = (menuItemId) => {
  if (!menuItemId) {
    return undefined
  }

  for (const section of menuData.MenuSections) {
    const menuItem = section.MenuItems.find(
      (item) => item.MenuItemId === menuItemId
    )

    if (menuItem) {
      return menuItem
    }
  }
}
