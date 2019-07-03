import React from 'react';

function styleHacks(childStyle) {
  // Workaround IE pointer events; see #51
  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
  return {
    touchAction: 'none',
    ...childStyle
  };
}

export default class Draggable extends React.Component {
  isDragging = false;

  onDragStart = (e) => {
    this.isDragging = true;

    if (this.props.onDragStart) {
      this.props.onDragStart(e);
    }
  };

  onDrag = (e) => {
    if (!this.isDragging) return;

    if (e.clientX === 0 && e.clientY === 0) {
      if (this.props.onDragEnd) this.props.onDragEnd(e);
      return;
    }

    if (this.props.onDrag) {
      this.props.onDrag(e)
    }
  };

  onDragEnd = (e) => {
    this.isDragging = false;
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.onDrag);
    document.addEventListener('mouseup', this.onDragEnd);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onDrag);
    document.removeEventListener('mouseup', this.onDragEnd);
  }

  render() {
    return React.cloneElement(React.Children.only(this.props.children), {
      style: styleHacks(this.props.children.props.style),

      // Note: mouseMove handler is attached to document so it will still function
      // when the user drags quickly and leaves the bounds of the element.
      onMouseDown: this.onDragStart,
      // onDrag: this.onDrag,
      // onDragEnd: this.onDragEnd,
    });
  }
}