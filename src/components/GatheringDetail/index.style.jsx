import styled from 'styled-components';
import palette from '../../lib/palette';

export const GatheringDetailTemplate = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  .flex {
    display: flex;
    /* background-color: red; */
    align-items: center;
  }
  .info {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 10px;
    padding: 1rem;
    background: ${palette.gray[3]};
  }
  .inner {
    width: 100%;
    max-width: 600px;
  }
`;
