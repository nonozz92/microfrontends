import React from 'react';
const SharedHeader = React.lazy(() => import('sharedComponent/Header'));
const SharedFooter = React.lazy(() => import('sharedComponent/Footer'));
import HostLanding from './HostLanding';
import Posts from './Posts';

const App = () => (
  <div>
    <React.Suspense fallback="Loading Header">
      <SharedHeader />
    </React.Suspense>
    <HostLanding title="Host App" />
    <Posts />
    <React.Suspense fallback="Loading Footer">
      <SharedFooter />
    </React.Suspense>
  </div>
);

export default App;
