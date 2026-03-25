import { AddCourseSS } from "actions/AddCourseAction";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function AddCourses() {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.authReducer);
    // const { addNewCourse, addDts } = useSelector((state) => state.AddCourse);

    const [newCourse, setNewCourse] = useState({
        title: "",
        description: "",
        rating: 0,
        thumbnail: {},
        categoryId: "",
        creatorUsername: userInfo.username,
        price: 0,
    });
    const handleChangeAddNewCourse = (e) => {
        if (e.target.name === "thumbnail") {
            setNewCourse({ ...newCourse, thumbnail: e.target.files[0] });
        } else {
            setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
        }
    };
    const handleAddNewCourse = (e) => {
        e.preventDefault();
        const form_data = new FormData();
        for (let key in newCourse) {
            form_data.append(key, newCourse[key]);
        }
        dispatch(AddCourseSS(form_data));
    };

    return (
        <div className="form-adds">
            <form>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" className="form-control" name="title" onChange={handleChangeAddNewCourse} placeholder="Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text" className="form-control" name="description" onChange={handleChangeAddNewCourse} placeholder="Description" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Rating</label>
                    <input type="number" className="form-control" name="rating" onChange={handleChangeAddNewCourse} placeholder="Rating" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input type="number" className="form-control" name="price" onChange={handleChangeAddNewCourse} placeholder="Price" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Thumbnail</label>
                    <input type="file" className="form-control" name="thumbnail" onChange={handleChangeAddNewCourse} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Category ID</label>
                    <input
                        type="text"
                        className="form-control"
                        name="categoryId"
                        onChange={handleChangeAddNewCourse}
                        placeholder="Category ID"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Creator</label>
                    <input
                        type="text"
                        className="form-control"
                        name="creatorUsername"
                        disabled
                        value={newCourse.creatorUsername}
                        placeholder="Creator"
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleAddNewCourse}>
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddCourses;
