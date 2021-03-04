import React from 'react';
import { render, cleanup, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Components/header/Header'


describe('header test cases', () => {
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
    })


    it('should render header', () => {
        render(<Header/>, {
          container: element,
        });
      });

      test('header component should have 3 carousel images', () => {
        render(<Header />, {
          container: element,
        });
        const count = element.getElementsByTagName('img').length;

    expect(count).toBe(3);  
    })

    test('header component should have button', () => {
        render(<Header />, {
          container: element,
        });
        const count = element.getElementsByTagName('button').length;
    
        expect(count).toBe(1);    
      });


})