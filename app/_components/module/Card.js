import styles from "./Card.module.css";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiLeftArrow, BiLeftArrowAlt, BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { e2p, sp } from "@/app/_utils/replaceNumber";
import Link from "next/link";
function Card({ profile }) {
  const { category, location, price, title } = profile;
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان </span>
      <Link href="/">
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}

export default Card;
