import { wrapper } from '@store/index';
import SigninView from '@components/Signin';

function Signin() {
  return <SigninView />;
}

export default Signin;

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const { user } = store.getState();
  if (!user.accessToken)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };

  return { props: {} };
});
