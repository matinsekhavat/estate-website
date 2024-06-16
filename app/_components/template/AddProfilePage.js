"use client";
import styles from "@/app/_components/template/AddProfilePage.module.css";
import TextInput from "../module/TextInput";
import { useState } from "react";
import RadioList from "../module/RadioList";
import TextList from "../module/TextList";

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
      />
    </div>
  );
}

export default AddProfilePage;
