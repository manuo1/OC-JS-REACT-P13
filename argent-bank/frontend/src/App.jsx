import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "./features/userSlice";
import Router from "./Router.jsx";

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  // If a token exists (user is authenticated), dispatch an action
  // to fetch and update the user profile data in the Redux store
  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile());
    }
  }, [token, dispatch]);

  return <Router />;
}
