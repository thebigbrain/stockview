import React from 'react';
import './App.css';
import ViewLayout from 'components/ViewLayout/ViewLayout';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import ToolBar from 'components/ToolBar/ToolBar';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <CssBaseline/>
        <ViewLayout>
          <ToolBar/>
        </ViewLayout>
      </div>
    </React.Fragment>
  );
}

export default App;
