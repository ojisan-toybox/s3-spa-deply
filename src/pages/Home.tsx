import * as React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      this is home. <Link to="/about">About</Link>
    </div>
  );
};
