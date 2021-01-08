import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const key = Object.keys(options);

  return (
    <div className={s.buttons}>
      <button
        type="button"
        className={s.button}
        onClick={() => onLeaveFeedback(key[0])}
      >
        Good
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => onLeaveFeedback(key[1])}
      >
        Neutral
      </button>
      <button
        type="button"
        className={s.button}
        onClick={() => onLeaveFeedback(key[2])}
      >
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
