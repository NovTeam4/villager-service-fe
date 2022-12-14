import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { signUpAPI } from '../../api/Users';

import { 
  Wrapper,
  SignUpForm,
  ErrorMsg,
  Input,
  GenderContainer,
  GenderButton,
  Button,
  IntroductionInput,
} from './SignUp.styles';

function SignUp() {
  const navigate = useNavigate();
  const [ gender, setGender ] = useState("");
  
  const setMan = () => {
    setGender("MAN");
  };
  
  const setWoman = () => {
    setGender("WOMAN");
  };
  
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('π€ μ¬λ°λ₯Έ μ΄λ©μΌ νμμ΄ μλλλ€!')
      .required('π€ μ΄λ©μΌμ μλ ₯νμΈμ!'),
      nickname: Yup.string()
      .min(2, 'π€ λλ€μμ μ΅μ 2κΈμ μ΄μμλλ€!')
      .max(10, 'π€ λλ€μμ μ΅λ 10κΈμμλλ€!')
      .required('π€ λλ€μμ μλ ₯νμΈμ!'),
      password: Yup.string()
      .min(8, 'π€ λΉλ°λ²νΈλ μ΅μ 8μλ¦¬ μ΄μμλλ€!')
      .max(16, 'π€ λΉλ°λ²νΈλ μ΅λ 16μλ¦¬μλλ€!')
      .required('π€ λΉλ°λ²νΈλ₯Ό μλ ₯νμΈμ!')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\]{};':"\\|,.<>?])[^\s]*$/,
        'π€ μμ΄, μ«μ, κ³΅λ°±μ μ μΈν νΉμλ¬Έμλ₯Ό λͺ¨λ ν¬ν¨ν΄μΌ ν©λλ€!',
        ),
        passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'π€ λΉλ°λ²νΈκ° μΌμΉνμ§ μμ΅λλ€!')
        .required('π€ λΉλ°λ²νΈ νμΈμ μλ ₯νμΈμ!'),
        birth: Yup.string()
        .required('π€ μμΌμ μ νν΄μ£ΌμΈμ!'),
        gender: Yup.string()
        .required('π€ μ±λ³μ μ νν΄μ£ΌμΈμ!'),
        introduce: Yup.string()
      .required('π€ μκΈ°μκ°λ₯Ό μ μ΄μ£ΌμΈμ!')
    });
    
  const onSubmit = async (values) => {
    const body = { ...values };
    try {   
      signUpAPI(body)
      .then((response) => {
        if (response.data) {
          toast.error(response.data.errorMessage);
        }
        else {
          toast.success(<h1>νμκ°μμ΄ μλ£λμμ΅λλ€. π</h1>);
          setTimeout(() => {
            navigate('/signIn');
          }, 1500);
        }
      });
    } catch(e) {
      toast.error(e.response.data.errorMessage);
    }
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      nickname: '',
      password: '',
      passwordConfirm: '',
      gender: '',
      birth: '',
      introduce: '',
    },
    validationSchema,
    setMan,
    setWoman,
    onSubmit,
  });
  
  values.gender = gender;

  const emailCheck = (errors.email) == null ? 'π' : errors.email;
  const nicknameCheck = (errors.nickname) == null ? 'π' : errors.nickname;
  const passwordCheck = (errors.password) == null ? 'π' : errors.password;
  const passwordConfirmCheck = (errors.passwordConfirm) == null ? 'π' : errors.passwordConfirm;
  const birthCheck = (errors.birth) == null ? 'π' : errors.birth;
  const genderCheck = (errors.gender) == null ? 'π' : errors.gender;
  const introduceCheck = (errors.introduce) == null ? 'π' : errors.introduce;

  return (
    <>
      <Wrapper>
        <ToastContainer/>
        <SignUpForm
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
          <ErrorMsg>{nicknameCheck}</ErrorMsg>
          <Input
            value={values.nickname}
            onChange={handleChange}
            id="nickname"
            type="text"
            placeholder="λλ€μ"
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
          <ErrorMsg>{passwordConfirmCheck}</ErrorMsg>
          <Input
            value={values.passwordConfirm}
            onChange={handleChange}
            id="passwordConfirm"
            type="password"
            placeholder="λΉλ°λ²νΈ νμΈ"
            onBlur={handleBlur}
          />
          <ErrorMsg>{birthCheck}</ErrorMsg>
          <Input
            value={values.birth}
            onChange={handleChange}
            id="birth"
            type="date"
            placeholder="μλμμΌ"
            onBlur={handleBlur}
          />
          <ErrorMsg>{genderCheck}</ErrorMsg>
          <GenderContainer>
            <GenderButton
              value={values.gender}
              type="button"
              onClick={setMan}
              id="MAN"
            >λ¨</GenderButton>
            <GenderButton
              value={values.gender}
              type="button"
              onClick={setWoman}
              id="WOMAN"
            >μ¬</GenderButton>
          </GenderContainer>
          <ErrorMsg>{introduceCheck}</ErrorMsg>
          <IntroductionInput
            value={values.introduce}
            onChange={handleChange}
            id="introduce"
            type="textarea"
            placeholder="μκΈ°μκ°"
            onBlur={handleBlur}
          />
          <Button type="submit">νμκ°μνκΈ°</Button>
        </SignUpForm>
      </Wrapper>
    </>
  );
}

export default SignUp;