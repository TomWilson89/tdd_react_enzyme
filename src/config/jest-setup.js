import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'core-js/stable';
import Enzyme from 'enzyme';
import 'regenerator-runtime/runtime';

Enzyme.configure({ adapter: new EnzymeAdapter() });
