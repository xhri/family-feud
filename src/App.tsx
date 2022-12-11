import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import GameChooser from './common/components/gameChooser/GameChooser';

function App() {

  const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      primary:{
        main:'#1976d2',
        light: '#c8ffc8',
        dark: '#c8ffc8'
      },
      secondary:{
        main:'#8cd4f5'
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      }
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GameChooser />
      </ThemeProvider>
    </div>
  );
}

export default App;
