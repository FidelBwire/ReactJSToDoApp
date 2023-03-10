import './App.css';
import Nav from './components/nav/Nav';
import Search from './components/search_div/Search';
import Jobs from './components/job_div/Jobs';

function App() {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Nav/>
      <Search />
      <Jobs />
    </div>
  );
}

export default App;
