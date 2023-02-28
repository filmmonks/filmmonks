import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Page/Home/Home";
import Navbar from "./components/Shared/Navbar/Navbar";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
import "./index.css"
const theme = createTheme({
  palette: {
    primary: {
      main: "#0F100B",
    },
    secondary: {
      main: "#F45656",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily:'Inter',
    h1: {
      fontSize: "40px",
      fontWeight: "400",
    },
    h2: {
      fontSize: "30px",
      fontWeight: "400",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "400",
    },
    h4: {
      fontSize: "20px",
      fontWeight: "400",
    },
    h5: {
      fontSize: "18px",
      fontWeight: "400",
    },
    p:{
      fontSize: "16px",
      fontWeight: "400",
    }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="container">
        <nav>
          <Navbar />
        </nav>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
