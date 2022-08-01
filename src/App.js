// Import components
import { MenuSidebar, ToolsSidebar, MainSection, Header } from './components';

const App = () => {
  return (
    <div className="grid overflow-hidden grid-cols-10 grid-rows-1">
      <Header />
      <MenuSidebar />
      <MainSection />
      <ToolsSidebar />
    </div>
  );
};

export default App;
