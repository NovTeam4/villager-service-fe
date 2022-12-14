import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import {
  Wrapper,
  ImageSection,
  InfoList,
  EditButton,
  SignOut,
  SignOutWrapper,
} from './ProfileDetail.styles';
import { myPageDetailAPI } from '../../../api/Users';
import PasswordChangeModal from '../../modal/User/PasswordChangeModal';
import SignOutModal from '../../modal/User/SignOutModal';
import ChangeIntroduce from './ChangeIntroduce';

function ProfileDetail() {
  const [isChange, setIsChange] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.value === 'changePW') {
      setIsChange(true);
    } else if (e.target.value === 'signOut') {
      setIsDelete(true);
    }
  };

  function getUserInfo() {
    return myPageDetailAPI().then((res) => res.data);
  }

  const { data } = useQuery('getInfo', getUserInfo);

  const [image, setImage] = useState(
    'https://i.pinimg.com/736x/93/a6/8b/93a68b57a54e4bdc73d43d1d049b94b3.jpg',
  );
  const handleImage = (e) => {
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }

    fileReader.onload = () => {
      setImage(fileReader.result);
    };
  };

  return (
    <>
      <Wrapper>
        {data && (
          <div>
            <ImageSection>
              <label htmlFor="ex_file">
                <img src={image} alt="프사" />
                <div>프로필 이미지 수정</div>
              </label>
              <input
                type="file"
                id="ex_file"
                accept="image/jpg, image/png, image/jpeg"
                onChange={handleImage}
              />
            </ImageSection>
            <InfoList>
              <li>
                <span>이메일</span>
                <span>{data.email}</span>
              </li>
              <li>
                <span>닉네임</span>
                <span>{data.nickName}</span>
              </li>
              <li>
                <span>비밀번호</span>
                <EditButton
                  value="changePW"
                  type="button"
                  onClick={handleClick}
                >
                  비밀번호 수정
                </EditButton>
              </li>
              <li>
                <span>성별</span>
                <span>남자</span>
              </li>
              <li>
                <span>생년월일</span>
                <span>2000년 02월 02일</span>
              </li>
            </InfoList>
            <ChangeIntroduce
              nickname={data.nickName}
              introduce={data.introduce}
            />
            <SignOutWrapper>
              <SignOut value="signOut" type="button" onClick={handleClick}>
                회원 탈퇴
              </SignOut>
            </SignOutWrapper>
          </div>
        )}
      </Wrapper>

      {isChange && <PasswordChangeModal modal={setIsChange} />}
      {isDelete && <SignOutModal modal={setIsDelete} />}
    </>
  );
}

export default ProfileDetail;
