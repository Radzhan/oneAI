import { Route, Routes } from "react-router-dom";
import Main from "./screens/Main/Main";
import Result from "./screens/Result/Result";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<h2>Not Found !</h2>} />
      </Routes>
    </>
  );
}

export default App;
