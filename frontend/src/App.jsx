import { Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Teams from "./pages/Teams";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </>
  )
}

export default App
