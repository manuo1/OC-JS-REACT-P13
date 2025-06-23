import AccountItem from "./AccountItem.jsx";

export default function AccountList({ accounts }) {
  return accounts.map((account) => (
    <AccountItem
      key={account.id}
      title={account.title}
      amount={account.amount}
      description={account.description}
    />
  ));
}
