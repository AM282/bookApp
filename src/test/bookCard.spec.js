import React from 'react';
import { render, cleanup, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BookCard from '../Components/bookCard/BookCard'

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

  it('should render bookCard Component', () => {
    render(<BookCard />, {
      container: element,
    });
  });
  test('FavouriteCard component should have 2 p tags', () => {
    render(<BookCard />, {
      container: element,
    });
    const count = element.getElementsByTagName('p').length;

    expect(count).toBe(2);    
  });
});
