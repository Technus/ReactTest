import React from 'react';
import logo from './logo.svg';
import './App.css';
import Yeet from './yeet/Yeet';
import AddRemoveButton from './controls/AddRemoveButton';
import { DarkStyle } from './GlobalStyles';

export default function App() {
  return (
      <>
      <DarkStyle/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Yeet YeetName="COK" />
        <AddRemoveButton/>
      </div>
      </>
  );
}