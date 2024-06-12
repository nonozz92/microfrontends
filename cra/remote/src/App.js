import React from 'react';
const RemoteButton = React.lazy(() => import('./Button'));
const SharedHeader = React.lazy(() => import('sharedComponent/Header'));
const SharedFooter = React.lazy(() => import('sharedComponent/Footer'));
import RemoteLanding from './RemoteLanding';

const App = () => (
  <div>
    <React.Suspense fallback="Loading Header">
      <SharedHeader />
    </React.Suspense>
    <RemoteLanding title="Remote App" />
    <React.Suspense fallback="Loading Footer">
      <SharedFooter />
    </React.Suspense>
  </div>
);

export default App;
