import PropTypes from 'prop-types';
import style from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(e => {
        return (
          <li className={style.item}>
            <span
              className={e.isOnline ? style.isOnline : style.isOfline}
            ></span>
            <img
              className={style.avatar}
              src={e.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={style.name}>{e.name}</p>
          </li>
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
