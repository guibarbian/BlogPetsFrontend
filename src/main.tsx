import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound/index.tsx'
import { Home } from './pages/index.ts'

const router = createBrowserRouter([
  {path:"/", element: <Home />},
  {path:"*", element:<NotFound />}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
