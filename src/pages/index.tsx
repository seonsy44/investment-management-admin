import { useEffect } from 'react';

import useHeaderTitleDispatch from '@hooks/useHeaderTitleDispatch';

export default function Dashboard() {
  const dispatchTitle = useHeaderTitleDispatch();

  useEffect(() => {
    dispatchTitle('대시보드');
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
