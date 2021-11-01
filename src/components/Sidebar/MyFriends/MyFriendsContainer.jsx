import MyFriends from "./MyFriends";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  };
};

const MyFriendsContainer = connect(mapStateToProps)(MyFriends);

export default MyFriendsContainer;
