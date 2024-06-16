import styles from "./TextList.module.css";

function TextList({ title, type, profile, setProfile }) {
  const list = profile[type] || [];
  function increaseOptionsListHandler() {
    setProfile({ ...profile, [type]: [...profile[type], ""] });
  }

  function assignOptionsListHandler(e, index) {
    const { value } = e.target;
    let currentArray = [...profile[type]];
    currentArray[index] = value;
    setProfile({ ...profile, [type]: currentArray });
  }
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {list.map((item, i) => (
        <div className={styles.card} key={i}>
          <input
            type="text"
            onChange={(e) => assignOptionsListHandler(e, i)}
            value={list[i]}
          />
        </div>
      ))}
      <button onClick={increaseOptionsListHandler}>افزودن امکانات</button>
    </div>
  );
}

export default TextList;
