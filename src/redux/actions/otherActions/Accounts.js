import {
  OPERATE_ACCOUNTS_ERROR,
  OPERATE_ACCOUNTS_LOADING,
  OPERATE_ACCOUNTS_SUCCESS,
} from "@/redux/constants/otherActionTypes/Accounts";

export const operateAccountsLoading = (isLoading) => ({
  type: OPERATE_ACCOUNTS_LOADING,
  isLoading: isLoading,
});

export const operateAccountsSuccess = (isLoading) => ({
  type: OPERATE_ACCOUNTS_SUCCESS,
  isLoading: isLoading,
});

export const operateAccountsError = (isLoading) => ({
  type: OPERATE_ACCOUNTS_ERROR,
  isLoading: isLoading,
});
