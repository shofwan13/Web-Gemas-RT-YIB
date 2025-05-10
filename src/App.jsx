import React from "react";
import Routes from "./routes/routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
const App = () => {
  return <Routes />;
};

export default App;
library.add(fas, fab, far);
