import React, { Component } from "react";
import { createPortal } from "react-dom";
import { OverlayDiv, ModalDiv } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');


export default class Modal extends Component {
    componentDidMount() {
       
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
    
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
       
        if (e.code === "Escape") {
        this.props.onClose();
        }
    }
    
    handleBackDropClick = e => {
           if (e.currentTarget === e.target) {
           this.props.onClose(); 
        }
    }

    render() {
        const { modalUrl, modalAlt } = this.props;
        return createPortal(
            <OverlayDiv onClick={this.handleBackDropClick}>
                <ModalDiv>
                    <img src={modalUrl} alt={modalAlt} />
                </ModalDiv>
            </OverlayDiv>,
            modalRoot,
        );
    }
}