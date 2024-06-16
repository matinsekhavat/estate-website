"use client";
import styles from "@/app/_components/template/AddProfilePage.module.css";
function AddProfilePage() {
  const [profile, setProfile] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  return <div>AddProfilePage</div>;
}

export default AddProfilePage;
