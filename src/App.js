import React from 'react';
import ReactDOM from 'react-dom';

// import global styles
import GlobalStyle from './components/GlobalStyle';
// Import routes
import Pages from './pages';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Pages />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
