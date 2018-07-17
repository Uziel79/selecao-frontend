import React from 'react';
import PropTypes from 'prop-types';

import {
  BackgroundModal, Modal, Frame, Content, Title, Like, Close,
} from './styles';

const ModalVideo = ({
  data, visibleModal, handleCloseModalVideo, handleLikeVideo,
}) => (
  <BackgroundModal className={visibleModal ? 'showModal' : 'hideModal'}>
    <Modal>
      <Close onClick={e => handleCloseModalVideo(e)}>
        <i className="fa fa-times" aria-hidden="true" />
      </Close>
      <Frame
        src={`https://www.youtube.com/embed/${data.id}`}
        frameborder="0"
        allow="encrypted-media"
        allowfullscreen
      />
      <Content>
        <Title>
          {data.title}
        </Title>
        <Like onClick={e => handleLikeVideo(e, data.id)}>
          <i className="fa fa-heart" aria-hidden="true" />
          Gostei
        </Like>
      </Content>
    </Modal>
  </BackgroundModal>
);

ModalVideo.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  visibleModal: PropTypes.bool.isRequired,
  handleCloseModalVideo: PropTypes.func.isRequired,
  handleLikeVideo: PropTypes.func.isRequired,
};

export default ModalVideo;
