import React, {createContext, useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

function AuthProvider({children}) {
    const navigate = useNavigate();
	const [user, setUser] = useState(undefined);
    const login = ({username}) => {
        setUser({ username });
        navigate('/profile');
    };
    const logout = () => {
        setUser(undefined);
        navigate('/');
    };
	const auth = {user, login, logout};
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
	const auth = useContext(AuthContext);
	return auth;
}

export {AuthProvider, useAuth};