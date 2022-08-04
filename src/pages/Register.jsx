import React from "react";
import Button from "components/Button";
import Input from "components/Input";
import { useState } from "react";
import styles from "../scss/s.module.scss";
import { GrFacebook } from "react-icons/gr";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { register } from "firabase.js";
import { RegisterSchema } from "validation";
import { Formik, Form } from "formik";
import Separator from "components/Separator";
import Loader from "components/Loader";
import { Helmet } from "react-helmet";

function Login() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [wait, setWait] = useState(false);

  if (wait) {
    return <Loader />;
  }

  const handleSubmit = async (values) => {
    setWait(!wait);

    const response = await register(values);
    if (response) {
      navigate(location.state?.return_url || "/", {
        replace: true,
      });
    }
  };

  return (
    <div className={styles.login}>
      <Helmet>
        <title>Register • Instagram</title>
      </Helmet>
      <div className={styles.right}>
        <div className={styles.loginForm}>
          <img
            style={{ margin: " 36px 0 8px 0" }}
            src="./images/login/logo.png"
            alt=""
          />
          <h3
            style={{
              marginTop: "0",
              color: "#8e8e8e",
              fontSize: "17px",
              fontWeight: "600",
              padding: "0 40px",
            }}
          >
            Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.
          </h3>
          <Button>
            <GrFacebook size={16}></GrFacebook>
            <span> Facebook ile Giriş Yap</span>
          </Button>

          <Separator label="YA DA"></Separator>

          <Formik
            validationSchema={RegisterSchema}
            initialValues={{
              email: "",
              fullname: "",
              username: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ values, isValid, dirty }) => (
              <Form>
                <Input
                  type="text"
                  name="email"
                  value={values.email}
                  label=" Cep Telefonu Numarası veya E-posta"
                ></Input>
                <Input
                  type="text"
                  name="fullname"
                  value={values.fullname}
                  label=" Adı Soyadı"
                ></Input>
                <Input
                  type="text"
                  name="username"
                  value={values.username}
                  label="Kullanıcı adı"
                ></Input>
                <Input
                  value={values.password}
                  type={show ? "password" : "text"}
                  label="Şifre"
                  show={show ? "Hide" : "Show"}
                  setShow={() => setShow(!show)}
                  name="password"
                ></Input>

                <p
                  style={{
                    fontSize: "12px",
                    color: "#8e8e8e",
                    margin: "18px 40px",
                  }}
                >
                  Hizmetimizi kullanan kişiler senin iletişim bilgilerini
                  Instagram'a yüklemiş olabilir.&nbsp;
                  <a
                    style={{
                      fontSize: "12px",
                      color: "#8e8e8e",
                      fontWeight: "600",
                    }}
                    href="https://www.facebook.com/help/instagram/261704639352628"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Daha Fazla Bilgi Al
                  </a>
                  <br />
                  <br />
                  Kaydolarak, &nbsp;
                  <a
                    style={{
                      fontSize: "12px",
                      color: "#8e8e8e",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                    href="https://help.instagram.com/581066165581870"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Koşullarımızı
                  </a>
                  , &nbsp;
                  <a
                    style={{
                      fontSize: "12px",
                      color: "#8e8e8e",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                    href="https://www.facebook.com/privacy/policy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Gizlilik İlkemizi
                  </a>
                  &nbsp; ve &nbsp;
                  <br />
                  <a
                    style={{
                      fontSize: "12px",
                      color: "#8e8e8e",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                    href="https://www.instagram.com/legal/cookies/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Çerezler İlkemizi &nbsp;
                  </a>
                  kabul etmiş olursun.
                </p>

                <Button
                  style={{ marginBottom: "36px" }}
                  type="submit"
                  disabled={!dirty || !isValid}
                >
                  Kaydol
                </Button>
              </Form>
            )}
          </Formik>
        </div>

        <div className={styles.signUp}>
          <p>
            Hesabın var m? <Link to="/login">Giriş Yap</Link>
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
