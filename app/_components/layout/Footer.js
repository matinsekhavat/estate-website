import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.desc}>
        <h3>سامانه خرید و اجاره ملک</h3>
        <p>
          {" "}
          در این پلتفرم شما قادر به خرید فروش رهن . اجاره ملاک زیبای هستید با
          کمترین پورسانت و در این مجموعه کارمندان ما آماده کمک رسانی به شما
          میباشند
        </p>
      </div>
      <div>
        <ul>
          <li>تعرفه قانونی</li>
          <li>مشاوره سریع</li>
          <li>قیمت مناسب</li>
          <li>کادر مجرب</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
