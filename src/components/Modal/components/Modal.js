import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { Fragment, useCallback, useState } from "react";
import "../assets/Modal.scss";
function Modal({ children, title, cb }) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    console.log("Modal");
    setVisible(true);
  };

  const hdSubmit = useCallback(() => {
    cb();
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, [cb]);

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Fragment>
      <button className="button-outline" onClick={showModal}>
        <PlusOutlined />
      </button>
      {visible ? (
        <div className="modal-component">
          <div className="body">
            <h2>{title}</h2>
            <div className="content">{children}</div>
            <div className="btns">
              <Button
                type="primary"
                style={{ marginRight: "10px" }}
                size="middle"
                onClick={hdSubmit}
              >
                Submit
              </Button>
              <Button type="dashed" size="middle" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default Modal;
