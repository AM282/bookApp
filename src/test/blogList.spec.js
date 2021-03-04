import React from 'react';
import { render, cleanup, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BlogList from '../Components/blogList/BlogList';

describe('BlogList test cases', () => {
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

  it('should render BlogList Component', () => {
    render(<BlogList />, {
      container: element,
    });
  });
  test('Bloglist component should have header img', () => {
    render(<BlogList />, {
      container: element,
    });
    const count = element.getElementsByTagName('img').length;

    expect(count).toBe(1);    
  });
  test('Bloglist component should have', () => {
    render(<BlogList />, {
      container: element,
    });
    expect(screen.getByText("Welcome to our blog")).toBeInTheDocument();  
  });
});
