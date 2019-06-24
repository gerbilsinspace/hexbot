import React, {useState, useEffect} from 'react';
import {css} from 'emotion';
import Color from 'color';
import useStoredState from 'react-captain/useStoredState';

const getColour = async () => {
  const response = await fetch('https://api.noopschallenge.com/hexbot');
  const {colors} = await response.json();

  return colors[0].value;
};

const ColourBlock = ({colour = '', onClick = () => {}}) => (
  <span
    onClick={() => onClick(colour)}
    className={css`
      display: inline-block;
      width: 30px;
      height: 30px;
      background: ${colour};
      border: 1px solid #000;
    `}
  />
);

const App = () => {
  const [backgroundColour, setBackgroundColour] = useState('');
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

  const handleColourClick = c => {
    const colour = Color(c);
    const textColour = colour.isLight() ? '#000' : '#fff';
    const textShadow = colour.darken(0.4).string();

    setTextColour(textColour);
    setTextShadow(textShadow);
    setBackgroundColour(c);
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
        display: flex;
      `}>
      <div
        className={css`
          flex-grow: 10;
        `}>
        <header>
          <h1
            className={css`
              margin: 0 20px;
              padding: 1em 0;
              display: inline-block;
            `}>
            {backgroundColour}
          </h1>
          <button onClick={handleSaveButtonClick}>Save</button>{' '}
          <button onClick={handleButtonClick}>Random Colour</button>
        </header>

        <article>
          <p>
            Darker:{' '}
            <ColourBlock
              colour={Color(backgroundColour)
                .darken(0.1)
                .string()}
              onClick={() =>
                handleColourClick(
                  Color(backgroundColour)
                    .darken(0.1)
                    .hex(),
                )
              }
            />
          </p>
          <p>
            Lighter:{' '}
            <ColourBlock
              colour={Color(backgroundColour)
                .lighten(0.1)
                .string()}
              onClick={() =>
                handleColourClick(
                  Color(backgroundColour)
                    .lighten(0.1)
                    .hex(),
                )
              }
            />
          </p>
          <p>
            Saturate (10%):{' '}
            <ColourBlock
              colour={Color(backgroundColour)
                .saturate(0.1)
                .string()}
              onClick={() =>
                handleColourClick(
                  Color(backgroundColour)
                    .saturate(0.1)
                    .hex(),
                )
              }
            />
          </p>
          <p>
            Desaturate (10%):{' '}
            <ColourBlock
              colour={Color(backgroundColour)
                .desaturate(0.1)
                .string()}
              onClick={() =>
                handleColourClick(
                  Color(backgroundColour)
                    .desaturate(0.1)
                    .hex(),
                )
              }
            />
          </p>

          <h2>Related Colours</h2>
          <p>
            Complementary:{' '}
            <ColourBlock
              colour={Color(backgroundColour)
                .rotate(180)
                .string()}
              onClick={() =>
                handleColourClick(
                  Color(backgroundColour)
                    .rotate(180)
                    .hex(),
                )
              }
            />
          </p>
          <p>
            Triadic Complementary:{' '}
            <ColourBlock
              colour={Color(backgroundColour)
                .rotate(120)
                .string()}
              onClick={() =>
                handleColourClick(
                  Color(backgroundColour)
                    .rotate(120)
                    .hex(),
                )
              }
            />
            <ColourBlock
              colour={Color(backgroundColour)
                .rotate(-120)
                .string()}
              onClick={() =>
                handleColourClick(
                  Color(backgroundColour)
                    .rotate(-120)
                    .hex(),
                )
              }
            />
          </p>
        </article>
      </div>
      <div
        className={css`
          flex-grow: 1;
        `}>
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
              <ColourBlock onClick={() => handleColourClick(c)} colour={c} />{' '}
              <button onClick={() => handleColourRemove(c)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
