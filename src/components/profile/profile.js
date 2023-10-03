import img from '../profile/img/avatar.png';
import css from './Profile.module.css';


export const Profile = (username,
     tag,
      location, 
      avatar = img, 
      stats) => {
  return (
    <div className={css.profile}>
  
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>Petra Marica</p>  
        <p className={css.tag}>@pmarica</p>
        <p className={css.location}>Salvador, Brasil</p>
    

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>1000</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>2000</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>3000</span>
        </li>
      </ul>
      </div>
  );
};
