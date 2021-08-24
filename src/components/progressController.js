import PropTypes from 'prop-types';

const currentChapterInfo = (num, title) => {
  if (num && title) {
    return `Chapter ${num}: "${title}"`;
  }
  if (num) {
    return `Chapter ${num}`;
  }
  return `${title}`;
};
const ProgressController = (props) => {
  const { progress } = props;
  const { chapterNumber, chapterTitle } = progress;

  return (
    <>
      <span className="book-card__progress-controller__current-chapter-caption">
        Current Chapter
      </span>
      <span className="book-card__progress-controller__current-chapter">
        {currentChapterInfo(chapterNumber, chapterTitle)}
      </span>
      <button type="button" className="book-card__progress-controller__btn">
        Update Progress
      </button>
    </>
  );
};

ProgressController.defaultProps = {
  progress: {
    chapterNumber: null,
    chapterTitle: null,
  },
  chapterNumber: null,
  chapterTitle: null,
};

ProgressController.propTypes = {
  progress: PropTypes.shape,
  chapterNumber: PropTypes.number,
  chapterTitle: PropTypes.string,
};

export default ProgressController;
