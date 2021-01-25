import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

import * as S from './styles'

import closeImg from 'assets/images/close.png';

const Modal = ({ isShowing, toggle, children }) => isShowing ? ReactDOM.createPortal(
  <S.Overlay>
    <S.Container>
      <button type="button" onClick={toggle}>
        <img src={closeImg} alt="close" />
      </button>
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  </S.Overlay>, document.body
) : null

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
}

Modal.propTypes = {
  isShowing: PropTypes.bool,
  toggle: PropTypes.func,
  children:  PropTypes.node
}

export default Modal;
