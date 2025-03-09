const Card = ({ title }) => {
  return <h2>{title}</h2>;
};

const App = () => {
  return (
    <>
      <h2>hello</h2>
      <Card title="Movie 1" />
      <Card title="Movie 2" />
      <Card title="Movie 3" />
    </>
  );
};

export default App;
