import React from 'react'

function URLItem({ item }) {
  return (
    <li>
    <div className="myUserProfileIcon" style={{background: `url(${ item.profileImage || "/Logo.png" }) center/cover` }}></div>
    <div>
      <div className="myUserName">
        {item.short}
      </div>

      <p className="grey-text">
        {item.long}
      </p>
    </div>

    <div className="fa fa-eye">
      { item.clicks }
    </div>

  </li>
  )
}

export default URLItem
