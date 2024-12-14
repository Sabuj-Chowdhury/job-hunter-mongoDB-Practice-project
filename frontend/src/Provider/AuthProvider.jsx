import PropTypes from "prop-types";
import AuthContext from "../Context/AuthContext";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  //   console.log(children);

  //   initially user will be null
  const [user, setUser] = useState(null);

  // initially loading will be true until user is set
  const [loading, setLoading] = useState(true);

  //  this provider is required for google signIN
  const provider = new GoogleAuthProvider();

  // google sign in
  const createGoogleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   email/password signIn
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const logout = () => {
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("current user is ==>", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, loading, createGoogleLogIn, createUser, logout };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

// PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures `children` is a React node and required
};

export default AuthProvider;
