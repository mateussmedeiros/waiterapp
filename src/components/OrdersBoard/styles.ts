import styled from "styled-components";

export const Board = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  flex: 1;

  > header {
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 128px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    strong { font-weight: 500; }

    span {
      font-size: 0.875rem;
      color: #666666;
    }

    & + button { margin-top: 24px; }
  }
`;
