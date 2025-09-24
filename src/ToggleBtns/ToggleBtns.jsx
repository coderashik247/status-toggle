import React from "react";
import Container from "../Container/Container";

const ToggleBtns = ({ toggleStatus, setToggleStatus }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];
  return (
    <>
      <Container>
        <div className="text-right mb-[50px]">
          {btns.map((btn, index) => (
            <button key={index}
              className={`${index == 0 && "rounded-l-md"} ${index == btns.length -1 && "rounded-r-md"} toggle-btns  ${
                toggleStatus == btn && "!text-white !bg-purple-500"
              }`}
              onClick={() => setToggleStatus(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ToggleBtns;
