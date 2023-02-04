// Import data
import { postings } from './postings';

// Import components
import Sidebar from './components/sidebar';
import Gallery from './components/gallery';

import './App.css';
import SearchBar from './components/searchbar';
import Directory from './components/directory';

function App() {
  const type = 'furniture';
  return (
    <div>
      <div className="App">
        <Sidebar {...{ type }} />
        <SearchBar {...{ type }} />
        <Directory />
        <Gallery {...{ postings }} />
      </div>
    </div>
  );
}

export default App;
