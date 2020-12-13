import createDataContext from "./createDataContext";
import { db } from "../firebase/firebaseConfig";

const authReducer = (state, action) => {
    switch (action.type) {
        case "editprofile":
            return {...state, username: action.NewUsername}
    
        default:
            return action.userData;
    }
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

const editprofile = (dispatch) => {
  return async ({ Email, NewUsername }) => {
    await db
      .collection("UsersData")
      .doc(Email)
      .set({ username: NewUsername }, { merge: true });
    await dispatch({type: "editprofile", NewUsername});
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow sign out!!!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, editprofile },
  { username: "", age: 1, email: "", height: 1, weight: 1, monthsarray:[], bmiarray:[] }
);
