import styled from 'styled-components';

export const Container = styled.div`
  height: 245px;
  width: 100%;
  padding: 59px 120px 38.5px 120px;
  background: #969faa;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 36px;
  text-align: left;
  line-height: 46px;
  color: #fff;
  margin-bottom: 35px;

  .sanar {
    font-weight: 400;
  }
  .flix {
    font-weight: 900;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchBar = styled.form`
  width: 100%;
  height: 62px;
  flex: 1;
  margin-right: 30px;

  input {
    width: 100%;
    height: 62px;
    background-color: #ffffff;
    border: 1px solid #8492a6;
    border-radius: 5px;
    color: #8190a5;
    font-size: 18px;
    font-weight: 400;
    line-height: 62px;
    text-align: left;
    padding: 18px;
  }
`;

export const ButtonAdd = styled.button`
  background-color: #e0e6ed;
  border-radius: 6px;
  border: 0;
  height: 63px;
  color: #47525e;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  padding: 16px 22px;
`;
