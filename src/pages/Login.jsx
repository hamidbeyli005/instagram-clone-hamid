import React from "react";
import Button from "components/Button";
import Input from "components/Input";
import { useEffect, useRef, useState } from "react";
import styles from "../scss/s.module.scss";
import { GrFacebook } from "react-icons/gr";
import { useLocation, Link, Navigate } from "react-router-dom";
import { login } from "firabase.js";
import { LoginSchema } from "validation";

import { Formik, Form } from "formik";
import Separator from "components/Separator";
import { useSelector } from "react-redux";
import Loader from "components/Loader";
import { Helmet } from "react-helmet";

function Login() {
  const [show, setShow] = useState(true);
  const location = useLocation();
  const [wait, setWait] = useState(false);
  const ref = useRef();
  const user = useSelector((state) => state.auth.user);

  const images = [
    "./images/login/screenshoot1.png",
    "./images/login/screenshoot2.png",
    "./images/login/screenshoot3.png",
    "./images/login/screenshoot4.png",
  ];

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
  if (user) {
    return <Navigate to={location.state?.return_url || "/"} replace={true} />;
  }

  if (wait) {
    return <Loader />;
  }

  const handleSubmit = async (values) => {
    setWait(!wait);
    await login(values.username, values.password);
  };

  return (
    <div className={styles.login}>
      <Helmet>
        <title>Login • Instagram</title>
      </Helmet>
      <div className={styles.fade} ref={ref}>
        {images.map((image, index) => (
          <img key={index} style={{ opacity: "0" }} src={image} alt="" />
        ))}
      </div>
      <div className={styles.right}>
        <div className={styles.loginForm}>
            <img src="./images/login/logo.png" alt="" />

          <Formik
            validationSchema={LoginSchema}
            initialValues={{ username: "", password: "" }}
            onSubmit={handleSubmit}
          >
            {({ values, isValid, dirty }) => (
              <Form>
                <Input
                  type="text"
                  name="username"
                  value={values.username}
                  label=" Telefon numarası, kullanıcı adı veya e-posta"
                ></Input>

                <Input
                  value={values.password}
                  type={show ? "password" : "text"}
                  label="Şifre"
                  show={show ? "Hide" : "Show"}
                  setShow={() => setShow(!show)}
                  name="password"
                ></Input>

                <Button type="submit" disabled={!dirty || !isValid}>
                  {" "}
                  Giriş Yap
                </Button>

                <Separator label="YA DA"></Separator>

                <div className={styles.facebook}>
                  <GrFacebook color="#385185"></GrFacebook>
                  <span> Facebook ile Giriş Yap</span>
                </div>
                <div>
                  <a href="/">Şifreni mi unuttun?</a>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className={styles.signUp}>
          <p>
            Hesabın yok mu? <Link to="/register">Kaydol</Link>
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
