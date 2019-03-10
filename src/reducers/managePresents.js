export function managePresents(prevstate, action){
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: prevstate.numberOfPresents + 1}
        default:
            return prevstate
    }
}

