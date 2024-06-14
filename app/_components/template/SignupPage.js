"use client";
import { useState } from "react";
import styles from "./SignupPage.module.css";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  async function signupHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    if (password !== rePassword) {
      toast.error("تکرار رمز عبور شما برابر رمز اولیه نمیباشد");
      await new Promise((res) => setTimeout(res, 1000));
      setIsLoading(false);
      return null;
    }
    if (!email.trim() || !password.trim() || !rePassword.trim()) {
      toast.error("تمامی فیلد هارو لطفا پر کنید.");
      return null;
    }
    const res = await fetch("/api/auth/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setIsLoading(false);
    if (res.status === 201) {
      toast.success("حساب شما با موفقیت ایجاد شد");
      // router.push("/signin");
    } else if (res.status === 422) {
      toast.error("همچین کاربری قبلا در سایت ثبت نام کرده است");
    } else {
      // toast.error(data?.error);
    }
  }
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
        {!isLoading && (
          <button type="submit" onClick={signupHandler}>
            ثبت نام
          </button>
        )}
        {isLoading && (
          <ThreeDots
            color="#304ffe"
            height={45}
            ariaLabel="three-dots-loading"
            visible={isLoading}
            wrapperStyle={{ margin: "auto" }}
          />
        )}
      </form>
      <p>
        در املاک برنگی اکانت دارید؟
        <Link href="/signin">ورود</Link>
      </p>
    </div>
  );
}

export default SignupPage;
