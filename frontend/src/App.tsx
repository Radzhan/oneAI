import { Route, Routes } from "react-router-dom";
import Main from "./screens/Main/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<h2>Not Found !</h2>} />
      </Routes>
    </>
  );
}

export default App;
