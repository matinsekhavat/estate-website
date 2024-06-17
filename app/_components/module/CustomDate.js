import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function CustomDate({ profile, setProfile }) {
  function dateChangeHandler(date) {
    const userDate = new Date(date);
    setProfile({ ...profile, constructionDate: userDate });
  }
  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      value={profile.constructionDate}
      onChange={dateChangeHandler}
    />
  );
}
