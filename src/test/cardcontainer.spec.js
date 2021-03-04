import React from 'react';
import { render, cleanup, screen, waitFor, act, getByText } from '@testing-library/react';
import '@testing-library/jest-dom'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CardContainer from '../Components/cardContainer/CardContainer'


describe('cardcontainer test cases', () => {
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
        render(<CardContainer></CardContainer>, {
          container: element,
        });
      });

      test('should have links', () => {
        render(<CardContainer />, {
          container: element,
        });
        const count = element.getElementsByTagName('a').length;
    
        expect(count).toBe(0);    
      });


    })