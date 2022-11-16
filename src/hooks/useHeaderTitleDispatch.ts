import { setTitle } from '@store/headerTitleSlice';
import { useDispatch } from 'react-redux';

function useHeaderTitleDispatch() {
  const dispatch = useDispatch();

  const dispatchTitle = (title: string) => {
    dispatch(setTitle(title));
  };

  return dispatchTitle;
}

export default useHeaderTitleDispatch;
