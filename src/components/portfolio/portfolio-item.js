import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
  //has to tell the function its going to receive props

  const { id, description, thumb_image_url, logo } = props.item;
  return (
    <div>
      <img src={thumb_image_url} />
      <img src={logo} />
      <div>Description</div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}
