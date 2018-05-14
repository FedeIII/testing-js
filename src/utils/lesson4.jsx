import React, { Fragment } from 'react';
import { FRONT_STACK, JS_LANG } from './helpers/constants';

function renderJsFws(props) {
  const { year } = props;

  return (
    <ul className="js">
      {(year < 2014) && (
        <Fragment>
          <li className="backbone">Backbone</li>
          <li className="ember">Ember</li>
        </Fragment>
      )}

      {(year >= 2014) && (
        <Fragment>
          <li className="react">React</li>
          <li className="vue">Vue</li>
        </Fragment>
      )}
    </ul>
  );
}

function renderFrontFws(props) {
  const { language } = props;

  const isJs = language === JS_LANG;

  return (
    <div className="front" data-stack="front">
      {isJs && renderJsFws(props)}
      {!isJs && (
        <div className="angular">Angular</div>
      )}
    </div>
  );
}

function renderBackFws(props) {
  const { language } = props;

  const isJs = language === JS_LANG;

  return (
    <div className="back" data-stack="back">
      {isJs && (
        <ul className="js">
          <li className="node">Node</li>
        </ul>
      )}
      {!isJs && (
        <div>Ruby on Rails</div>
      )}
    </div>
  );
}

export function FrameworkSuggester(props) {
  const { stack, action } = props;

  const isFront = stack === FRONT_STACK;

  return (
    <div className="suggestions">
      {isFront && renderFrontFws(props)}
      {!isFront && renderBackFws(props)}
      <button onClick={action()}>Click me!</button>
    </div>
  );
}
