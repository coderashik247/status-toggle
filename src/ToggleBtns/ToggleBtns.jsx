import React from "react";
import Container from "../Container/Container";

const ToggleBtns = ({toggleStatus,setToggleStatus}) => {
  return (
    <>
      <Container>
        <div className="text-right mb-[50px]">
          <button
            className={`toggle-btns rounded-l-xl ${
              toggleStatus == "All" && "!text-white !bg-purple-500"
            }`}
            onClick={() => setToggleStatus("All")}
          >
            All
          </button>
          <button
            className={`toggle-btns ${
              toggleStatus == "Pending" && "!text-white !bg-purple-500"
            }`}
            onClick={() => setToggleStatus("Pending")}
          >
            Pending
          </button>
          <button
            className={`toggle-btns ${
              toggleStatus == "Submitted" && "!text-white !bg-purple-500"
            }`}
            onClick={() => setToggleStatus("Submitted")}
          >
            Submitted
          </button>
          <button
            className={`toggle-btns rounded-r-xl ${
              toggleStatus == "Reviewed" && "!text-white !bg-purple-500"
            }`}
            onClick={() => setToggleStatus("Reviewed")}
          >
            Reviewed
          </button>
        </div>
      </Container>
    </>
  );
};

export default ToggleBtns;
