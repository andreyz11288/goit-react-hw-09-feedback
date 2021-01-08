import s from './App.module.css';
import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
// import Notification from './components/Notification/Notification'

export default class App extends Component {
  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = e => {
    return e;
  };

  countPositiveFeedbackPercentage = e => {
    return Math.round((this.state.good * 100) / e);
  };

  leaveFeedback = e => {
    this.setState(prevState => {
      return { [e]: prevState[e] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.App}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
