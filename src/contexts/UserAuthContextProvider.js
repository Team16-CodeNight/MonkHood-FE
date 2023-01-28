import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  deleteUser,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import db, { auth } from "../firebase/firebase-config";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { createUser } from "../Util/DBUtil";
import apiCalendar from "../GoogleCalender/google-config";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [userUniqueId, setUserUniqueID] = useState(null);

  const getAndSetUserData = (email) => {
    const userQuery = query(
      collection(db, "users"),
      where("email", "==", email)
    );
    onSnapshot(userQuery, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setUserData(doc.data());
        setUserUniqueID(doc.id);
      });
    });
  };

  const handleGoogleCalenderSignUp = (name) => {
    if (name === "sign-in") {
      apiCalendar.handleAuthClick();
    } else if (name === "sign-out") {
      apiCalendar.handleSignoutClick();
    }
  };

  useEffect(() => {
    if (user !== null) {
      // console.log("user data:");
      // console.log(user);
      user.providerData.forEach((profile) => {
        localStorage.setItem("user", JSON.stringify(user));
        const checkUserPresentInDB = async () => {
          // check if user is present in database
          const q = query(
            collection(db, "users"),
            where("email", "==", profile.email)
          );
          await getDocs(q)
            .then((querySnapshot) => {
              let flag = false;
              let currentUserData = null;
              let currentUserUniqueId;
              querySnapshot.forEach((doc) => {
                flag = true;
                currentUserData = doc.data();
                currentUserUniqueId = doc.id;
              });
              if (
                flag === false ||
                (currentUserData !== null &&
                  currentUserData !== undefined &&
                  flag === true &&
                  currentUserData.isDeleted === true)
              ) {
                // if not then insert current user into database
                let tempLastUsedNumber = 0;

                if (
                  currentUserData !== null &&
                  currentUserData !== undefined &&
                  flag === true &&
                  currentUserData.isDeleted === true
                )
                  tempLastUsedNumber = currentUserData.lastUsedNumber + 1;

                let input = {
                  profilePic: profile.photoURL,
                  userName: profile.email
                    .match(/^([^@]*)@/)[1]
                    .replaceAll(".", ""),
                  name:
                    profile.displayName === null
                      ? profile.email.match(/^([^@]*)@/)[1].replaceAll(".", "")
                      : profile.displayName,
                  gender: "",
                  birthday: "",
                  email: profile.email,
                  role: "",
                  experience: "",
                  aboutMe: "",
                  joined: serverTimestamp(),
                  signUpWith: "google",
                  keywords: [],
                  isDeleted: false,
                  location: "",
                  tasks: [],
                };
                createUser(input).then(() => {
                  getAndSetUserData(profile.email);
                });
              } else {
                // if yes then set user UniqueId and Data
                getAndSetUserData(profile.email);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        };
        checkUserPresentInDB();
      });
    }
  }, [user]);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    googleAuthProvider.addScope(
      "https://www.googleapis.com/auth/calendar.readonly"
    );
    return signInWithPopup(auth, googleAuthProvider);
  }

  function logOut() {
    return signOut(auth);
  }

  function forgetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function deleteCurrentUser(email) {
    return deleteUser(email);
  }

  function verifyEmail() {
    return sendEmailVerification(auth.currentUser);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        signUp,
        user,
        logIn,
        logOut,
        deleteCurrentUser,
        googleSignIn,
        forgetPassword,
        userData,
        userUniqueId,
        verifyEmail,
        apiCalendar,
        handleGoogleCalenderSignUp,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
