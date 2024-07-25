"use client";
import styles from "@/app/_components/template/AddProfilePage.module.css";
import TextInput from "../module/TextInput";
import { useState } from "react";
import RadioList from "../module/RadioList";
import TextList from "../module/TextList";
import CustomDate from "../module/CustomDate";
import toast from "react-hot-toast";

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

  async function submitHandler() {
    try {
      const res = await fetch("/api/profile", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(profile),
      });
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Profile added successfully");
      }
    } catch (error) {
      console.error("Error submitting profile:", error);
    }
  }

  return (
    <div>
      <TextInput
        isTextArea={false}
        title="عنوان آگهی"
        profile={profile}
        setProfile={setProfile}
        name="title"
      />
      <TextInput
        isTextArea={true}
        title="توضیحات"
        profile={profile}
        setProfile={setProfile}
        name="description"
      />
      <TextInput
        title="آدرس"
        profile={profile}
        setProfile={setProfile}
        name="location"
      />
      <TextInput
        title="شماره تماس "
        profile={profile}
        setProfile={setProfile}
        name="phone"
      />
      <TextInput
        title="(تومان)قیمت"
        profile={profile}
        setProfile={setProfile}
        name="price"
      />
      <TextInput
        title="بنگاه"
        profile={profile}
        setProfile={setProfile}
        name="realState"
      />
      <RadioList profile={profile} setProfile={setProfile} />
      <TextList
        profile={profile}
        setProfile={setProfile}
        type="amenities"
        title="امکانات رفاهی"
      />{" "}
      <TextList
        profile={profile}
        setProfile={setProfile}
        type="rules"
        title="قوانین"
      />
      <CustomDate profile={profile} setProfile={setProfile} />
      <div>
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      </div>
    </div>
  );
}

export default AddProfilePage;
