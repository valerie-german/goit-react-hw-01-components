import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  name,
  tag,
  location,
  avatar,
  followers = 0,
  views = 0,
  likes = 0,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.tag}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className="label">Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className="label">Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.lastItem}>
          <span className="label">Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
