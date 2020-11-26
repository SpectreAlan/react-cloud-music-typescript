import {produce} from 'immer';

export const backupStore = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState);
    } catch (err) {
        console.log(err)
    }
}

export const recoveryStore = () => {
    try {
        const serializedState = sessionStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        } else {
            return produce({}, ()=> JSON.parse(serializedState));
        }
    } catch (err) {
        console.log(err)
        return undefined;
    }
}
