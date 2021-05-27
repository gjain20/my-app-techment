import logo from './logo.svg';
import './App.scss';
import CustomModal from './CustomModal'
import Initialize from './components/Initialize'

function App() {
  return (
    <div className="App">
      <Initialize>
        <CustomModal />
      </Initialize>
    </div>
  );
}

export default App;
