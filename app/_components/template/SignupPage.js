"use client";
import { useState } from "react";
import styles from "./SignupPage.module.css";
import Link from "next/link";

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
        <button type="submit">ثبت نام</button>
      </form>
      <p>
        در املاک برنگی اکانت دارید؟
        <Link href="/signin">ورود</Link>
      </p>
    </div>
  );
}

export default SignupPage;
