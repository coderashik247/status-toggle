import { useState } from "react";
import Container from "./Container/Container";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import ToggleBtns from "./ToggleBtns/ToggleBtns";

function App() {
  const [toggleStatus, setToggleStatus] = useState('All')
  return (
    <>
      <Navbar></Navbar>

      {/* Box */}
      <Container>
        <div className="grid grid-cols-3 gap-[20px] my-[50px]">
          <div className="rounded-md p-7 text-white bg-gray-600 h-[250px] flex justify-center items-center flex-col">
            <h2 className="font-bold text-[35px]">Pending</h2>
            <p className="font-semibold text-[28px]">0</p>
          </div>
          <div className="rounded-md p-7 text-white bg-purple-600 h-[250px] flex justify-center items-center flex-col">
            <h2 className="font-bold text-[35px]">Submitted</h2>
            <p className="font-semibold text-[28px]">0</p>
          </div>
          <div className="rounded-md p-7 text-white bg-teal-600 h-[250px] flex justify-center items-center flex-col">
            <h2 className="font-bold text-[35px]">Reviewed</h2>
            <p className="font-semibold text-[28px]">0</p>
          </div>
        </div>
      </Container>

      {/* Toggle  Buttons*/}
      <ToggleBtns toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></ToggleBtns>

      <Footer></Footer>
    </>
  );
}

export default App;
