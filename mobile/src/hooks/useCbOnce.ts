import {useCallback} from 'react';

export function useCbOnce<T, U>(
  cb: (...args: T extends undefined ? [] : [T, ...T[]]) => U,
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(cb, []);
}
