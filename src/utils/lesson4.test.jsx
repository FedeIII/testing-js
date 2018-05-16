import React from 'react';
import { shallow } from 'enzyme';
import {
  FRONT_STACK,
  BACK_STACK,
  JS_LANG,
  TYPESCRIPT_LANG,
  RUBY_LANG,
} from './helpers/constants';
import { FrameworkSuggester } from './lesson4';

describe('Lesson 4', () => {
  beforeEach(() => {
    props = {
      action: jest.fn(),
      stack: null,
      language: null,
      year: 2018,
    };
  });

  describe('back end fws', () => {
    beforeEach(() => {
      givenStack(BACK_STACK);
    });

    it('shows back end fws', () => {
      component = render();

      expectBackEndFwsShown();
    });

    describe('js fws', () => {
      it('shows Node', () => {
        givenLanguage(JS_LANG);

        component = render();

        expectTitleToEqual(`Frameworks for Javascript (2018)`);
        expectTextShown('Node');
      });
    });

    describe('ruby fws', () => {
      it('shows Ruby on Rails', () => {
        givenLanguage(RUBY_LANG);

        component = render();

        expectTitleToEqual(`Frameworks for Ruby (2018)`);
        expectTextShown('Ruby on Rails');
      });
    });
  });

  describe('front end fws', () => {
    beforeEach(() => {
      givenStack(FRONT_STACK);
    });

    it('shows front end fws', () => {
      component = render();

      expectFrontEndFwsShown();
    });

    describe('js fws', () => {
      beforeEach(() => {
        givenLanguage(JS_LANG);
      });

      describe('pre 2014', () => {
        it('shows Backbone and Ember', () => {
          givenYear(2010);

          component = render();

          expectTitleToEqual(`Frameworks for Javascript (2010)`);
          expectTextShown('Backbone');
          expectTextShown('Ember');
        });
      });

      describe('post 2014', () => {
        it('shows React and Vue', () => {
          givenYear(2014);

          component = render();

          expectTitleToEqual(`Frameworks for Javascript (2014)`);
          expectTextShown('React');
          expectTextShown('Vue');
        });
      });
    });

    describe('typescript fws', () => {
      it('shows angular', () => {
        givenLanguage(TYPESCRIPT_LANG);

        component = render();

        expectTitleToEqual(`Frameworks for Typescript (2018)`);
        expectTextShown('Angular');
      });
    });
  });

  describe('on button click', () => {
    it('executes the action', () => {
      givenStack(FRONT_STACK);
      givenLanguage(JS_LANG);
      givenYear(2018);
      component = render();

      onButtonClick();

      expect(props.action).toHaveBeenCalledWith({
        stack: FRONT_STACK,
        language: JS_LANG,
        year: 2018,
      });
    });
  });

  let props;
  let component;

  const render = () => shallow(<FrameworkSuggester {...props} />);

  const givenStack = stack => {
    props.stack = stack;
  };

  const givenLanguage = lang => {
    props.language = lang;
  };

  const givenYear = year => {
    props.year = year;
  };

  const expectTitleToEqual = expectedTitle =>
    expect(component.find('h1').text()).toEqual(expectedTitle);

  const expectBackEndFwsShown = () =>
    expect(component.find('[data-stack="back"]').length).toEqual(1);

  const expectFrontEndFwsShown = () =>
    expect(component.find('[data-stack="front"]').length).toEqual(1);

  const expectTextShown = text =>
    expect(
      component.findWhere(element => element.html().includes(text)).exists(),
    ).toBeTruthy();

  const onButtonClick = () => component.find('button').simulate('click');
});
