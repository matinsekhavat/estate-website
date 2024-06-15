"use client";
import { FiLogOut } from "react-icons/fi";
import styles from "./LogoutButton.module.css";
import { signOut } from "next-auth/react";
function LogoutButton() {
  return (
    <button className={styles.button} onClick={signOut}>
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
