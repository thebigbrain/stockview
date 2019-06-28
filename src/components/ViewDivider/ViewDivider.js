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

  const noHover = props.hover !== false ? '' : 'no-hover';

  return (
    <div className={'view-divider ' + noHover} style={style}/>
  );
}
