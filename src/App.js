import React, { useEffect } from 'react';
import { useSettingsStore } from './store';
import People from './components/People';
import Input from './components/Input';

function App() {
  const { dark, toggleDarkMode } = useSettingsStore();

  useEffect(() => {
    if (dark) {
      document.querySelector('body').classList.add('dark');
    } else {
      document.querySelector('body').classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <p>People</p>
      <Input />
      <People />
    </div>
  );
}

export default App;
