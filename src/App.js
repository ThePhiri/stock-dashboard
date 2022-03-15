import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import StockContext from './context/stockContext';
import ThemeContext from './context/ThemeContext';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [stockSymbol, setStockSymbol] = useState("FB");

  return (<ThemeContext.Provider value={{ darkMode, setDarkMode }}>
    <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
    <Dashboard />
    </StockContext.Provider>
   
  </ThemeContext.Provider>)

}

export default App;
