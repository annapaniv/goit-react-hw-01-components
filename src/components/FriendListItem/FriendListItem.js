import css from './FriendsListItem.module.css';

export const FriendListItem = (({ avatar, name, isOnline, id }) => {
    return (
       
            <li className={css.item} key={id}>
              <div className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></div>
              <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
              <p className={css.name}>{name}</p>
            </li>)}
    )
