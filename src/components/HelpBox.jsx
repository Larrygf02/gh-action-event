import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  // some comment, is not necesary to deploy
  // commment to deploy
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
