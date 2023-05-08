import { useState } from "react";
import { data } from "./data";
import './App.css'
function App() {
  const [newData, setnewData] = useState(data)
  const handleChange = (e) => {
    setnewData((prevState) => {
      return {
        ...prevState,
        artwork: {
          ...prevState.artwork,
          [e.target.name]: e.target.value
        }
      }
    })
  }
  return <div className="app">
    <div>
      <h1>ART WORK</h1>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={newData.name}
            onChange={(e) => setnewData((prevState) => {
              return {
                ...prevState,
                name: e.target.value
              }
            })}
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={newData.artwork.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={newData.artwork.city}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            type="text"
            name="image"
            value={newData.artwork.image}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <p>
            <a
              href="https://de.wikipedia.org/wiki/Datei:Blue_Nana_-_panoramio.jpg"
              target="_blank">{newData.artwork.title}
            </a> by {newData.name} (Located in {newData.artwork.city})
          </p>
          <div>
            <img
              src={newData.artwork.image}
              alt={newData.artwork.title} />
          </div>
        </div>
      </form>
    </div>
  </div>
}
export default App;

