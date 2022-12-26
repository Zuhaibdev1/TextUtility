import { useState } from "react";
import "./App.css";
// import About from "./components/about";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("Dark Mode Has Been Enable", "success");
      document.title = "Text Utility - Dark Mode";
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode Has Been Enable", "success");
      document.title = "Text Utility - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Text Utility"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact={true} path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter The Text To Analyze Below"
          mode={mode}
        />
        {/* </Route> */}
        {/* <Route exact path="/about"> */}
        {/* <About/> */}
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
