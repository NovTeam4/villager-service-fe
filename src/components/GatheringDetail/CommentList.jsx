import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { gatheringLookUpAPI } from '../../api/gathering';
import CommentInput from './CommentInput';
import {
  CommentListWrapper,
  Title,
  UserComment,
  UserName,
} from './CommentList.style';

function CommentList() {
  const { id: partyId } = useParams();

  const { data, refetch } = useQuery(
    ['getGathering', partyId],
    () => gatheringLookUpAPI(partyId),
    {
      suspense: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <Title>모임 댓글</Title>
      <CommentListWrapper>
        {data.data.commentList.map((comment) => (
          <li key={comment.partyCommentId}>
            <UserName owner={comment.owner}>{comment.nickName}</UserName>
            <UserComment>{comment.contents}</UserComment>
          </li>
        ))}
      </CommentListWrapper>
      <CommentInput refetch={refetch} />
    </>
  );
}

export default CommentList;
