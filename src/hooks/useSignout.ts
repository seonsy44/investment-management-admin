import { useRouter } from 'next/router';

import LocalToken from '@repositories/LocalTokenRepository';
import CookieToken from '@repositories/CookieTokenRepository';

function useSignout() {
  const router = useRouter();

  const handleSignout = () => {
    LocalToken.remove();
    CookieToken.remove();
    router.replace('/signin');
  };

  return handleSignout;
}

export default useSignout;
