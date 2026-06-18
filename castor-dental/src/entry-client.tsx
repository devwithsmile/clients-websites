import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './App'
import './styles/globals.css'

const root = document.getElementById('root')
if (!root) throw new Error('Missing #root element')

const tree = (
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)

// Prerendered HTML present → hydrate. Fallback (dev) → render.
if (root.innerHTML.trim().length > 0) {
  hydrateRoot(root, tree)
} else {
  createRoot(root).render(tree)
}
