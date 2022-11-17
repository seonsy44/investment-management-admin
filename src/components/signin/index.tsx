import React from 'react';
import styled from 'styled-components';
import { HiOutlineUser, HiLogin } from 'react-icons/hi';

import Button from '@components/Signin/Button';
import Input from '@components/Signin/Input';
import FormTitle from '@components/Signin/FormTitle';
import useSignin from '@hooks/useSignin';
import { flexBox } from '@styles/mixins';
import ReLoginModal from './ReLoginModal';

function Signin() {
  const { email, password, isFormValid, handleEmailChange, handlePasswordChange, handleSubmit } = useSignin();

  return (
    <Container>
      <Title>PREFACE</Title>
      <SubContainer>
        <ReLoginModal />
        <FormTitle Icon={HiOutlineUser}>로그인</FormTitle>
        <Form onSubmit={handleSubmit}>
          <Input value={email} onChange={handleEmailChange} type="text" placeholder="아이디를 입력하세요" />
          <Input value={password} onChange={handlePasswordChange} type="password" placeholder="비밀번호를 입력하세요" />
          <Button type="submit" Icon={HiLogin} isValid={isFormValid}>
            로그인
          </Button>
        </Form>
      </SubContainer>
    </Container>
  );
}

export default Signin;

const Container = styled.div`
  ${flexBox('column')}
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.GRAY_BG};
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.NAVY};
  margin-bottom: 80px;
`;

const SubContainer = styled.div`
  position: relative;
  width: 400px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px ${({ theme }) => theme.GRAY_DARK};
`;

const Form = styled.form`
  ${flexBox('column', 'space-between')}
  width: 100%;
  height: 230px;
  padding: 30px 20px;
`;
