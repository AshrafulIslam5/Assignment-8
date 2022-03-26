import './App.css';
import Answer from './components/Answers/Answer';
import Header from './components/Header/Header';
import Page from './components/Page/Page';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h2>*You can only select upto 4 books // 1 book at a time*</h2>
      <Page></Page>
      <Answer></Answer>
    </div>
  );
}

export default App;
