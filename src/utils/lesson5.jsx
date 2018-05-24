import React, { Component, Fragment } from 'react';
import {
  FRONT_STACK,
  JS_LANG,
  TYPESCRIPT_LANG,
  RUBY_LANG,
} from './helpers/constants';

function formatLanguage(lang) {
  return {
    [JS_LANG]: 'Javascript',
    [TYPESCRIPT_LANG]: 'Typescript',
    [RUBY_LANG]: 'Ruby',
  }[lang];
}

export class FrameworkSuggester extends Component {
  constructor(props) {
    super(props);

    const { stack, language, year, action } = props;

    this.state = {
      stack,
      language,
      year,
    };
  }

  onClick = () => {
    const { action } = this.props;
    action(this.state);
  };

  renderJsFws() {
    const { year } = this.state;
  
    return (
      <ul className="js">
        {year < 2014 && (
          <Fragment>
            <li className="backbone">Backbone</li>
            <li className="ember">Ember</li>
          </Fragment>
        )}
  
        {year >= 2014 && (
          <Fragment>
            <li className="react">React</li>
            <li className="vue">Vue</li>
          </Fragment>
        )}
      </ul>
    );
  }
  
  renderFrontFws() {
    const { language } = this.state;
  
    const isJs = language === JS_LANG;
  
    return (
      <div className="front" data-stack="front">
        {isJs && this.renderJsFws()}
        {!isJs && <div className="angular">Angular</div>}
      </div>
    );
  }
  
  renderBackFws() {
    const { language } = this.state;
  
    const isJs = language === JS_LANG;
  
    return (
      <div className="back" data-stack="back">
        {isJs && (
          <ul className="js">
            <li className="node">Node</li>
          </ul>
        )}
        {!isJs && <div>Ruby on Rails</div>}
      </div>
    );
  }

  render() {
    const { stack, language, year } = this.state;

    const isFront = stack === FRONT_STACK;

    return (
      <div className="suggestions">
        {(language && year) && (
          <h1>{`Frameworks for ${formatLanguage(language)} (${year})`}</h1>
        )}
        {isFront && this.renderFrontFws()}
        {!isFront && this.renderBackFws()}
        <button onClick={this.onClick}>Click me!</button>
      </div>
    );
  }
};
