import React from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../config/colorPalette';

const style = {
  padding: '20px',
  backgroundColor: theme.dark,
  borderRadius: '10px',
  border: '2px solid',
  borderColor: theme.medium,
  color: theme.light,
};

const imageStyle = {
  display: 'inline',
  margin: '20px',
  width: '400px',
};

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: theme.light,
    },
  },
});

const Welcome = ({ onCloseClick }) => {
  return (
    <div className="welcome" style={style}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src="welcome.png" style={imageStyle} />
      </div>

      <p>
        GhostWriter lets you co-write with your favorite authors from
        beyond the grave. Whether it be a sonnet with Shakespeare, a novel with
        Jane Austen, or an angry internet comment with Martin Luther - the only
        limit is you (and the ghost's) imagination.
      </p>
      <p>
        Your selected ghost will append their contribution every time you submit
        text.
      </p>
      <p>
        Click any word in the composition, and the ghost will replace it with a
        new one.
      </p>
      <p>
        Use 'Find New Ghosts' to search{' '}
        <a
          style={{ color: 'cyan' }}
          href="https://www.gutenberg.org/"
          target="_blank"
        >
          Project Gutenberg
        </a>
        , an online library of public domain works. Your selection will be
        downloaded and processed into a new ghost, ready to write with you.
      </p>
      <p>
        <span style={{ color: theme.complement }}>
          <b>Warning:</b> The texts have not been filtered in any way. Unsavory
          (and possibly offensive) language in the original literature may be
          generated by this application. This also applies to any texts
          downloaded from Project Gutenberg.
        </span>
      </p>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <div>
          <ThemeProvider theme={buttonTheme}>
            <Button onClick={onCloseClick} variant="outlined">
              Let's go!
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
