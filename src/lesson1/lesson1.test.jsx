import React from 'react';
import { shallow } from 'enzyme';
import { GL, WC } from '../helpers/constants';
import { Quotes } from './lesson1';

describe('Lesson 1', () => {
  beforeEach(() => {
    lob = undefined;
    price = undefined;
  });

  describe('when has lob AND price', () => {
    beforeEach(() => {
      lob = GL;
      price = rawPrice;
    });

    it('shows quote', () => {
      component = render(lob, price);

      expectComponent(component).toShowText(GL);
      expectComponent(component).toShowText(formattedPrice);
    });

    it('does NOT show sorry message', () => {
      component = render(lob, price);

      expectComponent(component).not.toShowText(sorryMessage);
    });
  });

  describe('when has lob AND NO price', () => {
    beforeEach(() => {
      lob = WC;
    });

    it('does NOT show quote', () => {
      component = render(lob, price);

      expectComponent(component).not.toShowText(GL);
      expectComponent(component).not.toShowText(formattedPrice);
    });

    it('shows sorry message', () => {
      component = render(lob, price);

      expectComponent(component).toShowText(sorryMessage);
    });
  });

  describe('when has price AND NO lob', () => {
    beforeEach(() => {
      price = rawPrice;
    });

    it('does NOT show quote', () => {
      component = render(lob, price);

      expectComponent(component).not.toShowText(GL);
      expectComponent(component).not.toShowText(formattedPrice);
    });

    it('shows sorry message', () => {
      component = render(lob, price);

      expectComponent(component).toShowText(sorryMessage);
    });
  });

  describe('when has NO price AND NO lob', () => {
    it('does NOT show quote', () => {
      component = render(lob, price);

      expectComponent(component).not.toShowText(GL);
      expectComponent(component).not.toShowText(formattedPrice);
    });

    it('shows sorry message', () => {
      component = render(lob, price);

      expectComponent(component).toShowText(sorryMessage);
    });
  });

  let component;
  let lob;
  let price;
  const sorryMessage = 'Sorry, we could not get your quote';

  const rawPrice = 2500.43;
  const formattedPrice = '$2,500.43';

  const render = (lob, price) => shallow(<Quotes lob={lob} price={price} />);

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
