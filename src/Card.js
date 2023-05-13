function App(props) {
  let {color} = props
  console.log(color)
  return (
    <div className="Card" style={{backgroundColor: `${color}`}}>
    </div>
  );
}

export default App;