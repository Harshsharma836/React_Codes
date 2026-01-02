import {useContext} from 'react';
import { ContextCounter } from '../context/Counter';

function Message(){

    const dataOfStore = useContext(ContextCounter);
    return(
        <div>
            <h3>{dataOfStore.msg}</h3>
        </div>
    )
}

export default Message;