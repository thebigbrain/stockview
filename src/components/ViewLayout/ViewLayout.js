import React from 'react';
import Container from '@material-ui/core/Container';
import ToolBar from 'components/ToolBar/ToolBar';
import ViewDivider from 'components/ViewDivider/ViewDivider';

import './ViewLayout.css';

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

const leftToolBarStyle = {
  left: 0,
  top: 0,
};

const rightToolBarStyle = {
  right: 0,
  top: 0
};

const d1Style = {
  top: '0',
};

const d2Style = {
  cursor: 'ns-resize'
};

const d3Style = {
  top: '0',
  cursor: 'ew-resize'
};

const c1Style = {
  top: 0,
  backgroundColor: '#fff'
};

const c2Style = {
  bottom: 0,
  backgroundColor: '#fff'
};

export default class ViewLayout extends React.Component {
  state = {
    toolbarWidth: '50px',
    dividerSize: '4px',
    watchlistWidth: '0px'
  };

  render() {
    const {toolbarWidth, dividerSize, watchlistWidth} = this.state;

    leftToolBarStyle.width = toolbarWidth;
    rightToolBarStyle.width = toolbarWidth;
    d1Style.left = toolbarWidth;
    d3Style.right = toolbarWidth;

    c1Style.left = `calc(${toolbarWidth} + ${dividerSize})`;
    c1Style.width = `calc(100vw - 2 * (${toolbarWidth} + ${dividerSize}) - ${watchlistWidth})`;
    c1Style.height = `calc(60vh - ${dividerSize})`;

    d2Style.left = c1Style.left;
    d2Style.width = c1Style.width;
    d2Style.top = c1Style.height;

    c2Style.left = c1Style.left;
    c2Style.width = c1Style.width;
    c2Style.height = `calc(40vh)`;

    return (
      <Container className='view-layout' fixed style={containerStyle}>
        <ToolBar style={leftToolBarStyle}/>
        <ViewDivider vertical size={dividerSize} style={d1Style}/>
        <Container style={c1Style}/>
        <ViewDivider horizontal size={dividerSize} style={d2Style}/>
        <Container style={c2Style}/>
        <ViewDivider vertical size={dividerSize} style={d3Style}/>
        <ToolBar style={rightToolBarStyle}/>
      </Container>
    );
  }
}
