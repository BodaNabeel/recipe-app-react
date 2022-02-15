import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Fuck() {
  const location = useLocation();
  const params = useParams()
  console.log(location)
  console.log(params)
  return <div>Recipe {location.state}</div>;
}
