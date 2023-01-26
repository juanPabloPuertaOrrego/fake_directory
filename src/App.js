
import './App.css';
import  { TaskContextProvider } from './context/TaskContext';
import { TaskRoutes } from './routes/TaskRouter';

function App() {
  return (
    <TaskContextProvider>
      <TaskRoutes/>
    </TaskContextProvider>
  );
}

export default App;
