export function manageFriends(state, action) {
    switch (action.type) {

        case "ADD_FRIEND":
            return ({ ...state, friends: [...state.friends, action.friend] })
        
        case "REMOVE_FRIEND":
            const trueFriends = state.friends.filter((bud) => (bud.id !== action.id))
            return ({ ...state, friends: trueFriends })

        default:
            return state;
    }   
};
