import React from 'react';
import { render, cleanup, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import UserProfile from '../Components/userProfile/UserProfile'

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

  it('should render userProfile component', () => {
    render(<UserProfile/>, {
      container: element,
    });
  });
  test('Should render userProfile with Full Name: text', () => {
    render(
        <UserProfile />,
      {
        container: element,
      }
    );
    // screen.debug();
    expect(screen.getByText('Full Name:')).toBeInTheDocument();
  });
  test('Favour component should have a img Tag', () => {
    render(<UserProfile/>, {
      container: element,
    });
    const count = element.getElementsByTagName('img').length;

    expect(count).toBe(1);    
  });
});
