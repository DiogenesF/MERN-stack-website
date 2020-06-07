import {
  GET_CATEGORIAS,
  CREATE_CATEGORIA,
  CATEGORIA_ERROR,
} from "../actions/types";

const initialState = {
  categorias: [],
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIAS:
      return { ...state, categorias: payload };
    case CREATE_CATEGORIA:
      return { ...state, categorias: [...state.categorias, payload] };
    case CATEGORIA_ERROR:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
}
