import './App.css';

function App() {
  const myStr = "Hello";
  const a = 2.5;
  const myLink = "https://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>Hello Cyrus</h1>
        <h1>{myStr}</h1>
        <h1>{a}</h1>
        <a href={myLink}>My Link</a>
      </div>
    </div>
  );
}

export default App;