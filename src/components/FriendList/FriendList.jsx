import PropTypes from 'prop-types';
import style from '../FriendList/FriendList.module.css';

import { FriendListItem } from './FriendListItem.jsx';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(e => {
        return (
          <FriendListItem
            avatar={e.avatar}
            name={e.name}
            isOnline={e.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
