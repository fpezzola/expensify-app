import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'react-dates/initialize';

require('dotenv').config({ path: '.env.test' });

Enzyme.configure({
    adapter: new Adapter()
});