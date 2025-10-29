import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "@/components/ui/sonner"
import { AuthProvider } from './context/AuthProvider.jsx';
import { ThemeProvider } from "./context/theme-provider"
import { Layout } from './layout/ProtectedLayout';
import NotFound from './pages/not-found.jsx';
import Dashboard from './pages/dashboard'
//console.log('app: src/main.jsx loaded'); 
const baseUrl = import.meta.env.VITE_BASE_URL

createRoot(document.getElementById('root')).render(
  // basename = baseUrl jsut like base value inside vite.config.js
  // Tells BrowserRouter that this is the base URL
  <BrowserRouter basename={baseUrl ? baseUrl : '/'}>
    <AuthProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Toaster richColors />
        <Routes>
          
          <Route path="/">

            <Route element={<Layout allowedRoles={['Fleet Manager']} />}> {/**Specify Allowed Roles */}
              <Route index element={<Dashboard />} />
            </Route>

          </Route>

          {/**NOT FOUND PAGE AS LAST CHILD OF ROUTES */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
)
