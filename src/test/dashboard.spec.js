import React from 'react';
import { render, cleanup, screen, waitFor, act } from '@testing-library/react';
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../Components/dashboard/Dashboard';

describe('Dashboard test cases', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });
  afterEach(() => {
    cleanup(); 
    unmountComponentAtNode(element); 
    element.remove();
    element = null;
  });

  it('should render dashboard', () => {
    render(<Dashboard />, {
      container: element,
    });
  });

//   test('Should render Header Component with Contact Manager Text', () => {
//     render(
//       <Router>
//         <Header />
//       </Router>,
//       {
//         container: element,
//       }
//     );
//     // screen.debug();
//     expect(screen.getByText('Contact Manager')).toBeInTheDocument();
//   });

//   test('should have 5 links in the header component', () => {
//     render(
//       <Router>
//         <Header />
//       </Router>,
//       {
//         container: element,
//       }
//     );
//     // renderer(
//     //   <Router>
//     //     <Header />
//     //   </Router>,
//     //   element
//     // );

//     // screen.debug();
//     const count = element.querySelectorAll('a').length;
//     // const count = element.getElementsByTagName('a').length;

//     expect(count).toBe(5);
//   });

//   test('Should have submit text in Submit button of Add COntact', () => {
//     render(<AddForm />, {
//       container: element,
//     });
//     expect(screen.getByTestId('btnSubmit')).toHaveTextContent('Submit');
//     // screen.debug();
//   });

//   test('Contact component should have bootstrap card class', () => {
//     render(<Contact />, {
//       container: element,
//     });
//     expect(screen.getByTestId('card')).toHaveClass('card');
//   });

//   test('All hyperlinks should have nav-link class in Header', () => {
//     renderer(
//       <Router>
//         <Header />
//       </Router>,
//       element
//     );

//     // screen.debug();
//     const links = element.getElementsByTagName('a');
//     for (let i = 1; i < links.length; i++) {
//       expect(links[i]).toHaveClass('nav-link');
//     }
//   });

//   test('Should display the values passed as props into the Contact COmponent', async () => {
//     let dummyContact = {
//       id: 1,
//       name: 'Sneha Kumari',
//       email: 'sneha@gmail.com',
//       address: {
//         city: 'Bengaluru',
//       },
//       phone: '3224234234',
//     };

//     render(
//       <Contact
//         id={dummyContact.id}
//         name={dummyContact.name}
//         email={dummyContact.email}
//         city={dummyContact.address.city}
//         phone={dummyContact.phone}
//       />,
//       {
//         container: element,
//       }
//     );
//     expect(screen.getByText(dummyContact.name)).toBeInTheDocument();
//     expect(screen.getByText(dummyContact.email)).toBeInTheDocument();
//     expect(screen.getByText(dummyContact.address.city)).toBeInTheDocument();
//     expect(screen.getByText(dummyContact.phone)).toBeInTheDocument();
//   });

//   test('should render AltContactList', async () => {
//     let fakePersons = [
//       {
//         id: 1,
//         name: 'Sneha Kumari',
//         email: 'sneha@gmail.com',
//         address: {
//           city: 'Bengaluru',
//         },
//         phone: '2323232332',
//       },
//     ];

//     jest.spyOn(global, 'fetch').mockImplementation(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(fakePersons),
//         ok: true,
//       })
//     );

//     // From the recipe in react website but the act method used is imported from react/testing-library
//     // https://reactjs.org/docs/testing-recipes.html#data-fetching

//     // ****===================*************

//     // await act(async () => {
//     //   render(<AltContactList />, {
//     //     container: element,
//     //   });
//     // });
//     // // screen.debug();
//     // expect(screen.getByText('Sneha Kumari')).toBeInTheDocument();

//     // *********** ====================== ******

//     // Using waitFor method available in react/testing-library
//     // ****===================*************
//     await waitFor(() => {
//       render(<AltContactList />, {
//         container: element,
//       });
//     });

//     expect(screen.getByText('Sneha Kumari')).toBeInTheDocument();

//     // *********** ====================== ******

//     // Below is using findByText available in react/testing-library

//     // ****===================*************

//     // render(<AltContactList />, {
//     //   container: element,
//     // });

//     // expect(await screen.findByText('Sneha Kumari')).toBeInTheDocument();

//     // *********** ====================== ******

//     global.fetch.mockRestore();
//   });
});
