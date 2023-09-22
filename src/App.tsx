import { Header } from './components/Header';
import { Home } from './pages/Home';
import * as Sentry from "@sentry/react";

import './theme/global.css';
import { axeAccessibilityReporter } from './utils/axeAccessibilityReporter';

axeAccessibilityReporter()

Sentry.init({
  dsn: "https://1ca690c32dab081b029acee254f1dec0@o4505921743552512.ingest.sentry.io/4505921746698240",
  integrations: [new Sentry.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/ignitefeed-aszurar.netlify.app\//],
});

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
