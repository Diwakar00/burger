import { produce } from "immer";

const ADD_INGREDIENTS = "ADD_INGREDIENTS";
const REMOVE_INGREDIENTS = "REMOVE_INGREDIENTS";

export const addIngredients = (ingredient) => {
  return { type: ADD_INGREDIENTS, payload: ingredient };
};

export const removeIngredients = (ingredient) => {
  return { type: REMOVE_INGREDIENTS, payload: ingredient };
};

const initialState = {
  ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 },
  totalPrice: 4,
};

const INGRIDENTS_PRICES = {
  meat: 1.3,
  cheese: 0.4,
  salad: 0.5,
  bacon: 0.7,
};
const reducer = (state = initialState, action) => {
  const copyObject = { ...state, ingredients: { ...state.ingredients } };
  switch (action.type) {
    case ADD_INGREDIENTS:
      copyObject.ingredients[action.payload] =
        copyObject.ingredients[action.payload] + 1;
      copyObject.totalPrice =
        copyObject.totalPrice + INGRIDENTS_PRICES[action.payload];
      return copyObject;
    case REMOVE_INGREDIENTS:
      copyObject.ingredients[action.payload] =
        copyObject.ingredients[action.payload] - 1;
      copyObject.totalPrice =
        copyObject.totalPrice - INGRIDENTS_PRICES[action.payload];
      // return copyObject;
      return produce(state, (newState) => {
        newState.ingredients[action.payload] =
          newState.ingredients[action.payload] - 1;
        newState.totalPrice =
          newState.totalPrice - INGRIDENTS_PRICES[action.payload];
      });
    default:
      return state;
  }
};

export default reducer;
