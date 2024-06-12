import { FiLogIn } from "react-icons/fi";
import styles from "./Header.module.css";
import Link from "next/link";
function Header() {
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
      <div className={styles.login}>
        <Link href="/signin">
          <FiLogIn />
          <span>ورود</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
