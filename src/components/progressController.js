import react from 'react';

const currentChapterInfo = (num, title) => {
  if (num && title) {
    return `Chapter ${num}: "${title}"`;
  } else if (num) {
    return `Chapter ${num}`;
  } else {
    return `${title}`;
  }
}
const ProgressController = (props) => {
  const { chapterNumber, chapterTitle } = props.progress;

  return (
    <>
      <span className="book-card__progress-controller__current-chapter-caption">
        Current Chapter</span>
      <span className="book-card__progress-controller__current-chapter">
        {currentChapterInfo(chapterNumber, chapterTitle)}</span>
      <button type="button" className="book-card__progress-controller__btn">
        Update Progress</button>
    </>
  );
}

export default ProgressController;
