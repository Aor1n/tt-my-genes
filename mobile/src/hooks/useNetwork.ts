import ky, {HTTPError, type Options, type SearchParamsOption} from 'ky';
import {Expense} from 'forms/expense/useExpenseForm.ts';
import {notify} from 'utils/notify.ts';

const apiUrl = 'http://localhost:3000';

enum PATH {
  EXPENSES = 'expenses',
}

const useNetwork = () => {
  const request = async <TReturn>({
    path,
    ...options
  }: {
    path: string;
    method?: Options['method'];
  } & Options): Promise<TReturn> => {
    try {
      const response: TReturn = await ky(`${apiUrl}/${path}/`, options).json();
      return response;
    } catch (e) {
      const error = e as HTTPError;
      notify({
        type: 'error',
        description: error.message,
      });

      throw new Error();
    }
  };

  const getExpenses = async <TReturn>(searchParams: SearchParamsOption) =>
    await request<TReturn>({
      path: PATH.EXPENSES,
      searchParams,
    });

  const createExpense = async (body: Expense) => {
    await request({
      path: PATH.EXPENSES,
      method: 'post',
      json: body,
    });
  };

  const editExpense = async (body: Expense) => {
    await request({
      path: `${PATH.EXPENSES}/${body.id}`,
      method: 'put',
      json: body,
    });
  };

  const deleteExpense = async (id: Expense['id']) => {
    await request({
      path: `${PATH.EXPENSES}/${id}`,
      method: 'delete',
    });
  };

  return {
    getExpenses,
    createExpense,
    editExpense,
    deleteExpense,
  };
};

export default useNetwork;
