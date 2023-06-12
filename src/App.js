import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signInPage/signIn";
import SignUp from "./pages/signUpPage/signUp";
import UserProvider from "./contexts/userContext";
import Home from "./pages/homePage/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
