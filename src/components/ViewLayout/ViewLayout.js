import React from 'react';
import ToolBar from 'components/ToolBar/ToolBar';
import ViewDivider from 'components/ViewDivider/ViewDivider';

import './ViewLayout.css';
import ViewContent from "../ViewContent/ViewContent";

const containerStyle = {
  left: '0',
  backgroundColor: '#cfe8fc',
  height: '100%',
  width: '100%',
  margin: 0,
  padding: 0,
  maxWidth: '100%',
  textAlign: 'left'
};

const toolbarWidth = '50';

const leftToolBarStyle = {
  left: 0,
  top: 0,
  width: toolbarWidth + 'px'
};

const rightToolBarStyle = {
  right: 0,
  top: 0,
  width: toolbarWidth + 'px'
};


export default class ViewLayout extends React.Component {
  componentDidMount() {
    console.log('view layout did mount');
  }

  render() {
    const contentWidth = document.body.clientWidth - 2 * toolbarWidth - 4;

    return (
      <div className='view-layout' style={containerStyle}>
        <ToolBar style={leftToolBarStyle}/>
        <ViewDivider disabled width='4px'/>
        <ViewContent width={contentWidth}/>
        <ToolBar style={rightToolBarStyle}/>
      </div>
    );
  }
}
