import React from "react";
import "./Login.css";
import { useContext } from "react";
import { appContext } from "../../context/AppContext";

function Login() {
  const { setIsAppVisible } = useContext(appContext);

  function buttonClicked() {
    setIsAppVisible((prev) => !prev);
  }

  return (
    <div className="body">
    <div className="login">
      <button onClick={buttonClicked} id="start">
        Hadi Başlayalım!
      </button>
      <p className="login-para">Bil Bakalım' a Hoşgeldiniz! 10 sorudan oluşan bu eğlenceli testte hem bilginizi sınayacak hem de keyifli vakit geçireceksiniz. Hazırsanız, başlayalım! </p>
    </div>
    </div>
  );
}

export default Login;
