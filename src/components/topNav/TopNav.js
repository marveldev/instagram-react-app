const TopNav = () => {
  return (
    <nav className="top-nav">
      <div>
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo" />
      </div>
      <div>
        <input type="text" className="search-input" placeholder="Search" />
      </div>
      <div className="top-nav-buttons">
        <button type="button"><i className="glyphicon glyphicon-home"></i></button>
        <button type="button"><i className="fa fa-send"></i></button>
        <button type="button"><i class="fa fa-compass"></i></button>
        <button type="button"><i class="fa fa-heart-o"></i></button>
      </div>
    </nav>
  )
}

export default TopNav
