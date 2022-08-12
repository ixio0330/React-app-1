import { AxiosError } from "axios";
import { useEffect, useReducer } from "react";

export type UseAsyncState<D> = {
  loading: boolean;
  data: D | null;
  error: AxiosError | null;
}

type UseAsyncAction<D> = {
  type: 'loading' | 'success' | 'error';
  data?: D | null;
  error?: AxiosError | null;
}

function reducer<D>(
  state: UseAsyncState<D>,
  action: UseAsyncAction<D>): UseAsyncState<D>
{
  switch (action.type) {
    case "loading":
      return {
        loading: true,
        data: null,
        error: null,
      } as UseAsyncState<D>
    case "success":
      return {
        loading: false,
        data: action.data,
        error: null,
      } as UseAsyncState<D>
    case "error":
      return {
        loading: false,
        data: null,
        error: action.error
      } as UseAsyncState<D>
    default:
      throw new Error(`Undefined action type: ${action.type}`)
  }
}

type PromiseFn<D> = (...args: any) => Promise<D>;

export default function useAsync<D>(
  promise: PromiseFn<D>,
  deps?: any[],
  skip?: boolean)
{
  const initalState: UseAsyncState<D> = {
    loading: false,
    data: null,
    error: null,
  }
  const [ state, dispatch ] = useReducer<<R>(state: UseAsyncState<D>, action: UseAsyncAction<D>) => UseAsyncState<D>>(reducer, initalState);

  const fetch = async () => {
    dispatch({ type: 'loading' });
    try {
      const data = await promise();
      dispatch({ type: 'success', data });
    } catch (error) {
      dispatch({ type: 'error', error: error as AxiosError });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetch();
  }, deps || []);
  
  return {
    state,
    fetch,
  };
}