import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { useUserAuth } from "../../contexts/UserAuthContextProvider";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import Loading from "../../Loader/Loading/Loading";
import "./SignUpModal.css";

function SignUpModal({
  open,
  closeDialog,
  closeOnOverlayClick,
  showCloseIcon,
}) {
  const [loadingForSignUp, setLoadingForSignUp] = useState(false);
  const [loadingForSignIn, setLoadingForSignIn] = useState(false);
  const navigate = useNavigate();

  const { googleSignIn, user } = useUserAuth();

  const [textForSignUp, setTextForSignUp] = useState(
    "Signing Up to Build</code>"
  );

  const [textForSignIn, setTextForSignIn] = useState(
    "Signing In to Build</code>"
  );

  const [errorForSignUp, setErrorForSignUp] = useState("");

  const [errorForSignIn, setErrorForSignIn] = useState("");

  const [option, setOption] = useState("Sign Up");

  const handleGoogleSignInForSignUp = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      setLoadingForSignUp(true);
      // navigate to home page
      setTimeout(() => {
        setLoadingForSignUp(false);
        // console.log("user is:");
        // console.log(user);
        //window.location.reload();
        navigate("/");
        closeDialog();
      }, 1000);
    } catch (errorForSignUp) {
      /**
       * if user closed the google signIn pop
       * then do nothing otherwise navigate to
       * errorForSignUp page
       */
      if (
        errorForSignUp.message ===
          "Firebase: Error (auth/popup-closed-by-user)." ||
        errorForSignUp.message ===
          "Firebase: Error (auth/cancelled-popup-request)."
      ) {
      } else {
        if (errorForSignUp !== null) alert(errorForSignUp.message);
        else {
          navigate("/error/Something Went Wrong ⚠️");
        }
      }
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      setLoadingForSignIn(true);
      // navigate to home page

      setLoadingForSignIn(false);
      //window.location.reload();
      navigate("/");
      closeDialog();
    } catch (errorForSignIn) {
      /**
       * if user closed the google signIn pop
       * then do nothing otherwise navigate to
       * errorForSignIn page
       */
      if (
        errorForSignIn.message ===
          "Firebase: Error (auth/popup-closed-by-user)." ||
        errorForSignIn.message ===
          "Firebase: Error (auth/cancelled-popup-request)."
      ) {
      } else {
        if (errorForSignIn !== null) alert(errorForSignIn.message);
        else navigate("/errorForSignIn");
      }
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        closeDialog();
      }}
      closeOnOverlayClick={closeOnOverlayClick}
      showCloseIcon={showCloseIcon}
    >
      <Loading loaded={!loadingForSignUp} text={textForSignUp} />
      <Loading loaded={!loadingForSignIn} text={textForSignIn} />
      {option === "Sign Up" ? (
        <div className="registration-form">
          <form>
            <div className="form-icon">
              <a href="/">
                <img
                  src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
                  alt="BuildCode"
                />
              </a>
            </div>
            <br />
            <span style={{ color: "red", fontStyle: "italic" }}>
              {errorForSignUp}
            </span>
            <div id="google-signin-btn">
              <div>
                <GoogleButton
                  type="dark"
                  onClick={handleGoogleSignInForSignUp}
                  label="Sign up with Google"
                />
              </div>
            </div>
            <br />
            <div style={{ textForSignUpAlign: "center", color: "gray" }}>
              <span>Already have an account?</span>{" "}
              <span id="signInlink" onClick={() => setOption("Sign In")}>
                Sign In
              </span>
            </div>
          </form>
        </div>
      ) : (
        <div className="registration-form">
          <form>
            <div className="form-icon">
              <a href="/">
                <img
                  src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
                  alt="BuildCode"
                />
              </a>
            </div>
            <br />
            <span style={{ color: "red", fontStyle: "italic" }}>
              {errorForSignIn}
            </span>
            <br />
            <div id="google-signin-btn">
              <div>
                <GoogleButton type="dark" onClick={handleGoogleSignIn} />
              </div>
            </div>
            <br />
            <div style={{ textAlign: "center", color: "gray" }}>
              <span>Don't have an account? </span>
              <span id="signInlink" onClick={() => setOption("Sign Up")}>
                Sign Up
              </span>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
}

export default SignUpModal;
