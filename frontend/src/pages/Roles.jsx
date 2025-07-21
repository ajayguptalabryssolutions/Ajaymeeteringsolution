
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
import Header from "../components/header/Header";

const Roles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle("Roles"));
    dispatch(
      setBreadcrumbs([
        // { label: "Home", link: "/home" },  // Updated label for clarity
        { label: "Roles" },
      ])
    );
  }, []);
 
  return (
    <div className=" p-bg-blue-200/10 min-h-screen">
      <Header />
      <div className="flex item-center mt-[25%] justify-center">
      Roles and Permissions
      </div>
      {/* Page content goes here */}
    </div>
  );
};

export default Roles;

