import React from 'react';
import { render, cleanup, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthorCard from '../Components/authorCard/AuthorCard'

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
    render(<AuthorCard />, {
      container: element,
    });
  });
  test('FavouriteCard component should have delete button', () => {
    render(<AuthorCard />, {
      container: element,
    });
    const count = element.getElementsByTagName('img').length;

    expect(count).toBe(1);    
  });
  test('FavouriteCard component should have delete button', () => {
    render(<AuthorCard />, {
      container: element,
    });
    const count = element.getElementsByTagName('a').length;

    expect(count).toBe(2);    
  });
});
