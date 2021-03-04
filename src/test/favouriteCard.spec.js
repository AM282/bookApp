import React from 'react';
import { render, cleanup, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import FavouriteCard from '../Components/favouriteCard/FavouriteCard'

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
    render(<FavouriteCard />, {
      container: element,
    });
  });
  test('FavouriteCard component should have bootstrap card class', () => {
    render(<FavouriteCard />, {
      container: element,
    });
    expect(screen.getByTestId('favourite')).toHaveClass('card-col');
    
  });
  test('FavouriteCard component should have delete button', () => {
    render(<FavouriteCard />, {
      container: element,
    });
    const count = element.getElementsByTagName('i').length;

    expect(count).toBe(1);    
  });
});
