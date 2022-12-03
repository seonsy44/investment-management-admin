import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useHeaderTitleDispatch from './useHeaderTitleDispatch';
import useUserURL from './useUserURL';

function useUsers() {
  const userURL = useUserURL();
  const router = useRouter();
  const dispatchTitle = useHeaderTitleDispatch();

  useEffect(() => {
    router.push(userURL);
  }, [userURL]);

  useEffect(() => {
    dispatchTitle('사용자 목록');
  }, []);
}

export default useUsers;
