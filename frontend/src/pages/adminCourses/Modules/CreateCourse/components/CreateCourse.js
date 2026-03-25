import DateFiled from "components/DatePicker";
import FileField from "components/FileField";
import Modal from "components/Modal";
import TextFileld from "components/TextField";
import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
function CreateCourse({ hdAddCourse }) {
  const { userInfo } = useSelector((state) => state.authReducer);
  const [data, setData] = useState({
    title: "",
    description: "",
    thumbnail: {},
    categoryId: "",
    price: 0,
    creatorUsername: userInfo.username,
  });
  const hdChange = (field) => {
    if (field.name === "thumbnail") {
      setData({ ...data, thumbnail: field.files[0] });
    } else {
      setData({ ...data, [field.name]: field.value });
    }
  };
  const hdSubmit = () => {
    const form_data = new FormData();
    for (let key in data) {
      form_data.append(key, data[key]);
    }
    hdAddCourse(form_data);
  };
  // console.log(data);
  return (
    <Modal title="Create Course" cb={hdSubmit}>
      <TextFileld
        fieldName="title"
        label="Title:"
        placehd="Enter course title"
        cb={hdChange}
      />
      <TextFileld
        fieldName="description"
        label="Description:"
        placehd="Enter description"
        cb={hdChange}
      />
      <TextFileld
        fieldName="price"
        label="Price:"
        placehd="Enter price"
        cb={hdChange}
      />
      <TextFileld
        fieldName="categoryId"
        label="Category ID:"
        placehd="Enter category ID"
        cb={hdChange}
      />
      <FileField fieldName="thumbnail" label="Thumbnail:" cb={hdChange} />
    </Modal>
  );
}

export default CreateCourse;
