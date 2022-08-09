// Import components
import { Header, Footer, MainSection } from "./components";

import { useRecoilState } from "recoil";
import { darkModeAtom } from "./atoms/DarkModeAtom";
const App = () => {
  const [darkMode] = useRecoilState(darkModeAtom);

  return (
    <div className={`${darkMode ? "dark " : ""} dark-text-primary`}>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
};

export default App;
