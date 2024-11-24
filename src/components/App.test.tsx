import { screen } from '@testing-library/react'
import { renderWithContext } from '../../tests/utils/renderWithContext'
import { App } from './App'

test('should render the App', () => {
  renderWithContext({ children: <App /> })

  expect(screen.getByText('Menu')).toBeInTheDocument()
})
