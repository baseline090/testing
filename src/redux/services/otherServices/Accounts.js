import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateAccountsError,
  operateAccountsLoading,
  operateAccountsSuccess,
} from "@/redux/actions/otherActions/Accounts";

export const createaccount = (body) => async (dispatch) => {
  dispatch(operateAccountsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  // const userid = getdata (storageKey.USERDATA.id)
  try {
    const response = await Service.post(url.CREATE_ACCOUNT, token, body);
    const message = response.message;
    if (response.code== 200) {
      dispatch(operateAccountsSuccess(false));
      console.log(response, "CREATE_ACCOUNT-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateAccountsError(false));
    return { message: error };
  }
};
export const getAccountlisting = (page,query) => async (dispatch) => {
  dispatch(operateAccountsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);

  try {
    const response = await Service.get(`${url.GET_ACCOUNT_LISTING}?page=${page + 1}&limit=10&search=${query} `,token);
    const message = response.message;
    if (response.code == 200) {
      dispatch(operateAccountsSuccess(false));
      console.log(response, "GET_ACCOUNT_LISTING-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateAccountsError(false));
    return { message: error };
  }
};
export const getAccountlistingall = (page,query) => async (dispatch) => {
  dispatch(operateAccountsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);

  try {
    const response = await Service.get(`${url.GET_ACCOUNT_LISTING_ALL}?page=${page + 1}&limit=10&search=${query} `,token);
    const message = response.message;
    if (response.code == 200) {
      dispatch(operateAccountsSuccess(false));
      console.log(response, "GET_ACCOUNT_LISTING_ALL-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateAccountsError(false));
    return { message: error };
  }
};

