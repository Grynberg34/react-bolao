import api from '../api/api';

export const LogInUser = (user) => async dispatch => {
    
    const response = await api.post('/login', user);
    
    dispatch({ type: 'LOGIN_USER', payload: response.data.token });
};

export const CheckAuth = (token) => async dispatch => {

    const response = await api.get('/user', {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    });

    if (response.data.tipo_conta === 'user') {
        var auth = true;
    } else {
        auth = false;
    }

    
    dispatch({ type: 'CHECK_AUTH', payload: auth});
};