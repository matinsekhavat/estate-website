"use client";

import { FiLogIn } from "react-icons/fi";
import styles from "./Header.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaUserAlt } from "react-icons/fa";
function Header() {
  const { data: session, status } = useSession();
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>{" "}
          <li>
            <Link href="/busy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>

      {!session ? (
        <div className={styles.login}>
          <Link href="/signin">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
