import React, { use, useState } from "react";
import CountBox from "../CountBox/CountBox";
import ToggleBtns from "../ToggleBtns/ToggleBtns";
import Container from "../Container/Container";
import Card from "../Card/Card";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);

  const filterData = toggleStatus === "All"? data : data.filter(element => element.status == toggleStatus)
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
        {filterData.length == 0 ? (
          <h2 className="font-bold text-[35px] text-center mb-9 text-purple-500 text-shadow-2xs">
            No Data
          </h2>
        ) : (
          <div className="grid grid-cols-3 gap-[12px] mb-6">
            {filterData.map((issue, ind) => {
              // console.log(issue);
              return (
                <Card key={ind} issue={issue} data={data} setData={setData} />
              );
            })}
          </div>
        )}
      </Container>
    </>
  );
};

export default IssuesManagement;
