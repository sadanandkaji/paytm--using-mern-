import { useRef } from "react";
import { Inputcomponent } from "../components/inputcomponent";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signin() {
  const usernameref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    const email = usernameref.current?.value;
    const password = passwordref.current?.value;

    try {
      const response = await axios.post(BACKEND_URL + "/api/v1/user/signin", {
        email,
        password,
      });
//@ts-ignore
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      alert("Signed in successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Failed to sign in");
    }
  }

  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center">
      <div className="border-3 border-gray-600 h-80 w-70 text-white rounded-lg flex justify-center">
        <div>
          <div className="flex justify-center text-3xl text-gray-500 pb-10 pt-5 p-8 border-b border-gray-300">
            Sign In
          </div>
          <div>
            <Inputcomponent placeholder="Username" reference={usernameref} />
            <Inputcomponent placeholder="Password" reference={passwordref} />
          </div>
          <div className="pt-3 flex justify-center border-b border-gray-300 pb-3">
            <Button onClick={signin} variant="primary" size="lg" text="Sign In" />
          </div>
        </div>
      </div>
    </div>
  );
}