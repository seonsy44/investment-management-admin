import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import LocalToken from '@repositories/LocalTokenRepository';
import { logout } from '@store/userSlice';
import CookieToken from '@repositories/CookieTokenRepository';

function useSignout() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignout = () => {
    LocalToken.remove();
    CookieToken.remove();
    dispatch(logout());
    router.replace('/signin');
  };

  return handleSignout;
}

export default useSignout;
