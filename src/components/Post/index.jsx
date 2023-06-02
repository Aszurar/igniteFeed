import PropTypes from 'prop-types';

export function Post({ author, content }) {
  console.log('teste');
  return (
    <>
      <strong>{author}</strong>
      <p>{content}</p>
    </>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
