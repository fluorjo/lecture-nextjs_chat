import React from "react";
import getCurrentUser from "../actions/getCurrentUser";

const UserPage = async () => {
  const userData = await getCurrentUser();
  console.log(userData);
  return <div>UserPage</div>;
};

export default UserPage;
