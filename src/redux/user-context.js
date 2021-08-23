import { createContext,useState,useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const UserContext = createContext();

export function UserContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);
    const history = useHistory();

    async function getLoggedIn() {
        const res = await axios.get('/loggedIn');
        setIsLoggedIn(res.data)
    }
    
}