import * as React from 'react';

import Layout from './components/Layout';

import { Link, Route, Routes } from 'react-router-dom';

const Planets = React.lazy(() => import('planets/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
