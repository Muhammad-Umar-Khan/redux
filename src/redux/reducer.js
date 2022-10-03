import * as actions from "./actionTypes";
let bugID = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUGG_ADDED:
      return [
        ...state,
        {
          id: ++bugID,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUGG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUGG_RESOLVED:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }
}
