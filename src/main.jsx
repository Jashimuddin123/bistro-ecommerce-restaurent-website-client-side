
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import AuthProvider from './AuthProvider/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
<AuthProvider> {/* Wrap AuthProvider around your app */}
<BrowserRouter>
<App />
</BrowserRouter>
</AuthProvider>

)
