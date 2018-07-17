import React from 'react';
import PropTypes from 'prop-types';

import {
  BackgroundModal, Close, Modal, Content, Title, Button, Form,
} from './styles';

const ModalNewVideo = ({
  visibleModal,
  handleCloseAddNewVideo,
  handleAddNewVideo,
  handleChangeTitleInput,
  handleChangeLinkInput,
  linkInput,
  titleInput,
}) => (
  <BackgroundModal className={visibleModal ? 'showModal' : 'hideModal'}>
    <Modal>
      <Close onClick={e => handleCloseAddNewVideo(e)}>
        <i className="fa fa-times" aria-hidden="true" />
      </Close>
      <Content>
        <Title>
Adicionar vídeo
        </Title>
        <Form onSubmit={e => handleAddNewVideo(e, { title: titleInput, link: linkInput })}>
          <input
            type="text"
            name="title"
            placeholder="Nome do Video"
            onChange={e => handleChangeTitleInput(e)}
          />
          <input
            type="text"
            name="link"
            placeholder="Link do Youtube (https://https://youtu.be/DkA2NuZt9G8)"
            onChange={e => handleChangeLinkInput(e)}
          />
          <Button type="submit">
Cadastrar
          </Button>
        </Form>
      </Content>
    </Modal>
  </BackgroundModal>
);

ModalNewVideo.propTypes = {
  visibleModal: PropTypes.bool.isRequired,
  handleCloseAddNewVideo: PropTypes.func.isRequired,
  handleAddNewVideo: PropTypes.func.isRequired,
  handleChangeTitleInput: PropTypes.func.isRequired,
  handleChangeLinkInput: PropTypes.func.isRequired,
  titleInput: PropTypes.string.isRequired,
  linkInput: PropTypes.string.isRequired,
};

export default ModalNewVideo;
