import smileyList from '../smileyList'
import './smileys.scss'

const Smileys = () => {
  return (
    <div className="smileys">
      {smileyList.map(item => (
        <div>
          {item.smiley}
        </div>
      ))}
    </div>
  )
}

export default Smileys
