// 나눔스퀘어

import styled from 'styled-components';
import palette from '../../lib/palette';

export const GatheringName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 0.7rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const LikeButton = styled.button`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  font-size: 1.7rem;
  font-weight: normal;
  color: red;
`;

export const JoinButton = styled.button`
  background: #4ab7b6;
  color: #fff;
  border-radius: 10px;
  padding: 0.5rem;
  border: none;
  font-size: 0.7rem;
  font-weight: normal;
  margin-left: 0.5rem;
`;

export const EditButton = styled.button`
  background: #4ab7b6;
  color: #fff;
  border-radius: 10px;
  padding: 0.5rem;
  border: none;
  font-size: 0.7rem;
  font-weight: normal;
  margin-left: 0.5rem;
`;

export const DestroyButton = styled.button`
  background: red;
  color: #fff;
  border-radius: 10px;
  padding: 0.5rem;
  border: none;
  font-size: 0.7rem;
  font-weight: normal;
  margin-left: 0.5rem;
`;

export const GatheringTagWrapper = styled.div`
  font-size: 0.7rem;
  display: flex;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  .tag {
    margin-right: 0.5rem;
    padding: 0.4rem;
    border-radius: 20px;
    background-color: #fdaa5d;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;

  &::before {
    content: '📌';
  }
`;

export const Wrapper = styled.div`
  & + div {
    margin-top: 1.5rem;
  }
  .end::before {
    content: ' ~ ';
  }
`;

export const Content = styled.div`
  margin-left: 1.6rem;
  font-size: 0.9rem;
`;

export const MemberInfoWrapper = styled.div`
  margin-top: 0.5rem;
  max-height: 150px;
  overflow: auto;
  background-color: #fff;
  border: 1px solid #ccc;

  .leader,
  .member {
    &:nth-child(2n + 1) {
      background: #ccc;
    }

    font-size: 1.1rem;
    font-weight: 700;
    border-bottom: 1px solid black;
    padding: 1rem 0.5rem;
  }

  .leader {
    &::before {
      content: '👑';
      display: inline-block;
    }
  }

  .member {
    &::before {
      content: '🙂';
      display: inline-block;
    }
  }

  .manner {
    margin-left: 1rem;
    color: #4ab7b6;
  }
`;
