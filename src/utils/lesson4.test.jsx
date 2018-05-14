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
      stack: null,
      language: null,
      year: null,
      action: jest.fn(),
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

        expectTextShown('Node');
      });
    });

    describe('ruby fws', () => {
      it('shows Ruby on Rails', () => {
        givenLanguage(RUBY_LANG);

        component = render();

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
        beforeEach(() => {
          givenYear(2010);
        });

        it('shows Backbone', () => {
          component = render();

          expectTextShown('Backbone');
        });

        it('shows Ember', () => {
          component = render();

          expectTextShown('Ember');
        });
      });

      describe('post 2014', () => {
        beforeEach(() => {
          givenYear(2014);
        });

        it('shows React', () => {
          component = render();

          expectTextShown('React');
        });

        it('shows Vue', () => {
          component = render();

          expectTextShown('Vue');
        });
      });
    });

    describe('typescript fws', () => {
      beforeEach(() => {
        givenLanguage(TYPESCRIPT_LANG);
      });

      it('shows angular', () => {
        component = render();

        expectTextShown('Angular');
      });
    });
  });

  describe('action', () => {
    it('triggers action on button click', () => {
      component = render();
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

  const expectBackEndFwsShown = () =>
    expect(component.find('[data-stack="back"]').length).toEqual(1);

  const expectFrontEndFwsShown = () =>
    expect(component.find('[data-stack="front"]').length).toEqual(1);

  const expectTextShown = text =>
    expect(
      component.findWhere(element => element.html().includes(text)).exists(),
    ).toBeTruthy();
});
