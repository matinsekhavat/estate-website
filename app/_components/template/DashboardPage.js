import styles from "./DashboardPage.module.css";

function DashboardPage({ timeStamps }) {
  console.log(timeStamps);

  return (
    <div className={styles.cotainer}>
      <h3>سلام👋🏻</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند.</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت:</p>
        <span>{new Date(timeStamps).toLocaleDateString("fa")}</span>
      </div>
    </div>
  );
}

export default DashboardPage;
