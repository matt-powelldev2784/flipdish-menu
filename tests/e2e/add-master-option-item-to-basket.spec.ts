import { expect, test } from '@playwright/test'

test('user can add a menu item which has a master option to the basket', async ({
  page
}) => {
  // navigate to home page
  await page.goto('/')

  // Filter the articles that contains the text "Select item for price options"
  // This will return all articles that have master options
  const masterItemsArticles = page
    .locator('article')
    .filter({ hasText: 'Select item for price options' })

  // Press the first select button which relates to a menu item with master options
  const selectItemButton = masterItemsArticles
    .getByRole('button', { name: 'Select' })
    .first()
  await selectItemButton.click()

  // There could be multiple options pages
  // This part of the test allows for upto 8 options pages
  // I have created an array with 8 slots to loop through
  const maxExpectedOptions = [...Array(8).keys()]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const option of maxExpectedOptions) {
    const optionSelectButton = page
      .getByRole('button', { name: 'Select' })
      .first()

    // If the last option page is reached break the loop
    // so the next part of the test can be executed
    const isOptionSelectButtonVisible = await optionSelectButton.isVisible()
    if (!isOptionSelectButtonVisible) {
      break
    }

    await optionSelectButton.click()

    const confirmSelectionButton = page.getByRole('button', {
      name: 'Confirm selection'
    })
    await confirmSelectionButton.click()
  }

  // click add item to cart button
  const addToCartButton = page.getByRole('button', {
    name: /.*Add to cart for.*/i
  })
  await addToCartButton.click()

  // check the user returns to the menu page
  const cartIcon = page.getByRole('img', { name: 'cart' })
  await expect(cartIcon).toBeVisible()
})
