import logo from './logo.svg';
import './App.css';
import BasicTable from './Table/Table';
import CustomPaginationActionsTable from './Table/Table2';


function App() {
  return (
    <div className="App">
     
      <h1>Get Supermind</h1>
      <BasicTable/>
      {/* <CustomPaginationActionsTable/>  */}
    </div>
  );
}

export default App;
