import React, { use, useState } from "react";
import CountBox from "../CountBox/CountBox";
import ToggleBtns from "../ToggleBtns/ToggleBtns";
import Container from "../Container/Container";
import Card from "../Card/Card";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialData = use(fetchPromise);
  //   console.log(initialData);

  const [data, setData] = useState(initialData);
  return (
    <>
      {/* Box  */}
      <CountBox data ={data} setData={setData}></CountBox>

      {/* Toggle  Buttons*/}
      <ToggleBtns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleBtns>

      {/* Cards */}
      <Container>
        <div className="grid grid-cols-3 gap-5">
          {initialData.map((issue, index) => (
            <Card key={index} issue={issue}></Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default IssuesManagement;
