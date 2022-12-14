import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { setUserId } from '../../store/User';
import { signInAPI, signInOAuthGoogleAPI } from '../../api/Users';
import { setRefreshToken, setAccessToken, setAuthentication } from '../../app';
import {LoginButtonGoogle, LoginButtonNaver, LoginButtonKakao} from './OAuth/index';
import imageUrl from '../../images/title5.png';

import {
  Wrapper,
  Desc,
  TitleDesc,
  TitleImage,
  SignInForm,
  ErrorMsg,
  Input,
  Button,
  FindSection,
  SignupSection,
  AdditionalMsg,
  SignupNavigation,
} from './SignIn.styles';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setToken = (data) => {
    // axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
    setRefreshToken(data.refreshToken);
    setAccessToken(data.accessToken);
    setAuthentication(true);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('π€ μ΄λ©μΌμ μλ ₯νμΈμ!')
      .email('π€ μ¬λ°λ₯Έ μ΄λ©μΌ νμμ΄ μλλλ€!'),
    password: Yup.string().required('π€ λΉλ°λ²νΈλ₯Ό μλ ₯νμΈμ!'),
  });

  const onSubmit = async (values) => {
    const body = { ...values };
    await signInAPI(body)
      .then((response) => {
        console.log(response.data);
        setToken(response.data);
        localStorage.setItem(
          'expiresAt',
          moment().add(8, 'minutes').format('yyyy-MM-DD HH:mm:ss'),
        ); // moment
        dispatch(setUserId(response.data.loginMemberId));
        toast.success(<h3>μ±κ³΅μ μΌλ‘ λ‘κ·ΈμΈνμ΅λλ€! π</h3>);

        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.response.data.errorMessage);
      });
  };

  const onClick = async () => {
    await signInOAuthGoogleAPI().then((response) => {
      console.log(response);
    });
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  const emailCheck = errors.email == null ? 'π' : errors.email;
  const passwordCheck = errors.password == null ? 'π' : errors.password;

  return (
    <Wrapper>
      <ToastContainer />
      <Desc>
        <TitleDesc>
          <div>
            μ°λ¦¬ λͺ¨λ λͺ¨μ¬μ
          </div>
          <div>
            π€£
          </div>
        </TitleDesc>
        <TitleImage src={imageUrl}/>
      </Desc>
      <SignInForm
        autoComplete="off"
        direction="column"
        justifyContent="space-evenly"
        onSubmit={handleSubmit}
      >
        <ErrorMsg>{emailCheck}</ErrorMsg>
        <Input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="μ΄λ©μΌ"
          onBlur={handleBlur}
        />
        <ErrorMsg>{passwordCheck}</ErrorMsg>
        <Input
          value={values.password}
          onChange={handleChange}
          id="password"
          type="password"
          placeholder="λΉλ°λ²νΈ"
          onBlur={handleBlur}
        />
        <Button type="submit">λ‘κ·ΈμΈνκΈ°</Button>
      </SignInForm>
      <LoginButtonGoogle/>
      <LoginButtonNaver/>
      <LoginButtonKakao/>
      <FindSection>
        <AdditionalMsg>μ΄λ©μΌ μ°ΎκΈ°</AdditionalMsg>
        <AdditionalMsg>λΉλ°λ²νΈ μ°ΎκΈ°</AdditionalMsg>
      </FindSection>
      <SignupSection>
        <AdditionalMsg>μμ§λ λλ€#λλ€ νμμ΄ μλμ κ°μ?</AdditionalMsg>
        <SignupNavigation onClick={() => navigate('/signup')}>
          νμκ°μ
        </SignupNavigation>
      </SignupSection>
    </Wrapper>
  );
}

export default SignIn;
