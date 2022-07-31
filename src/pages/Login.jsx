import React from "react";
import Button from "components/Button";
import Input from "components/Input";
import { useEffect, useRef, useState } from "react";
import styles from "../scss/s.module.scss";
import { GrFacebook } from "react-icons/gr";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "firabase.js";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const disabled = username && password;
  const ref = useRef();

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const slider = () => {
      images[current].style.opacity = "1";
      images[(current > 0 ? current : total) - 1].style.opacity = "0";
      current = current === total - 1 ? 0 : current + 1;
    };
    slider();
    const interval = setInterval(slider, 4500);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);

    navigate(location.state?.return_url || "/", {
      replace: true,
    });
  };

  return (
    <div className={styles.login}>
      <div className={styles.fade} ref={ref}>
        <img
          style={{ opacity: "0" }}
          src="./images/login/screenshoot1.png"
          alt=""
        />
        <img
          style={{ opacity: "0" }}
          src="./images/login/screenshoot2.png"
          alt=""
        />
        <img
          style={{ opacity: "0" }}
          src="./images/login/screenshoot3.png"
          alt=""
        />
        <img
          style={{ opacity: "0" }}
          src="./images/login/screenshoot4.png"
          alt=""
        />
      </div>
      <div className={styles.right}>
        <div className={styles.loginForm}>
          <a href="/">
            <img src="./images/login/logo.png" alt="" />
          </a>

          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              value={username}
              label=" Telefon numarası, kullanıcı adı veya e-posta"
              onChange={(e) => setUsername(e.target.value)}
            ></Input>

            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={show ? "password" : "text"}
              label="Şifre"
              show={show ? "Hide" : "Show"}
              setShow={() => setShow(!show)}
              name="password"
            ></Input>

            <Button disabled={!disabled} label="Giriş Yap"></Button>
            <div className={styles.or}>
              <div></div>
              <span>YA DA</span>
              <div></div>
            </div>
            <div className={styles.facebook}>
              <GrFacebook color="#385185"></GrFacebook>
              <span> Facebook ile Giriş Yap</span>
            </div>
            <div>
              <a href="/">Şifreni mi unuttun?</a>
            </div>
          </form>
        </div>

        <div className={styles.signUp}>
          <p>
            Hesabın yok mu? <a href="/">Kaydol</a>
          </p>
        </div>

        <div className={styles.download}>
          <div>
            <p>Uygulamayı indir.</p>
          </div>
          <div>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
            >
              <img src="./images/login/appStore.png" alt="" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9664A8E1-58ED-405D-A014-87E1E617DFD7%26utm_content%3Dlo%26utm_medium%3Dbadge"
            >
              <img src="./images/login/playStore.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
