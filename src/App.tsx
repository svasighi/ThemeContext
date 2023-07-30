import { useContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ThemeContext } from './context/ThemeContext';

const ModeBtn = () => {
  const { themeMode, onToggleMode } = useContext(ThemeContext);

  console.log('rendered Mode Button');
  return <button onClick={onToggleMode}> theme mode is: {themeMode}</button>;
};

const RtlButton = () => {
  const { themeDirection, onToggleDirection } = useContext(ThemeContext);

  console.log('rendered Rtl Button');
  return (
    <button onClick={onToggleDirection}>
      theme direction is: {themeDirection}
    </button>
  );
};

function App() {
  console.log('rendered Main');

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <RtlButton />
        <ModeBtn />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
