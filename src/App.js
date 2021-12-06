import {useState} from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';

import './App.css';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { Gifs } from './components/Gifs/Gifs';
import { Results } from './components/Results/Results';
import { FooterPagePro } from './components/Footer/FooterPagePro';

function App() {

  //useState
  const [isDark, setDark] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`giphos__container ${isDark ? "dark" : ""}`}>

      <Header isDark={isDark} setDark={setDark}/>

      <Search 
      setSearchResults={setSearchResults}
      searchResults={searchResults}
      setLoading={setLoading}
      setError={setError}
      error={error}
      />


      <Results 
      searchResults={searchResults} 
      loading={loading} 
      error={error}
      />

      <Gifs />

      <FooterPagePro />
    </div>
  );
}

export default App;
