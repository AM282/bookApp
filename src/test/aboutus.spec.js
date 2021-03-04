import React from 'react';
import { render, cleanup, screen, waitFor, act, getByText } from '@testing-library/react';
import '@testing-library/jest-dom'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutUs from '../Components/aboutUs/AboutUs'


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


    it('should render aboutus component', () => {
        render(<AboutUs/>, {
          container: element,
        });
      });



      test('should have aboutus text', () => {
        render(<AboutUs />, {
          container: element,
        });
       const {getAllByText}=render(<AboutUs></AboutUs>)
       getAllByText('About us')
      });

      test('should have an image', () => {
        render(<AboutUs></AboutUs>, {
          container: element,
        });
        const count = element.getElementsByTagName('img').length;

    expect(count).toBe(1);  
    })

    })
