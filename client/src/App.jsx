import React, { useState } from 'react';
import Charts from './components/Charts';

function App() {
  const [showCharts, setShowCharts] = useState(false);

  return (
    <div>
      <h1
        onMouseEnter={() => setShowCharts(true)}
        onMouseLeave={() => setShowCharts(false)}
      >
        Nabin japrel
      </h1>
      {showCharts && <Charts />}
    </div>
  );
}

export default App;
