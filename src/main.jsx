import './index.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import routes from './router.jsx';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
  
)
