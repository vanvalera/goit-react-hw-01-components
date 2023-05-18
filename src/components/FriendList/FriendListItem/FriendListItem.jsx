import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
  const liOnlineStatus = `${css.status} ${isOnline ? css.online : css.offline}`
    return <li className={css.item}>
      <span className={liOnlineStatus}  >{ isOnline}</span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name }</p>
</li>
}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

