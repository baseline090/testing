
import {
  OPERATE_ACCOUNTS_ERROR,
  OPERATE_ACCOUNTS_LOADING,
  OPERATE_ACCOUNTS_SUCCESS,
} from "../constants/otherActionTypes/Accounts";
import { OPERATE_AGENCY_ERROR, OPERATE_AGENCY_LOADING, OPERATE_AGENCY_SUCCESS } from "../constants/otherActionTypes/Agency";
import { OPERATE_LAB_ERROR, OPERATE_LAB_LOADING, OPERATE_LAB_SUCCESS } from "../constants/otherActionTypes/Lab";


const initialState = {
  isLoading: false,
  classData: null,
};

export const otherReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case OPERATE_ACCOUNTS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_ACCOUNTS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_ACCOUNTS_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
      case OPERATE_LAB_LOADING:
        return {
          ...state,
          isLoading: action.isLoading,
        };
  
      case OPERATE_LAB_SUCCESS:
        return {
          ...state,
          isLoading: action.isLoading,
        };
  
      case OPERATE_LAB_ERROR:
        return {
          ...state,
          isLoading: action.isLoading,
        };
        case OPERATE_AGENCY_LOADING:
          return {
            ...state,
            isLoading: action.isLoading,
          };
    
        case OPERATE_AGENCY_SUCCESS:
          return {
            ...state,
            isLoading: action.isLoading,
          };
    
        case OPERATE_AGENCY_ERROR:
          return {
            ...state,
            isLoading: action.isLoading,
          };
    default:
      return state;
  }
};
