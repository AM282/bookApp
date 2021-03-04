import React from 'react';
import { render, cleanup, screen, waitFor, act, getByText } from '@testing-library/react';
import '@testing-library/jest-dom'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../Components/login/Login'


describe('login test cases', () => {
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


    it('should render login component', () => {
        render(<Login/>, {
          container: element,
        });
      });

      test('should have text home in login page', () => {
        render(<Login />, {
          container: element,
        });
       const {getAllByText}=render(<Login></Login>)
       getAllByText('Home')
      })

      test('should have text Blog in login page', () => {
        render(<Login />, {
          container: element,
        });
       const {getAllByText}=render(<Login></Login>)
       getAllByText('Blog')
      })

      test('should have links', () => {
        render(<Login />, {
          container: element,
        });
        const count = element.getElementsByTagName('a').length;
    
        expect(count).toBe(5);    
      });



    })