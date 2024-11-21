import { test } from '@playwright/test'

test('user can add a menu item with master options to the basket', async ({
  page
}) => {
  // navigate to home page
  await page.goto('/')

  // const selectButton = page.getByRole('button', { name: 'Select' })
  // await selectButton.click()
  // console.log('selectButton', selectButton)

  // Filter the article that contains the text "Select item for price options"
  // This will return all articles that have master options
  const articleWithText = page
    .locator('article')
    .filter({ hasText: 'Select item for price options' })

  // Press the first select button which relates to a menu item with master options
  const selectButton = articleWithText
    .getByRole('button', { name: 'Select' })
    .first()

  await selectButton.click()
  const pageContent = await page.content()

  console.log(pageContent)
})
