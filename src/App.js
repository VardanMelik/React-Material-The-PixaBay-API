import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';


import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import ImageResults from './components/image-results/ImageResults';

import './App.css';

function App() {
  return (
   
      <div>
        <NavBar />
        <Search />
      </div>
   
  );
}

export default App;
