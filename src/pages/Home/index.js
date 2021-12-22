import React from "react";
import { Trans } from "react-i18next";

function HomePage(props) {
  return (
    <div className="container">
      <h1>
        <Trans i18nKey="welcomeLabel" />
      </h1>
    </div>
  );
}

export default HomePage;
