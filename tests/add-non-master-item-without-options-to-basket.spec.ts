import { expect, test } from '@playwright/test'
test('user can add a menu item with master option and no further options to the basket', async ({
  page
}) => {
  // navigate to home page
  await page.goto('/')

  // Find the articles that do NOT have menu options
  // and filter the articles that do NOT contain the text "Select item for price options"
  // This will return all articles that are NOT master options and do NOT have further options
  const menuItems = page
    .locator('article[data-test-id="menuItemWithoutOptions"]')
    .filter({
      hasNotText: 'Select item for price options'
    })

  // Press the first select button which relates to a menu item with master options
  const selectItemButton = menuItems
    .getByRole('button', { name: 'Select' })
    .first()
  await selectItemButton.click()

  // check the user returns to the menu page
  const noOfCartItems = page.locator('p', { hasText: /^1$/ })
  expect(noOfCartItems).toBeVisible()
})
