import './App.css';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import ListTodo from './components/ListTodo';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <TodoForm />
        <ListTodo />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
