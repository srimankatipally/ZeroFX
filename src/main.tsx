import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DataProvider } from './context/USDdata.tsx';

createRoot(document.getElementById("root")!).render(
    <DataProvider>
    <App />
  </DataProvider>

);
