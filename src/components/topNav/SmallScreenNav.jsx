import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CONSTANTS } from '../../common/constants'

const SmallScreenNav = () => {
  const history = useHistory()
  const { bio } = useSelector(state => state.bio)

  return (
    <>
      <nav className="top-nav" id="smallScreenTopNav">
        <button><i className="fa fa-sun-o"></i></button>
        <span className="bio-name">{bio?.name || CONSTANTS.NAME}</span>
        <button><i className="material-icons">&#xe7fe;</i></button>
      </nav>
      <nav className="bottom-nav">
        <button type="button" aria-label="home" onClick={() => history.push("/")}>
          <i className="material-icons">&#xe88a;</i>
        </button>
        <button type="button" aria-label="search">
          <i className="material-icons">&#xe8b6;</i>
        </button>
        <button type="button" aria-label="add">
          <label htmlFor="addPhoto">
            <i className="material-icons">&#xe146;</i>
          </label>
        </button>
        <button type="button" aria-label="liked"><i className="fa fa-heart-o"></i></button>
        <button>
          <img src={bio?.profilePhotoUrl || CONSTANTS.PHOTOURL}
            className="nav-photo" alt="profile"
          />
        </button>
      </nav>
    </>
  )
}

export default SmallScreenNav
