import {login, logout} from '../../actions/auth';


test('should setup login auth action object', () => {
    const action = login('1234');
    expect(action).toEqual({
      type: 'LOGIN',
      uid: '1234'
    });
  });

test('should setup logout auth action object', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    });
});
  