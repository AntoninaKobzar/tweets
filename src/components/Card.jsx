import css from "./Card.module.css";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";

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
      <div className={css.card_sign}>
        <p className={css.tweets_text}>tweets</p>
        <p className={css.followers_text}>Followers</p>
        <div>
          <button className={css.follow_btn} type="button">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
