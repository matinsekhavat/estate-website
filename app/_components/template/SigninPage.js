"use client";
import { useState } from "react";
import styles from "./SignupPage.module.css";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
import { signIn } from "next-auth/react";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  async function signinHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!email.trim() || !password.trim()) {
        toast.error("تمامی فیلد هارو لطفا پر کنید.");
        setIsLoading(false);

        return null;
      }
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      setIsLoading(false);
      if (res.error) {
        toast.error(res.error);
        // router.push("/signin");
      } else {
        router.push("/");
        toast.success("خوش آمدید");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  return (
    <div className={styles.form}>
      <h4>فرم ورود</h4>
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
        {!isLoading && (
          <button type="submit" onClick={signinHandler}>
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
        اکانت ندارید؟
        <Link href="/signup">ثبت نام</Link>
      </p>
    </div>
  );
}

export default SigninPage;
