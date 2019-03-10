export function manageFriends(prevstate = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return ({...prevstate, friends: [...prevstate.friends, action.friend]})
        case 'REMOVE_FRIEND':
            let filteredFriends = prevstate.friends.filter(friend => friend.id !== action.id) 
            return ({...prevstate, friends:  filteredFriends})
        default:
            return prevstate
    }
}
