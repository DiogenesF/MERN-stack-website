import {
  GET_PORTIFOLIOS,
  PORTIFOLIO_ERROR,
  CREATE_PORTIFOLIO,
  DELETE_PORTIFOLIO,
  GET_PORTIFOLIO,
  LOADING_PORTIFOLIO,
} from "../actions/types";

const initialState = {
  portifolios: [],
  loading: true,
  error: {},
  portifolio: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOADING_PORTIFOLIO:
      return { ...state, loading: true };
    case GET_PORTIFOLIOS:
      return { ...state, portifolios: payload, loading: false };
    case GET_PORTIFOLIO:
      return { ...state, portifolio: payload, loading: false };
    case PORTIFOLIO_ERROR:
      return { ...state, loading: false, error: payload };
    case CREATE_PORTIFOLIO:
      return { ...state, portifolios: [...state.portifolios, payload] };
    case DELETE_PORTIFOLIO:
      return {
        ...state,
        portifolios: state.portifolios.filter((each) => each._id !== payload),
      };
    default:
      return { ...state };
  }
}
