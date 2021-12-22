import React from "react";

import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import { useTranslation, Trans } from "react-i18next";

import { languages } from "../../i18n";
import { useAuth } from "../../context/auth";
import FormInput from "../../components/atoms/FormInput";
import LangSelect from "../../components/atoms/LangSelect";

function LoginPage(props) {
  const { state, login } = useAuth();
  const { t, i18n } = useTranslation();

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      login(values);
    }
  });

  if (state.isAuth) return <Redirect to="/" />;

  return (
    <div className="container">
      <form className="card p-4" onSubmit={handleSubmit}>
        <h4>
          <Trans i18nKey="loginLabel" />
        </h4>
        <FormInput
          label={t("emailLabel")}
          name="email"
          type="email"
          value={values.email}
          placeholder={t("emailPlaceholder")}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          label={t("passwordLabel")}
          name="password"
          value={values.password}
          placeholder={t("passwordPlaceholder")}
          handleChange={handleChange}
        />
        <button type="submit" className="mt-3 btn btn-primary">
          <Trans i18nKey="loginLabel" />
        </button>
      </form>
      <div className="mt-4">
        <LangSelect
          options={languages}
          selected={i18n.language}
          handleClick={(lang) => {
            console.log(lang);
            i18n.changeLanguage(lang);
          }}
        />
      </div>
    </div>
  );
}

export default LoginPage;
