import React, { PropTypes } from 'react';

const Overlay = (props) => {
  const overlayClass = cx('overlay', {'active': this.state.hover });

  return (
    <div className={overlayClass}>
      <a href="#" target="_blank" type="button" name="demo">demo</a>
      <a href="#" target="_blank" type="button" name="code">code</a>
    </div>
  )
}

export default Overlay;
