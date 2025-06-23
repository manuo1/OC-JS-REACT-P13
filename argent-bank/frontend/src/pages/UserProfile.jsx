import { useState } from "react";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import EditUserName from "../components/profile/EditUserName.jsx";
import AccountList from "../components/profile/AccountList.jsx";
import EditButton from "../components/profile/EditButton.jsx";

export default function UserProfile() {
  const [userName, setUserName] = useState({ first: "Tony", last: "Jarvis" });
  const [isEditing, setIsEditing] = useState(false);

  // mock temporaire des data
  const accounts = [
    {
      id: 1,
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      id: 2,
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      id: 3,
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  function handleSave(newName) {
    setUserName(newName);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
  }

  return (
    <>
      <Header firstName={userName.first} />

      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {!isEditing && (
              <>
                {userName.first} {userName.last}!
              </>
            )}
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

        <AccountList accounts={accounts} />
      </main>

      <Footer />
    </>
  );
}
