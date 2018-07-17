import React from 'react';
import PropTypes from 'prop-types';

import {
  VideoItem, ThumbVideo, TitleVideo, VideoInformation,
} from './styles';

const Video = ({ data, handleOpenModalVideo }) => (
  <VideoItem onClick={e => handleOpenModalVideo(e, data)}>
    <ThumbVideo>
      <img
        src={`https://i.ytimg.com/vi/${data.id}/hqdefault.jpg`}
        alt={data.title}
        className="thumbnail"
      />
      <i className="fa fa-play-circle" aria-hidden="true" />
    </ThumbVideo>
    <TitleVideo>
      {data.title}
    </TitleVideo>
    <VideoInformation>
      <span className="views">
        <i className="fa fa-eye" aria-hidden="true" />
        {data.views}
      </span>
      <span className="likes">
        <i className="fa fa-heart" aria-hidden="true" />
        {data.likes}
      </span>
    </VideoInformation>
  </VideoItem>
);

Video.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
  handleOpenModalVideo: PropTypes.func.isRequired,
};

export default Video;
