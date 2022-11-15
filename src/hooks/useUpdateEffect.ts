import { useEffect, useRef } from 'react';

const useUpdateEffect = (func: () => void, deps: unknown[]) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useUpdateEffect;
