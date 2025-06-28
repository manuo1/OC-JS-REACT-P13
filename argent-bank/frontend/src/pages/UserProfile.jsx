import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import EditUserName from "../components/profile/EditUserName.jsx";
import AccountList from "../components/profile/AccountList.jsx";
import EditButton from "../components/profile/EditButton.jsx";
import { updateUserProfile } from "../features/userSlice.js";
import { fetchAccounts } from "../features/accountsSlice.js";

export default function UserProfile() {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);
  const accounts = useSelector((state) => state.accounts.items);
  const accountsStatus = useSelector((state) => state.accounts.status);
  const accountsError = useSelector((state) => state.accounts.error);

  const [userName, setUserName] = useState({
    first: firstName,
    last: lastName,
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (accountsStatus === "idle") {
      dispatch(fetchAccounts());
    }
  }, [accountsStatus, dispatch]);

  function handleSave(newName) {
    dispatch(
      updateUserProfile({
        firstName: newName.first,
        lastName: newName.last,
      })
    );
    setUserName(newName);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
  }

  return (
    <>
      <Header />

      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {!isEditing && `${firstName} ${lastName}!`}
          </h1>

          {isEditing ? (
            <EditUserName
              currentName={userName}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          ) : (
            <EditButton onClick={() => setIsEditing(true)} />
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>

        {accountsStatus === "loading" && <p>Loading accounts...</p>}
        {accountsStatus === "failed" && <p>Error: {accountsError}</p>}

        {accountsStatus === "succeeded" && <AccountList accounts={accounts} />}
      </main>

      <Footer />
    </>
  );
}
