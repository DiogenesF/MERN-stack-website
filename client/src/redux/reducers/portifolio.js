import {
  GET_PORTIFOLIOS,
  PORTIFOLIO_ERROR,
  CREATE_PORTIFOLIO,
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
    case GET_PORTIFOLIOS:
      return { ...state, portifolios: payload, loading: false };
    case PORTIFOLIO_ERROR:
      return { ...state, loading: false, error: payload };
    case CREATE_PORTIFOLIO:
      return { ...state, portifolios: payload };
    default:
      return { ...state };
  }
}
