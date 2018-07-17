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

  i {
    color: #5a6978;
    font-size: 50px;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 400px;
  background-color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const Title = styled.h3`
  color: #47525e;
  font-size: 26px;
  font-weight: 400;
  line-height: 33px;
  text-align: left;
  flex: 1;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    background-color: #ffffff;
    border: 1px solid #8492a6;
    border-radius: 5px;
    padding: 15px 11px 13px;
    height: 50px;
    color: #8190a5;
    font-size: 18px;
    font-weight: 400;
    line-height: 62px;
    text-align: left;
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  background-color: #5a6978;
  border-radius: 6px;
  border: 0;
  height: 63px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  padding: 16px 22px;
  max-width: fit-content;
`;
