import { Spinner } from "react-bootstrap";

import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner
        animation="border"
        role="status"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default Loader;
