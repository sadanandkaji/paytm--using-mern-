import { Route,Routes,BrowserRouter } from "react-router-dom"
import { Signup } from "./pages/signup.tsx";
import { Dashboard } from "./pages/dashboard.tsx";
import { Signin } from "./pages/signin.tsx";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup></Signup>}/> 
      <Route path="/signin" element={<Signin></Signin>}/> 
      <Route path="/dashboard" element={<Dashboard></Dashboard>}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
