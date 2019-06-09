import JsonPlaceHolderAPI from '../api/JSONplaceholderAPI'
import Lodash from 'lodash';

const fetchPosts = () => async dispatch => {
        const response = await JsonPlaceHolderAPI.get("/posts");
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

const fetchUser = id => async dispatch => {
        console.log(id);
        const response = await JsonPlaceHolderAPI.get("/users/" + id);
        dispatch({ type: 'FETCH_USER', payload: response.data });
};

// SOLUTION 1 - this solution replace fetchUser method and are made for dont repeat call when the filter(id) is repeted - using the lib lodash (https://lodash.com/)
// export const fetchUser = id => dispatch => {
//         _fetchUser(id, dispatch);
// };

// const _fetchUser = Lodash.memoize(async (id, dispatch) => {
//         console.log(id);
//         const response = await JsonPlaceHolderAPI.get("/users/" + id);
//         dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// SOLUTION 2 (BETTER)- this is using "chain" method from "lodash", for dont did duplicated calls
export  const fetchPostAndUsers = () => async (dispatch, getState) => 
{
        await dispatch(fetchPosts());
        Lodash.chain(getState().posts)
        .map('userId') // get Only "userId" property
        .uniq() // apply the distinct in "userId" property
        .forEach(id => dispatch(fetchUser(id))) // called the function "fetchUser" using the "dispatch" method, so they will pass for the "Thunk" middleware, this call is made without "Async" because we dont need wait this call.
        .value(); // Execute the "chain" method
}

