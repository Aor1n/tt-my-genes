import ky, {type Options, type SearchParamsOption} from 'ky';

const apiUrl = 'http://localhost:3000';

enum PATH {
  EXPENSES = 'expenses',
}

const useNetwork = () => {
  const request = async <TReturn>({
    path,
    ...options
  }: {path: PATH} & Options): Promise<TReturn> =>
    await ky(`${apiUrl}/${path}`, options).json();

  const getExpenses = async <TReturn>(searchParams: SearchParamsOption) =>
    await request<TReturn>({
      path: PATH.EXPENSES,
      searchParams,
    });

  return {
    getExpenses,
  };
};

export default useNetwork;
