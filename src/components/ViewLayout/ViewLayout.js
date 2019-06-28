import React from 'react';
import Container from '@material-ui/core/Container';

const vlStyle = {
  backgroundColor: '#cfe8fc',
  height: '100%',
  width: '100%',
  margin: 0,
  padding: 0,
  maxWidth: '100%',
};

export default function ViewLayout(props) {
  console.log(props.children);

  return (
    <React.Fragment>
      <Container fixed style={vlStyle}>
        {props.children}
      </Container>
    </React.Fragment>
  );
}
