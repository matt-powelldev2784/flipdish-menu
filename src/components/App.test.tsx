import { screen } from '@testing-library/react'
import { renderWithContext } from '../../tests/utils/renderWithContext'
import { App } from './App'

describe('<App />', () => {
  it('should render the App', () => {
    renderWithContext({ children: <App /> })

    expect(screen.getByText('Menu')).toBeInTheDocument()
  })
})
