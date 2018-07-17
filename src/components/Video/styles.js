import styled from 'styled-components';

export const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  width: calc((100% / 3) - 30px);
  margin: 15px 15px;
`;

export const ThumbVideo = styled.div`
  background: #e0e6ed;
  position: relative;
  width: 100%;
  height: 220px;
  margin-bottom: 10px;

  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 92px;
    color: #47525e;
  }
`;

export const TitleVideo = styled.p`
  color: #47525e;
  font-size: 26px;
  font-weight: 400;
  line-height: 33px;
  text-align: left;
  margin-bottom: 10px;
`;

export const VideoInformation = styled.div`
  color: #47525e;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;

  .views {
    margin-right: 14px;
    i {
      margin-right: 7px;
    }
  }

  .likes {
    i {
      margin-right: 7px;
    }
  }
`;
