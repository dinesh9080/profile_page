import EnableColorOnDarkAppBar from './nav'
import './App.css';
import Left from "./left"
import Right from './right';

function App() {
  return (
    <div className="App">
<EnableColorOnDarkAppBar/>
<div className='group'>
  <Left/>
  <Right/>
</div>
    </div>
  );
}

export default App;
