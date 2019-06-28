import React from 'react';
import Container from '@material-ui/core/Container';
import ToolBar from 'components/ToolBar/ToolBar';
import ViewDivider from 'components/ViewDivider/ViewDivider';


const containerStyle = {
  backgroundColor: '#cfe8fc',
  height: '100%',
  width: '100%',
  margin: 0,
  padding: 0,
  maxWidth: '100%',
};

export default class ViewLayout extends React.Component {
  state = {};

  render() {
    return (
      <Container fixed style={containerStyle}>
        <ToolBar/>
        <ViewDivider/>
        <Container/>
        <ViewDivider/>
        <Container/>
        <ViewDivider/>
        <ToolBar/>
      </Container>
    );
  }
}
