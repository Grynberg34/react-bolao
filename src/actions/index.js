import api from '../api/api';

// REGISTER, LOGIN, REDEFINE, AUTH

export const LogInUser = (user) => async dispatch => {
    
    await api.post('/login', user).then(function(response){
        dispatch({ type: 'LOGIN_USER', payload: response.data.token });
    }).catch(function(err){
        console.log(err.response);
        dispatch({ type: 'FAIL_LOGIN', payload: err.response.data.mensagem});
    })
    
};

export const RegisterUser = (user) => async dispatch => {
    
    await api.post('/cadastro', user).then(function(response){
        dispatch({ type: 'REGISTER_USER', payload: true });
    }).catch(function(err){
        console.log(err);
        dispatch({ type: 'FAIL_REGISTER', payload: err.response.data.mensagem});
    })
    
};

export const RedefinePassword = (email) => async dispatch => {
    
    await api.post('/redefinir', email).then(function(){
        dispatch({ type: 'REDEFINE_PASSWORD', payload: true });
    }).catch(function(err){
        console.log(err);
        dispatch({ type: 'FAIL_REDEFINE', payload: err.response.data.mensagem});
    })
    
};

export const DefineNewPassword = (newpass) => async dispatch => {
    
    await api.post('/redefinir/nova-senha', newpass).then(function(response){
        dispatch({ type: 'DEFINE_PASSWORD', payload: true });
    }).catch(function(err){
        console.log(err)
        dispatch({ type: 'FAIL_PASSWORD', payload: err.response.data.mensagem});
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
            dispatch({ type: 'CHECK_AUTH', payload: auth});
            dispatch({ type: 'CHECK_USER', payload: response.data});
            dispatch({ type: 'CHECK_PIX', payload: response.data.pix});
            dispatch({ type: 'CHECK_VERIFIED', payload: response.data.verificado});
            dispatch({ type: 'CHECK_DONE', payload: response.data.enviado});
        } 
    })
    .catch(function(err){
        console.log(err)
    })

};


export const AuthGoogle = (googleUser) => async dispatch => {

    await api.post('/auth/google/signin', {
        name: googleUser.profileObj.name,
        googleID: googleUser.googleId
    }).then(function(response){
        dispatch({ type: 'LOGIN_USER', payload: response.data.token });
    }).catch(function(err){
        console.log(err)
    })

};

export const LogoutUser = () => async dispatch => {

    await dispatch({ type: 'LOGIN_USER', payload: null });
    await dispatch({ type: 'CHECK_AUTH', payload: false });

};

// BOLÃO

export const GetGroups = (token) => async dispatch => {

    await api.get('/user/jogos', {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(function(response){
        dispatch({ type: 'GET_GROUPS', payload: response.data });
    })
    .catch(function(err){
        console.log(err)
    })

};

export const SendResult = (token, info) => async dispatch => {

    await api.post('/user/enviar-palpite-jogo', info, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(async function(){
        await api.get('/user/classificacao', {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
        }).then(function(response){
            dispatch({ type: 'GET_GROUPSTANDINGS', payload: response.data });
        })
        .catch(function(err){
            console.log(err)
        })
    })
    .catch(function(err){
        console.log(err)
    })

};

export const GetGroupStandings = (token) => async dispatch => {

    await api.get('/user/classificacao', {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
    }).then(async function(response){
        dispatch({ type: 'INIT_GROUPSTANDINGS', payload: response.data });
    })  
    .catch(function(err){
        console.log(err)
    })

};