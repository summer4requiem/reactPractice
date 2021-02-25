import profileReducer from './profile-reducer';
import { addPost, deletePost} from './profile-reducer';
let testInitialState = {
    posts: [{
        message: 'hi, how are you',
        id: 1,
        likesCount: 11,
    },
        {
            message: 'my second post',
            id: 2,
            likesCount: 12,
        },
        {
            message: "it's my first post",
            id: 3,
            likesCount: 14,
        },
        {
            message: "it's my first post",
            id: 4,
            likesCount: 14,
        }
    ],
    profile: null,
    status: '',
}

test('new post should be added', () => {
    // 1. test data
    // 2. test for action
    let action = addPost(`new test text`);
    let newState = profileReducer(testInitialState, action);
    //3. expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be "new test text" ', () => {
    // 1. test data
    // 2. test for action
    let action = addPost(`new test text`);
    let newState = profileReducer(testInitialState, action);
    //3. expectation
    expect(newState.posts[4].message).toBe('new test text');
});

test('after removing post, length in posts should be decremented" ', () => {
    // 1. test data
    // 2. test for action
    let action = deletePost(1);
    let newState = profileReducer(testInitialState, action);
    //3. expectation
    expect(newState.posts.length).toBe(3);
});
