import css from "./Card.module.css";
import logo from "../images/logo.png";

const Card = () => {
  return (
    <div className={css.card}>
      <img alt="logo" className={css.logo} src={logo} />
      <div className={css.wrapper}>
        <div className={css.picture}></div>
        <div className={css.avatar}>
          <img alt="avatar" src={avatar} className={css.avatar_picture} />
        </div>
      </div>
      <p className={css.tweets_text}> {tweets} tweets</p>
      <p className={css.followers_text}>
        {followersNum.toLocaleString("en-US")} Followers
      </p>
      <div className={css.buttonBox}>
        {isFollowing ? (
          <button
            type="button"
            className={`${css.button} ${css.buttonFollowing}`}
            onClick={onFollowingClick}
          >
            Following
          </button>
        ) : (
          <button type="button" className={css.button} onClick={onFollowClick}>
            Follow
          </button>
        )}
      </div>
    </div>
  );
};
export default Card;
