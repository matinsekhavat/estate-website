"use client";
import React from "react";
import styles from "./DashboardCard.module.css";
import Card from "./Card";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
function DashboardCard({ profile }) {
  function editHandler() {}
  function deleteHandler() {}
  return (
    <div className={styles.container}>
      <Card profile={profile} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
