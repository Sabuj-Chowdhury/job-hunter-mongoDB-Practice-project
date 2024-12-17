import PropTypes from "prop-types";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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

  //   email/password create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email/password sign in /login
  const emailPasswordLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      console.log("current user is ==>", currentUser?.email);

      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post(`${import.meta.env.VITE_url}/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }

      setLoading(false); //later need to put it in the right place
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const authInfo = {
    user,
    loading,

    createGoogleLogIn,
    createUser,
    logout,
    emailPasswordLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

// PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures `children` is a React node and required
};

export default AuthProvider;
