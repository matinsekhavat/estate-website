import { e2p, p2e } from "@/app/_utils/replaceNumber";
import styles from "./TextInput.module.css";
function TextInput({ title, name, profile, setProfile, isTextArea = false }) {
  const handleUpdateProfile = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: p2e(value) }));
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {isTextArea ? (
        <textarea
          type="text"
          name={name}
          value={e2p(profile[name])}
          onChange={handleUpdateProfile}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={e2p(profile[name])}
          onChange={handleUpdateProfile}
        />
      )}
    </div>
  );
}

export default TextInput;
