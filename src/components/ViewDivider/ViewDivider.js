import React from 'react';
import './ViewDivider.css';

export default function ViewDivider(props) {
  const style = props.style || {};

  if (props.vertical) {
    style.width = props.size || '2px';
  }

  if (props.horizontal) {
    style.height = props.size || '2px';
  }

  return (
    <div className='view-divider' style={style}/>
  );
}
