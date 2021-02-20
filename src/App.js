import './app.css';

// Profile
import ProfileList from './components/Profile/ProfileList';
import user from './components/Profile/user.json';

// Statistic
import StatisticsList from './components/Statistics/StatisticsList';
import statisticalData from './components/Statistics/statistical-data.json';

// FriendList
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

// TransactionHistory
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions';

function App() {
  return (
    <>
      <h2>Task 1</h2>
      <ProfileList user={user} />
      <h2>Task 2</h2>
      <StatisticsList title="Upload stats" stats={statisticalData} />
      <h2>Task 3</h2>
      <FriendList friends={friends} />
      <h2>Task 4</h2>
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
