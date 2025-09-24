import { Suspense } from "react";
import Footer from "./Footer/Footer";
import IssuesManagement from "./IssuesManagement/IssuesManagement";
import Navbar from "./Navbar/Navbar";

const fetchIssues = async() =>{
  const res = await fetch('/data.json');
  return res.json();
}

const fetchPromise = fetchIssues();

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Suspense>
        <IssuesManagement fetchPromise={fetchPromise}> </IssuesManagement>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
