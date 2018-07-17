import styled from 'styled-components';

export const BackgroundModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.75);

  &.showModal {
    display: block;
  }

  &.hideModal {
    display: none;
  }
`;

export const Close = styled.span`
  position: absolute;
  right: -25px;
  top: -25px;
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  i {
    color: #5a6978;
    font-size: 50px;
    position: absolute;
    top: 49.5%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 640px;
  background-color: #ffffff;
`;

export const Frame = styled.iframe`
  width: 580px;
  height: 328px;
  display: block;
  margin: 30px auto 0;
  border: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 30px;
`;

export const Title = styled.h3`
  color: #47525e;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  flex: 1;
`;

export const Like = styled.button`
  background-color: #eeeeee;
  border-radius: 5px;
  border: 0;
  height: 32px;
  color: #47525e;
  font-size: 12px;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
  padding: 4px 12px;
  i {
    margin-right: 5px;
  }
`;
