import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0px 120px 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 135px;
  align-items: center;

  p {
    color: #47525e;
    font-size: 26px;
    font-weight: 400;
    line-height: 33px;
    text-align: left;
    margin-bottom: 0;
    padding: 6px 0;
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-bottom: 0;
    padding: 6px 10px;
  }
`;

export const OrderItem = styled.span`
  padding: 6px 10px;
  i {
    padding-right: 4px;
  }
`;
