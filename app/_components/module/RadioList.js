"use client";
import styles from "./RadioList.module.css";
const RadioArray = [
  { title: "ویلا", value: "villa" },
  { title: "آپارتمان", value: "aparatment" },
  { title: "مغازه", value: "store" },
  { title: "دفتر", value: "office" },
];

function RadioList({ profile, setProfile }) {
  const { category } = profile;
  const handleUpdateProfile = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  return (
    <div className={styles.container}>
      <p>دسته بندی ها</p>
      <div className={styles.main}>
        {RadioArray.map((item) => {
          return (
            <div key={crypto.randomUUID()}>
              <label htmlFor={item.value}>{item.title}</label>
              <input
                type="radio"
                name="category"
                id={item.value}
                value={item.value}
                checked={category === item.value}
                onChange={handleUpdateProfile}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RadioList;
