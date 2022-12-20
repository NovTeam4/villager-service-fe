import styled from 'styled-components';

export const MainTemplate = styled.main`
  margin-top: 2rem;
  margin-bottom: 7rem;
  .flex {
    margin-top: 0.7rem;
    display: flex;
    justify-content: space-between;
  }
  .flex-2 {
    margin-top: 0.7rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .user-info {
    display: flex;
    justify-content: space-between;
  }
  .map {
    margin-top: 2rem;
    height: 200px;
    background: grey;
  }
`;

export const RegisterButton = styled.button`
  position: fixed;
  bottom: 90px;
  right: 5%;
  padding: 1.4rem 1rem;
  border-radius: 100%;
  border: none;
  font-size: 0.9rem;
  background: #4ab7b6;
  color: #fff;
  z-index: 10;
`;