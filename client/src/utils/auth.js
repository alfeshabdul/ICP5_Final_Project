import { toast ,ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export const checkLogin = async () => {
  const user = JSON.parse(localStorage.getItem("user")) || null;

  if (!user) {
    toast("LOGIN TO CONTINUE", {
      position: "top-center",
    });
    window.location.href = "/login";
  }
};
<ToastContainer/>
