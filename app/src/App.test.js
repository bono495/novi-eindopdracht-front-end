/* eslint-disable */
/* Dependencies */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import { BrowserRouter } from 'react-router-dom';

/* Components */
import MovieCard from './components/movies/MovieComponent';
import Movies from './components/movies/Movies';
import Lost from './components/lost/Lost';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Home from './components/home/Home';
import App from './App';

const movie = {
  id:	"tt6475714",
  title:	"Monster Hunter",
  releaseState:	"Opening This Week - December 18",
  image:	"https://imdb-api.com/images/original/MV5BOGU3NTFmNjYtODc3Ny00MWEzLWI3M2ItZjE3NDgwMTI0MzkzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6699_AL_.jpg",
  plot:	"When Lt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers. Feature film based on the video game by Capcom.",
};

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

describe('Rendering components', () => {
  it('Render home without crashing', () => {
    shallow(<Home />);
  });
  it('Render login without crashing', () => {
    shallow(<Login />);
  });
  it('Render register without crashing', () => {
    shallow(<Register />);
  });
  it('Render movies without crashing', () => {
    shallow(<Movies />);
  });
  it('Render lost without crashing', () => {
    const wrapper = mount(<BrowserRouter><Lost /></BrowserRouter>)
    
    // const button = wrapper.prop("key")
    // expect(card).toEqual("");
  });
  it('Render moviecard without crashing', () => {
    const wrapper = mount(<MovieCard movie={movie} />)
    // expect(wrapper.prop('key')).toBe(movie.id);
    // const card = wrapper.prop("key")
    // expect(card).toEqual("");
  });
});


// test('Should render a lost page with a return to home button', () => {
//   const link = renderer
//     .create(
//       <BrowserRouter>
//         <Link to="home">Tekst</Link>)
//       </BrowserRouter>
//     )
//     .toJSON();
//   expect(link).toMatchSnapshot();
// })