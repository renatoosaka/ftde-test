import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Title = ({ text }) => (
  <S.Container>
    <S.Title>{text}</S.Title>
  </S.Container>
)

Title.propTypes = {
  text: PropTypes.string
}

export default Title;
