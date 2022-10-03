import * as actions from "./actionTypes";
export const bugAdded = (description) => ({
  type: actions.BUGG_ADDED,
  payload: {
    description: description,
  },
});

export const bugRemoved = (id) => ({
  type: actions.BUGG_REMOVED,
  payload: {
    id: id,
  },
});

export const bugResolved = (id) => ({
  type: actions.BUGG_RESOLVED,
  payload: {
    id: id,
  },
});
