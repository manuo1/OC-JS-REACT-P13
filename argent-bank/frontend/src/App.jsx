import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, logout } from "./features/userSlice";
import Router from "./Router.jsx";

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const checkProfile = async () => {
      try {
        if (token) {
          await dispatch(fetchUserProfile()).unwrap();
        }
      } catch {
        // Token invalide ou expiré -> logout
        dispatch(logout());
      }
    };

    checkProfile();
  }, [token, dispatch]);

  return <Router />;
}
