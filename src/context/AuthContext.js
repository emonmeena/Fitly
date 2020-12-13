import createDataContext from "./createDataContext";
import { db } from "../firebase/firebaseConfig";

const authReducer = (state, action) => {
  //   switch (action.type) {
  //     case "add_error":
  //       return { ...state, errorMessage: action.payload };
  //     default:
  //       return state;
  //   }
  return action.userData;
};

const signup = (dispatch) => {
  return ({ email, password }) => {};
};

const signin = (dispatch) => {
  return async ({ Email, Password }) => {
    await db
      .collection("UsersData")
      .doc(Email)
      .get()
      .then((doc) => {
        if (doc.exists) {
          var userData = doc.data();
          dispatch({ userData: userData });
        } else console.log("No user Exists");
      })
      .catch((err) => {
        console.log("Error getting the doc: ", err);
      });
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow sign out!!!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { username: "", age: 1, email: "", height: 1, weight: 1 }
);
