import { useRouter } from 'next/router';

import CookieToken from '@repositories/CookieTokenRepository';
import { useDispatch } from 'react-redux';
import { showModal } from '@store/reLoginModalSlice';

function useExpiredToken(isExpired: boolean | undefined) {
  const router = useRouter();
  const dispatch = useDispatch();

  if (isExpired) {
    CookieToken.remove();
    router.push('/signin');
    dispatch(showModal());
  }
}

export default useExpiredToken;
