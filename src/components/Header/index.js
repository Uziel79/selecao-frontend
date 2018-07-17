import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Title, Content, SearchBar, ButtonAdd,
} from './styles';

const Header = ({ handleOpenAddModal }) => (
  <Container>
    <Title>
      <span className="sanar">
Sanar
      </span>
      <span className="flix">
Flix
      </span>
    </Title>
    <Content>
      <SearchBar>
        <input type="text" name="search" id="search" placeholder="Buscar por Nome" />
      </SearchBar>
      <ButtonAdd onClick={e => handleOpenAddModal(e)}>
Adicionar Novo Vídeo
      </ButtonAdd>
    </Content>
  </Container>
);

Header.propTypes = {
  handleOpenAddModal: PropTypes.func.isRequired,
};

export default Header;
