import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 22 },
    { id: 2, message: "It's my first post", likesCount: 6 },
  ],
};

test("length of post should be incremented", () => {
  //1. test-data
  let action = addPostCreator("Test test");

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(3);
});

test("after deleting length of message should be decrement", () => {
  //1. test-data
  let action = deletePost(1);

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(1);
});
