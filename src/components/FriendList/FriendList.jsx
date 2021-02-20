import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import Friend from './Friend';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <Friend
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  key: PropTypes.number,
};

export default FriendList;
