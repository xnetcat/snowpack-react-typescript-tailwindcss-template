import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

// Render App
ReactDOM.render(
  <>
    <div className="flex h-screen">
      <h1 className="m-auto text-center">
        Snowpack React Typescript TailwindCSS
      </h1>
    </div>
  </>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
