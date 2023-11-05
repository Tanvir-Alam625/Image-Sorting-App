import { DndProvider } from 'react-dnd';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Gallery from './components/Gallery';
// import { Container } from './components/Container';

function App() {
  return (
    <div className='p-0 lg:p-2 flex justify-center items-center'>
      {/* <Container /> */}
      <DndProvider debugMode={true} backend={HTML5Backend}>
        <Gallery />
      </DndProvider>
    </div>
  );
}

export default App;
