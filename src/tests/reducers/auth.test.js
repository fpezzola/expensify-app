import authReducer from '../../reducers/auth';

test('should setup default state',() =>{
    const state = authReducer(undefined,{type: '@@INIT' });
    expect(state).toEqual({});
});


test('should login',() =>{
    const uid = 200;
    const state = authReducer({},{type: 'LOGIN', uid });
    expect(state).toEqual({uid});
});

test('should logout',() =>{
    const uid = 200;
    const state = authReducer({uid},{type: 'LOGOUT'});
    expect(state).toEqual({});
});