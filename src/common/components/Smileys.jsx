import { useState } from 'react'
import smileyList from '../smileyList'
import './smileys.scss'

const Smileys = ({ setPostCaptionValue, postCaptionValue }) => {
  const [filteredSmiley, setFilteredSmiley] = useState(smileyList)

  const filterSmileyList = value => {
    const newSmileyList = smileyList.filter((smiley => smiley.description.includes(value)))
    setFilteredSmiley(newSmileyList)
  }

  return (
    <div className="smileys">
      <form>
        <span className="material-icons">&#xe8b6;</span>
        <input type="text"
          className="search-input"
          placeholder="Search emoji"
          onChange={event => filterSmileyList(event.target.value)}
        />
      </form>
      <div className="smiley-container">
        {filteredSmiley.map((item, index) => (
          <button key={index}
            onClick={() => setPostCaptionValue(postCaptionValue + item.smiley)}
            className="smiley"
          >
            {item.smiley}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Smileys
