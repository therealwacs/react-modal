import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import './modal.css'

export default class Modal extends Component {

  render() {
    const {children, isOpen, hideHandler, title} = this.props

    return (
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames={'modal'}
        unmountOnExit
      >
        <div className="modal">
          <div className="modal__close-area" onClick={hideHandler} />
          <div className="modal__dialog">
            <div className="modal__content">
                <div className="modal__header">
                  <div className="modal__title">
                    {title}
                  </div>
                  <div className="modal__close" onClick={hideHandler}>&times;</div>
                </div>
                <div className="modal__body">
                    {children}
                </div>
                <div className="modal__footer">
                  <button className="btn btn-close" onClick={hideHandler}>
                    Hide modal
                  </button>
                </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
}