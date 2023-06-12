import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signInPage/signIn";
import SignUp from "./pages/signUpPage/signUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
