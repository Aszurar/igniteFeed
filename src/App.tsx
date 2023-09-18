import { Header } from './components/Header';
import { Home } from './pages/Home';

import './theme/global.css';
import { axeAccessibilityReporter } from './utils/axeAccessibilityReporter';

axeAccessibilityReporter()

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
