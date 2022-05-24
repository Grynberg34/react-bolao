import api from '../api/api';

export const LogInUser = (user) => async dispatch => {
    
    await api.post('/login', user).then(function(response){
        dispatch({ type: 'LOGIN_USER', payload: response.data.token });
    }).catch(function(err){
        dispatch({ type: 'FAIL_LOGIN', payload: 'Usuário e/ou senha incorretos. Tente novamente.' });
        console.log(err)
    })
    
};

export const RegisterUser = (user) => async dispatch => {
    
    await api.post('/cadastro', user).then(function(response){
        console.log(response)
        dispatch({ type: 'REGISTER_USER', payload: true });
    }).catch(function(err){
        dispatch({ type: 'FAIL_REGISTER', payload: err.response.data});
    })
    
};

export const CheckAuth = (token) => async dispatch => {

    await api.get('/user', {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(function(response){
        if (response.data.tipo_conta === 'user') {
            var auth = true;
        } else {
            auth = false;
        }
    
        dispatch({ type: 'CHECK_AUTH', payload: auth});
    })
    .catch(function(err){
        console.log(err)
    })

};