import logo from './logo.svg';
import './App.css';
import { Title } from './components/Title';
import { ParentComponent } from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Title/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
