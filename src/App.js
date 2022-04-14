import { useState } from 'react'
import Colors from './components/Colors'
import Values from 'values.js'
import './App.css'


function App() {
  const [color, setColor] = useState("#4B145B")
  const [value, setValue] = useState(new Values('#4B145B').all(10))
  const [error, setError] = useState(false)
  

  const handleSubmit = e => {
    e.preventDefault()

    try {
      setValue(new Values(color).all(10))
      setError(false)

    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  return (
    <section className="App">
      <div className="app__wrapper">
        <div className="app__header">
          <form className="app__form" onSubmit={ handleSubmit }>
            <label htmlFor="colorInput">Color Generator</label>
            <input type="text" className={`${error ? 'error' : ''}`} name='colorInput' value={ color } onChange={ (e) => setColor(e.target.value) } />
            <button type='submit' style={{ backgroundColor: `${color}` }}>Generate</button>
          </form>
        </div>

        <div className="app__body">
          { value.map((item, idx) => <Colors key={ idx } colors={ item } />) }
        </div>
      </div>
    </section>
  )
}

export default App
