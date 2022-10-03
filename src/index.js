import store from "./redux/store";
import { bugAdded, bugRemoved, bugResolved } from "./redux/actionCreators";
const unsubscribe = store.subscribe(() => {
  console.log("Store changed:", store.getState());
});

store.dispatch(bugAdded("bug1 added"));

unsubscribe();

store.dispatch(bugAdded("bug2 added"));

store.dispatch(bugAdded("bug3 added"));

store.dispatch(bugRemoved(1));

store.dispatch(bugResolved(2));

console.log(store.getState());
