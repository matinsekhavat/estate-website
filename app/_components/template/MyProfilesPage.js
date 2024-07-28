import DashboardCard from "../module/DashboardCard";
import styles from "./MyProfilesPage.module.css";
function MyProfilesPage({ profiles }) {
  console.log(profiles);
  return (
    <div>
      {!profiles.length && <p className={styles.text}>هیچ آکهی وجود ندارد</p>}
      {profiles.map((profile) => (
        <DashboardCard key={profile._id} profile={profile} />
      ))}
    </div>
  );
}

export default MyProfilesPage;
