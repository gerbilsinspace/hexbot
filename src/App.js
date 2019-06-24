import React, {useState, useEffect} from 'react';
import {css} from 'emotion';
import Color from 'color';
import useStoredState from 'react-captain/useStoredState';

const getColour = async () => {
  const response = await fetch('https://api.noopschallenge.com/hexbot');
  const {colors} = await response.json();

  return colors[0].value;
};

const App = () => {
  const [backgroundColour, setBackgroundColour] = useState('');
  const [backgroundHoverColour, setBackgroundHoverColour] = useState('');
  const [textShadow, setTextShadow] = useState('');
  const [textColour, setTextColour] = useState('');
  const [buttonCount, setButtonCount] = useState(0);
  const [savedColours, setSavedColours] = useStoredState('colours', []);

  useEffect(
    () => {
      getColour().then(c => {
        const colour = Color(c);
        const textColour = colour.isLight() ? '#000' : '#fff';
        const textShadow = colour.darken(0.4).string();

        setTextColour(textColour);
        setTextShadow(textShadow);
        setBackgroundColour(c);
      });
    },
    [buttonCount],
  );

  const handleButtonClick = () => {
    setButtonCount(buttonCount + 1);
  };

  const handleSaveButtonClick = () => {
    setSavedColours(Array.from(new Set([...savedColours, backgroundColour])));
  };

  const handleColourRemove = c => {
    setSavedColours(savedColours.filter(d => d !== c));
  };

  if (!backgroundColour) return null;

  return (
    <div
      className={css`
        background: ${backgroundColour};
        color: ${textColour};
        text-shadow: 1px 1px 2px ${textShadow};
        width: 100vw;
        height: 100vh;
        text-align: center;
      `}>
      <h1
        className={css`
          margin: 0;
          padding: 1em 0;
        `}>
        {backgroundColour}
      </h1>
      <button onClick={handleButtonClick}>Change Colour</button>
      <button onClick={handleSaveButtonClick}>Save</button>
      <div>
        <h2>Saved Colours</h2>
        <ul
          className={css`
            margin: 0;
            padding: 0;
          `}>
          {savedColours.map(c => (
            <li
              key={c}
              className={css`
                list-style: none;
                padding: 0;
                margin: 0;
              `}>
              {c}{' '}
              <span
                className={css`
                  display: inline-block;
                  width: 30px;
                  height: 30px;
                  background: ${c};
                  border: 1px solid #000;
                `}
              />{' '}
              <button onClick={() => handleColourRemove(c)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
