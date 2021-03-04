import React from 'react';
import { render, cleanup, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Components/navbar/Navbar'

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

  it('should render favourite', () => {
    render(<Navbar/>, {
      container: element,
    });
  });
  test('Should render Header Component with Contact Manager Text', () => {
    render(
        <Navbar />,
      {
        container: element,
      }
    );
    // screen.debug();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
  test('FavouriteCard component should have delete button', () => {
    render(<Navbar/>, {
      container: element,
    });
    const count = element.getElementsByTagName('a').length;

    expect(count).toBe(4);    
  });
});
