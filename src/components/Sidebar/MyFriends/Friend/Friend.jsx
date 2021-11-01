import s from "./../MyFriends.module.css";

const Friend = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://sun9-25.userapi.com/impg/mTKKTyXaUYl-bHuRx9h7fDFVmcgJcUjuwDJxyw/OhB1nfrnXmw.jpg?size=1280x853&quality=96&sign=2d8f8bfb078adf463fe265883d5fafed&type=album"
        alt=""
      />
      <div>{props.name}</div>
    </div>
  );
};

export default Friend;
