import './App.css';
/* import { useState, useEffect } from 'react' */
/* import Card from './Card'
import axios from 'axios'; */

function App() {
  /* const [count, setCount] = useState(0);
  const [color, setColor] = useState("green") */
  /* useEffect(() => {
    document.title = `You clicked ${count} times`;
  }); */

  /* const changeColor = (e) => {
    setColor(e.target.value)
  } */
  return (
    <div className="App App-header">

      <div className='arriba'>
        <div className='primero'>
          <div className='a flex element'>a</div>
          <div className='b flex element'>b</div>
          <div className='c flex element'>c</div>
          <div className='e flex element'>e</div>
          <div className='f flex element'>f</div>
          <div className='g flex element'>g</div>
          <div className='h flex element'>h</div>
          <div className='i flex element'>i</div>
          <div className='j flex element'>j</div>
        </div>
        <div className='segundo'>
          <div className='grid'>
            <div className='k'>k</div>
            <div className='l'>l</div>
            <div className='m'>m</div>
            <div className='n'>n</div>
            <div className='o'>o</div>
            <div className='p'>p</div>
            <div className='q'>q</div>
            <div className='r'>r</div>
            <div className='s'>s</div>
          </div>
        </div>
      </div>

      <div className='abajo'>
        <div className='tercero'>
            <div className='a element'>a</div>
            <div className='b element'>b</div>
            <div className='c element'>c</div>
            <div className='d element'>a</div>
            <div className='e element'>b</div>
            <div className='f element'>c</div>
            <div className='g element'>a</div>
            <div className='h element'>b</div>
            <div className='i element'>c</div>
        </div>

        <div className='cuarto'>
          <div className='one element'>a</div>
          <div className='two element'>b</div>
          <div className='three element'>c</div>
          <div className='one element seven'>a</div>
          <div className='two element eight'>b</div>
          <div className='three element nine'>c</div>
          <div className='one element four'>a</div>
          <div className='two element five'>b</div>
          <div className='three element six'>c</div>
        </div>
      </div>
      {/* <header className="App-header">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>

        <Card color={color}></Card>
        <input type='text' value={color} onChange={e => changeColor(e)}></input>
      </header> */}
    </div>
  );
}

export default App;
