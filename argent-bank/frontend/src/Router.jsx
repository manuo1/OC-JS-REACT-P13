import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignInPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/user" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
