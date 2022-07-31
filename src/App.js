import './App.scss';

// Import components
import { MenuSidebar, ToolsSidebar, MainSection } from './components';

const App = () => {
  return (
    <div className="app">
      <MenuSidebar />
      <MainSection />
      <ToolsSidebar />
    </div>
  );
};

export default App;
