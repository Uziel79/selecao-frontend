import React, { Fragment, Component } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import Video from '../../components/Video';
import ModalVideo from '../../components/ModalVideo';
import ModalNewVideo from '../../components/ModalNewVideo';

import {
  Container,
  FiltersContainer,
  Filters,
  OrderItem,
} from './styles';

class Main extends Component {
  state = {
    modalVideoVisible: false,
    modalAddNewVisible: false,
    searchInput: '',
    videoActive: {
      id: '',
      title: '',
      likes: '',
      views: '',
    },
    titleInput: '',
    linkInput: '',
    videosListArray: [],
  };

  async componentWillMount() {
    const { data } = await api.get('/videos');

    this.setState({ videosListArray: data.videos });
  }

  handleOpenModalVideo = (event, videoActive) => {
    event.preventDefault();

    const { videosListArray: videos } = this.state;

    const index = videos.findIndex(item => item.id === videoActive.id);

    const videoSelected = videos[index];

    videoSelected.views += 1;

    videos[index] = videoSelected;

    this.setState({ videosListArray: videos, videoActive, modalVideoVisible: true });
  };

  handleLikeVideo = (event, id) => {
    event.preventDefault();

    const { videosListArray: videos } = this.state;

    const index = videos.findIndex(item => item.id === id);

    const videoSelected = videos[index];

    videoSelected.likes += 1;

    videos[index] = videoSelected;

    this.setState({ videosListArray: videos });
  }

  handleOpenAddModal = (event) => {
    event.preventDefault();

    this.setState({ modalAddNewVisible: true });
  };

  handleAddNewVideo = (event, { title, link }) => {
    event.preventDefault();

    const { videosListArray } = this.state;

    const idVideo = link.split('https://youtu.be/');

    const id = idVideo[1];

    console.log(title);

    this.setState({
      titleInput: '',
      linkInput: '',
      videosListArray: [...videosListArray,
        {
          id,
          title,
          views: 0,
          likes: 0,
        },
      ],
    });
  };

  handleCloseModalVideo = (event) => {
    event.preventDefault();

    this.setState({
      videoActive: {
        id: '',
        title: '',
        likes: '',
        views: '',
      },
      modalVideoVisible: false,
    });
  };

  handleCloseAddNewVideo = (event) => {
    event.preventDefault();

    this.setState({ modalAddNewVisible: false });
  };

  handleChangeTitleInput = (event) => {
    this.setState({ titleInput: event.target.value });
  }

  handleChangeLinkInput = (event) => {
    this.setState({ linkInput: event.target.value });
  }

  handleSearch = (event) => {
    event.preventDefault();

    const {
      videosListArray: videos,
    } = this.state;

    const newList = videos.filter(video => (
      video.title.toLowerCase().search(event.target.value.toLowerCase() !== -1)
    ));

    this.setState({
      videosListArray: newList,
    });
  }

  handleSortByViews = (event) => {
    event.preventDefault();

    const {
      videosListArray: videos,
    } = this.state;

    const sortList = videos.sort((a, b) => a.views > b.views);

    this.setState({
      videosListArray: sortList,
    });
  }

  handleSortByLikes = (event) => {
    event.preventDefault();

    const {
      videosListArray: videos,
    } = this.state;

    const sortList = videos.sort((a, b) => a.likes > b.likes);

    this.setState({
      videosListArray: sortList,
    });
  }

  render() {
    const {
      searchInput,
      modalVideoVisible,
      modalAddNewVisible,
      videoActive,
      titleInput,
      linkInput,
      videosListArray,
    } = this.state;

    return (
      <Fragment>
        <Header
          searchInput={searchInput}
          handleSearch={this.handleSearch}
          handleOpenAddModal={this.handleOpenAddModal}
        />
        <ModalVideo
          visibleModal={modalVideoVisible}
          data={videoActive}
          handleCloseModalVideo={this.handleCloseModalVideo}
          handleLikeVideo={this.handleLikeVideo}
        />
        <ModalNewVideo
          visibleModal={modalAddNewVisible}
          titleInput={titleInput}
          linkInput={linkInput}
          handleAddNewVideo={this.handleAddNewVideo}
          handleCloseAddNewVideo={this.handleCloseAddNewVideo}
          handleChangeTitleInput={this.handleChangeTitleInput}
          handleChangeLinkInput={this.handleChangeLinkInput}
        />
        <FiltersContainer>
          <p>
          Últimos Vídeos
          </p>
          <Filters>
            <p>
            Ordenar por:
            </p>
            <OrderItem onClick={e => this.handleSortByLikes(e)}>
              <i className="fa fa-heart" aria-hidden="true" />
              Likes
            </OrderItem>
            <OrderItem onClick={e => this.handleSortByViews(e)}>
              <i className="fa fa-eye" aria-hidden="true" />
              Visualizações
            </OrderItem>
          </Filters>
        </FiltersContainer>
        <Container>
          {videosListArray.map(video => (
            <Video key={video.id} data={video} handleOpenModalVideo={this.handleOpenModalVideo} />
          ))}
        </Container>
      </Fragment>
    );
  }
}

export default Main;
