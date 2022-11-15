import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import AuthService from '@services/AuthService';
import LocalToken from '@repositories/LocalTokenRepository';
import { login } from '@store/userSlice';
import CookieToken from '@repositories/CookieTokenRepository';

function useSignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const { mutate } = useMutation((data: { email: string; password: string }) => AuthService.signin(data), {
    onSuccess: (data) => {
      LocalToken.save(data.accessToken);
      CookieToken.set();
      dispatch(login(data));
      router.replace('/');
    },
  });

  const isEmailValid = !!email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const isPasswordValid = password.length > 0;
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
