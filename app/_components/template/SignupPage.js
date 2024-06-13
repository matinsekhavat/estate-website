"use client";
import { useState } from "react";
import styles from "./SignupPage.module.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form action="">
        <label> ایمیل</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <label> رمز عبور</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <label> تکرار رمز عبور</label>
        <input
          type="text"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SignupPage;
