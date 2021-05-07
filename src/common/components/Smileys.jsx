import smileyList from '../smileyList'
import './smileys.scss'

const Smileys = () => {
  return (
    <div className="smileys">
      <form>
        <span className="material-icons">&#xe8b6;</span>
        <input type="text" className="search-input" placeholder="Search emoji" />
      </form>
      <div className="smiley-container">
        {smileyList.map(item => (
          <div className="smiley">
            {item.smiley}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Smileys
