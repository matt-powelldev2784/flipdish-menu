import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import { MenuContextProvider } from 'menuContext/MenuContext'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <MenuContextProvider>
    <App />
  </MenuContextProvider>
)
