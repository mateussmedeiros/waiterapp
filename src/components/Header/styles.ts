import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 198px;
  background: #D73035;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1216px;

  .page-details {
    h1 {
      font-size: 2rem;
      color: #fff;
    }

    h2 {
      font-weight: 400;
      font-size: 1rem;
      color: #fff;
      opacity: .9;
      margin-top: 6px;
    }
  }
`;
