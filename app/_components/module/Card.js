import styles from "./Card.module.css";
function Card({ profile }) {
  const { category, location, price, title } = profile;
  return <div>{title}</div>;
}

export default Card;
