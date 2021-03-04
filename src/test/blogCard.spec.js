import React from 'react';
import { render, cleanup, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BlogCard from '../Components/blogCard/BlogCard';
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

  it('should render BlogCard Component', () => {
    let DummyBlog = {
        "id": 3,
        "title": "A Spy Among Friends",
        "subtitle": "A Book about Art, Independence, and Spirit",
        "author": "Ben Macintyre",
        "date": "2 feb 2021",
        "img": "https://weddingcelebrantqueenstown.com/wp-content/uploads/2014/04/Reading.jpg",
        "Description": [
          "Due to the author’s local fame, I used to see this book in a store that sold pricey gifts and knick-knacks to upper-middle-class women. It looked a little more intellectual than the other merchandise—I myself only ever bought expensive chocolate, scented candles, and the occasional stuffed animal there—so when I found it recently in a Little Free Library I decided to investigate further. After reading the book, I am faced with the old dilemma: should the critic write a bad review? Isn’t it better to celebrate what it is good, true, and beautiful than to whine about what’s bad, false, and ugly? The question answers itself, and with another: how will we know what is bad, false, and ugly if no one bothers to point it out? The shade of the intrepid Ms. Ueland will have to forgive me, but I am about to point it out. She has for her consolation her book’s still being in print almost three decades after her own death.",
          "I cannot imagine a more discouraging text than this 1938 tract “about Art, Independence and Spirit” for those who want to write but aren’t sure how to start. For Ueland, you must first become a great and simple soul before you put pen to paper.",
          "Her hero is Tolstoy, and she quotes throughout the book his praise for clean-living and peasant simplicities. (She was also a feminist and the daughter of a suffragette, so her several sallies throughout this book against tyrannical husbands who prevent their wives from writing clash with the Tolstoy-worship, given that he nearly enslaved his own wife to his literary, spiritual, and sexual will—but perhaps these sordid details weren’t well-known at the time.) Though Tolstoy was an aristocrat, and Ueland herself apparently well-off, her favorite students are the poor ones, because they write without affectation about their humble lives. Her other hero besides Tolstoy is Blake, who advocated the divine energy that inspires all true art. He too lived simply and produced much poetry and art that at least seems simple. She quotes his aphorism several times: “Sooner strangle an infant in its cradle than nurse unacted desires.” (Which invites the objection: what if one desires to strangle an infant in its cradle? I despise top-down exercises of authority more than anyone, so it’s a shame that anarchist and libertarian ideals are often expressed so stupidly.) ",
          "This is a dangerously servile way to think about other people, and a fatally arrogant way to think about oneself. Whereas to think both of one’s own writing and the writing of others as an art rather than an expression of self is much more usefully humbling, even as it is a legitimate goad to ambition. Tolstoy managed to write great novels—and some not-so-great stories and essays—while bearing a more troubled soul than Ueland seems to have known; and it’s hard, complex, intellectual work writing prose as superficially simple as Tolstoy’s."
        ]
      }
    render( <BlogCard
                key = {DummyBlog.id}
                blog={DummyBlog}
            />, {
            container: element,
            });
  });

  test('BlogCard component should have header img', () => {
    let DummyBlog = {
        "id": 3,
        "title": "A Spy Among Friends",
        "subtitle": "A Book about Art, Independence, and Spirit",
        "author": "Ben Macintyre",
        "date": "2 feb 2021",
        "img": "https://weddingcelebrantqueenstown.com/wp-content/uploads/2014/04/Reading.jpg",
        "Description": [
          "Due to the author’s local fame, I used to see this book in a store that sold pricey gifts and knick-knacks to upper-middle-class women. It looked a little more intellectual than the other merchandise—I myself only ever bought expensive chocolate, scented candles, and the occasional stuffed animal there—so when I found it recently in a Little Free Library I decided to investigate further. After reading the book, I am faced with the old dilemma: should the critic write a bad review? Isn’t it better to celebrate what it is good, true, and beautiful than to whine about what’s bad, false, and ugly? The question answers itself, and with another: how will we know what is bad, false, and ugly if no one bothers to point it out? The shade of the intrepid Ms. Ueland will have to forgive me, but I am about to point it out. She has for her consolation her book’s still being in print almost three decades after her own death.",
          "I cannot imagine a more discouraging text than this 1938 tract “about Art, Independence and Spirit” for those who want to write but aren’t sure how to start. For Ueland, you must first become a great and simple soul before you put pen to paper.",
          "Her hero is Tolstoy, and she quotes throughout the book his praise for clean-living and peasant simplicities. (She was also a feminist and the daughter of a suffragette, so her several sallies throughout this book against tyrannical husbands who prevent their wives from writing clash with the Tolstoy-worship, given that he nearly enslaved his own wife to his literary, spiritual, and sexual will—but perhaps these sordid details weren’t well-known at the time.) Though Tolstoy was an aristocrat, and Ueland herself apparently well-off, her favorite students are the poor ones, because they write without affectation about their humble lives. Her other hero besides Tolstoy is Blake, who advocated the divine energy that inspires all true art. He too lived simply and produced much poetry and art that at least seems simple. She quotes his aphorism several times: “Sooner strangle an infant in its cradle than nurse unacted desires.” (Which invites the objection: what if one desires to strangle an infant in its cradle? I despise top-down exercises of authority more than anyone, so it’s a shame that anarchist and libertarian ideals are often expressed so stupidly.) ",
          "This is a dangerously servile way to think about other people, and a fatally arrogant way to think about oneself. Whereas to think both of one’s own writing and the writing of others as an art rather than an expression of self is much more usefully humbling, even as it is a legitimate goad to ambition. Tolstoy managed to write great novels—and some not-so-great stories and essays—while bearing a more troubled soul than Ueland seems to have known; and it’s hard, complex, intellectual work writing prose as superficially simple as Tolstoy’s."
        ]
      }
    render( <BlogCard
                key = {DummyBlog.id}
                blog={DummyBlog}
            />, {
            container: element,
            });
    const count = element.getElementsByTagName('img').length;

    expect(count).toBe(1);    
  });
  test('BlogCard component should have this text', () => {
    let DummyBlog = {
        "id": 3,
        "title": "A Spy Among Friends",
        "subtitle": "A Book about Art, Independence, and Spirit",
        "author": "Ben Macintyre",
        "date": "2 feb 2021",
        "img": "https://weddingcelebrantqueenstown.com/wp-content/uploads/2014/04/Reading.jpg",
        "Description": [
          "Due to the author’s local fame, I used to see this book in a store that sold pricey gifts and knick-knacks to upper-middle-class women. It looked a little more intellectual than the other merchandise—I myself only ever bought expensive chocolate, scented candles, and the occasional stuffed animal there—so when I found it recently in a Little Free Library I decided to investigate further. After reading the book, I am faced with the old dilemma: should the critic write a bad review? Isn’t it better to celebrate what it is good, true, and beautiful than to whine about what’s bad, false, and ugly? The question answers itself, and with another: how will we know what is bad, false, and ugly if no one bothers to point it out? The shade of the intrepid Ms. Ueland will have to forgive me, but I am about to point it out. She has for her consolation her book’s still being in print almost three decades after her own death.",
          "I cannot imagine a more discouraging text than this 1938 tract “about Art, Independence and Spirit” for those who want to write but aren’t sure how to start. For Ueland, you must first become a great and simple soul before you put pen to paper.",
          "Her hero is Tolstoy, and she quotes throughout the book his praise for clean-living and peasant simplicities. (She was also a feminist and the daughter of a suffragette, so her several sallies throughout this book against tyrannical husbands who prevent their wives from writing clash with the Tolstoy-worship, given that he nearly enslaved his own wife to his literary, spiritual, and sexual will—but perhaps these sordid details weren’t well-known at the time.) Though Tolstoy was an aristocrat, and Ueland herself apparently well-off, her favorite students are the poor ones, because they write without affectation about their humble lives. Her other hero besides Tolstoy is Blake, who advocated the divine energy that inspires all true art. He too lived simply and produced much poetry and art that at least seems simple. She quotes his aphorism several times: “Sooner strangle an infant in its cradle than nurse unacted desires.” (Which invites the objection: what if one desires to strangle an infant in its cradle? I despise top-down exercises of authority more than anyone, so it’s a shame that anarchist and libertarian ideals are often expressed so stupidly.) ",
          "This is a dangerously servile way to think about other people, and a fatally arrogant way to think about oneself. Whereas to think both of one’s own writing and the writing of others as an art rather than an expression of self is much more usefully humbling, even as it is a legitimate goad to ambition. Tolstoy managed to write great novels—and some not-so-great stories and essays—while bearing a more troubled soul than Ueland seems to have known; and it’s hard, complex, intellectual work writing prose as superficially simple as Tolstoy’s."
        ]
      }
    render( <BlogCard
                key = {DummyBlog.id}
                blog={DummyBlog}
            />, {
            container: element,
            });
   expect(screen.getByTestId('card')).toHaveClass('card');
  });
});
