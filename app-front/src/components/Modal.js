import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1050,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
  };
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1040,
    backgroundColor: 'rgba(0,0,0,.7)',
  };
  

const Modal = ( {open, children}) => {
    if (!open) return null
  return ReactDom.createPortal (
    <>
    <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
            {children}
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal