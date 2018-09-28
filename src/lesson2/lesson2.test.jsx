import React from 'react';
import { shallow } from 'enzyme';
import { GL, WC } from '../helpers/constants';
import { Quotes } from './lesson2';

describe('Lesson 2', () => {
  beforeEach(() => {
    props = {
      lob: undefined,
      price: undefined,
    };
  });

  describe('shows quote', () => {
    it('has lob AND price', () => {
      props.lob = GL;
      props.price = rawPrice;

      component = render();

      expectComponent(component).toShowText(GL);
      expectComponent(component).toShowText(formattedPrice);
    });
  });

  describe('does NOT show quote', () => {
    it('has NO lob', () => {
      props.price = rawPrice;

      component = render();

      expectComponent(component).not.toShowText(GL);
      expectComponent(component).not.toShowText(formattedPrice);
    });

    it('has NO price', () => {
      props.lob = GL;

      component = render();

      expectComponent(component).not.toShowText(GL);
      expectComponent(component).not.toShowText(formattedPrice);
    });

    it('has NO lob AND NO price', () => {
      component = render();

      expectComponent(component).not.toShowText(GL);
      expectComponent(component).not.toShowText(formattedPrice);
    });
  });

  describe('shows sorry message', () => {
    it('has NO lob', () => {
      props.price = rawPrice;

      component = render();

      expectComponent(component).toShowText(sorryMessage);
    });

    it('has NO price', () => {
      props.lob = GL;

      component = render();

      expectComponent(component).toShowText(sorryMessage);
    });

    it('has NO lob AND NO price', () => {
      component = render();

      expectComponent(component).toShowText(sorryMessage);
    });
  });

  describe('does NOT show sorry message', () => {
    it('has lob AND price', () => {
      props.lob = GL;
      props.price = rawPrice;

      component = render();

      expectComponent(component).not.toShowText(sorryMessage);
    });
  });

  describe('on submit', () => {
    it('sends quote email', () => {

    });

    it('does NOT send quote email', () => {

    });
  });

  let component;
  let props;
  const sorryMessage = 'Sorry, we could not get your quote';

  const rawPrice = 2500.43;
  const formattedPrice = '$2,500.43';

  const render = () => shallow(<Quotes {...props} />);

  const expectComponent = comp => ({
    toShowText(text) {
      expect(comp.html()).toContain(text);
    },

    not: {
      toShowText(text) {
        expect(comp.html()).not.toContain(text);
      },
    },
  });

});
