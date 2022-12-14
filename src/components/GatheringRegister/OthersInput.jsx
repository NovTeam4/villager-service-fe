import React from 'react';
import { CommonInput, ErrorText, SubTitleText } from './index.style';

function OthersInput({
  capacityErrMsg,
  scoreErrMsg,
  feeErrMsg,
  capacityFieldProps,
  scoreFieldProps,
  feeFieldProps,
}) {
  return (
    <>
      <SubTitleText>μΈμμ</SubTitleText>
      <ErrorText>{capacityErrMsg ? `π€ ${capacityErrMsg}` : 'π'}</ErrorText>
      <CommonInput type="number" {...capacityFieldProps} />
      <SubTitleText>λ§€λ μ μ</SubTitleText>
      <ErrorText>{scoreErrMsg ? `π€ ${scoreErrMsg}` : 'π'}</ErrorText>
      <CommonInput type="number" {...scoreFieldProps} />
      <SubTitleText>μ°Έκ°λΉ</SubTitleText>
      <ErrorText>{feeErrMsg ? `π€ ${feeErrMsg}` : 'π'}</ErrorText>
      <CommonInput type="number" {...feeFieldProps} />
    </>
  );
}

export default OthersInput;
