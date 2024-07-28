import React from "react";
import styles from "./DashboardCard.module.css";
import Card from "./Card";
function DashboardCard({ profile }) {
  return (
    <div className={styles.container}>
      <Card profile={profile} />
    </div>
  );
}

export default DashboardCard;
