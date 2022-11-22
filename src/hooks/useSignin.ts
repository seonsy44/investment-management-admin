import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import AuthService from '@services/AuthService';
import CookieToken from '@repositories/CookieTokenRepository';
import { AuthResponse } from '@type/auth';
import { showModal } from '@store/alertModalSlice';

const ERROR_MSG = {
  userNotFound: '가입되지 않은 계정입니다.',
  incorretPassword: '비밀번호가 올바르지 않습니다.',
};

const SERVER_ERROR_MSG = {
  userNotFound: 'Cannot find user',
  incorretPassword: 'Incorrect password',
};

const handleError = (data: AuthResponse | string) => {
  if (data === SERVER_ERROR_MSG.userNotFound) throw new Error(ERROR_MSG.userNotFound);
  if (data === SERVER_ERROR_MSG.incorretPassword) throw new Error(ERROR_MSG.incorretPassword);
};

function useSignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const { mutate } = useMutation((data: { email: string; password: string }) => AuthService.signin(data), {
    onSuccess: (data) => {
      handleError(data);

      CookieToken.set(data.accessToken);
      router.replace('/');
    },
    onError: (error: Error) => {
      dispatch(showModal(error.message));
    },
  });

  const isEmailValid = !!email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const isPasswordValid = password.length > 4;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return { email, password, isFormValid, handleEmailChange, handlePasswordChange, handleSubmit };
}

export default useSignin;
