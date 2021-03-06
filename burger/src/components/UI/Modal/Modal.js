import React from 'react'
import './Modal.css'
import Aux from '../../../hoc/AuxComponent'
import Backdrop from '../Backdrop/Backdrop'
const modal = (props) => (
    <Aux>
        <Backdrop 
            show={props.show}
            clicked={props.modalClosed}/>
        <div 
            className="Modal"
            style={{
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
)

export default modal;