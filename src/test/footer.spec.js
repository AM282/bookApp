import React from 'react';
import { render, cleanup, screen, waitFor, act, getByText } from '@testing-library/react';
import '@testing-library/jest-dom'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Components/footer/Footer'


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


    it('should render footer', () => {
        render(<Footer/>, {
          container: element,
        });
      });

    

    

    test('should have services in footer', () => {
        render(<Footer />, {
          container: element,
        });
       const {getAllByText}=render(<Footer></Footer>)
       getAllByText('Services')
      });



    test('should have book in footer', () => {
        render(<Footer />, {
          container: element,
        });
       const {getAllByText}=render(<Footer></Footer>)
       getAllByText('Book')
      });


    test('should have about in footer', () => {
        render(<Footer />, {
          container: element,
        });
       const {getAllByText}=render(<Footer></Footer>)
       getAllByText('About')
      });

      test('should have compliance in footer', () => {
        render(<Footer />, {
          container: element,
        });
       const {getAllByText}=render(<Footer></Footer>)
       getAllByText('Compliance')
      });

      test('should have contact in footer', () => {
        render(<Footer />, {
          container: element,
        });
       const {getAllByText}=render(<Footer></Footer>)
       getAllByText('Contact')
      });


      test('should have links', () => {
        render(<Footer />, {
          container: element,
        });
        const count = element.getElementsByTagName('a').length;
    
        expect(count).toBe(15);    
      });
      test('should have paragraph', () => {
        render(<Footer />, {
          container: element,
        });
        const count = element.getElementsByTagName('p').length;
    
        expect(count).toBe(2);    
      });



    })