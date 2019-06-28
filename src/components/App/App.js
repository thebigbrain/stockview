import React from 'react';
import './App.css';
import ViewLayout from 'components/ViewLayout/ViewLayout';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';


function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <CssBaseline/>
        <ViewLayout/>
      </div>
    </React.Fragment>
  );
}

export default App;
