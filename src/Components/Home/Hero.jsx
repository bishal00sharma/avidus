import React from "react";
import "./Home.css"
export default function Hero({ children, hero="defaultHero" }) {
    return <header className={hero}>{children}</header>;
  }
  