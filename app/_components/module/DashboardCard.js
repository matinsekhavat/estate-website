import React from "react";
import styles from "./DashboardCard.module.css";
import Card from "./Card";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
function DashboardCard({ profile }) {
  return (
    <div className={styles.container}>
      <Card profile={profile} />
      <div className={styles.main}>
        <button>
          ویرایش
          <FiEdit />
        </button>
        <button>
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
