
import './App.css';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';
import FavoriteColor from './components/FavoriteColor';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ErrorBoundary>
          <BuggyCounter />
      </ErrorBoundary>
      <FavoriteColor />
      </header>
    </div>
  );
}

export default App;
