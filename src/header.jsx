import React from 'react'

const Header = () => {
  return (
<>
<div style={{display:'flex'}}>
  <div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/1200px-Disney_wordmark.svg.png" alt="" style={{width:"10%"}}/>
  </div>
  <div style={{display:'flex',justifyContent:'space-between',width:"1000px"}}>
    <div>
    <button>Home</button>
    </div>
    <div>
    <button>About</button>
    </div>
    <div>
    <button>Contact</button>
    </div>
    <div>
    <button>blog</button>
    </div>
    <div>
    <button>Profile</button>
    </div>
  </div>
</div>
</>
)
}
export default Header