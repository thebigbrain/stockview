import React from 'react';
// import Draggable from 'react-draggable';
import Draggable from './Draggable';
import './ViewDivider.css';

export default function ViewDivider(props) {
  const style = {};
  if (props.width) style.width = props.width;
  if (props.height) style.height = props.height;

  return (
    <Draggable {...props}>
      <div
        // draggable={props.disabled !== true}
        className={`view-divider ${props.className || ''}`}
        style={style}
      />
    </Draggable>
  );

}
