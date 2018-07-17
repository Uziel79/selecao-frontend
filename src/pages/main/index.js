import React, { Fragment, Component } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import Video from '../../components/Video';
import ModalVideo from '../../components/ModalVideo';
import ModalNewVideo from '../../components/ModalNewVideo';

import { Container } from './styles';

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
    modalInsert: {
      title: '',
      link: '',
    },
    videosListArray: [],
  };

  async componentWillMount() {
    const { data } = await api.get('/videos');

    this.setState({ videosListArray: data.videos });
  }

  handleSearch = (event, _search) => {
    event.preventDefault();

    this.setState({ searchInput: '' });
  };

  handleOpenModalVideo = (event, videoActive) => {
    event.preventDefault();

    this.setState({ videoActive, modalVideoVisible: true });
  };

  handleOpenAddModal = (event) => {
    event.preventDefault();

    this.setState({ modalAddNewVisible: true });
  };

  handleAddNewVideo = (event, { title, link }) => {
    event.preventDefault();

    const { videosListArray } = this.state;

    const { _rest, idVideo } = link.split('https://youtu.be/');

    this.setState({ modalInsert: { title: '', link: '' }, videosListArray: [...videosListArray, { id: idVideo, title, views: 0, likes: 0 }] });
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
    this.setState({ modalInsert: { title: event.target.value } });
  }

  handleChangeLinkInput = (event) => {
    this.setState({ modalInsert: { link: event.target.value } });
  }

  render() {
    const {
      searchInput,
      modalVideoVisible,
      modalAddNewVisible,
      videoActive,
      modalInsert,
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
        />
        <ModalNewVideo
          visibleModal={modalAddNewVisible}
          inputs={modalInsert}
          handleAddNewVideo={this.handleAddNewVideo}
          handleCloseAddNewVideo={this.handleCloseAddNewVideo}
          handleChangeTitleInput={this.handleChangeTitleInput}
          handleChangeLinkInput={this.handleChangeLinkInput}
        />
        <Container>
          <FiltersContainer>
            <p>Últimos Vídeos</p>
            <Filters>
              <p>Ordenar por:</p>
              <OrderItem>
                <i className="fa fa-heart" aria-hidden="true" />
                Likes
              </OrderItem>
              <OrderItem>
                <i className="fa fa-eye" aria-hidden="true" />
                Visualizações
              </OrderItem>
            </Filters>
          </FiltersContainer>
          {videosListArray.map(video => (
            <Video key={video.id} data={video} handleOpenModalVideo={this.handleOpenModalVideo} />
          ))}
        </Container>
      </Fragment>
    );
  }
}

export default Main;
