import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  }, [dispatch, navigate]);

  return null;
}
