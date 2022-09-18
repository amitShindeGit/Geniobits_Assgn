import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import classes from '../Styles/Home.module.css'
import Form from '../Components/Form'
import SIdeBarComp from '../Components/SIdeBarComp'


const Home = ({user}) => {
  const [sideBar, setSideBar] = useState("");

    const setSideBarHandler = (text) => {
      setSideBar(text);
    }

  return (
    <div className={classes.mainDiv}>
        <SideBar setSideBarHandler={setSideBarHandler} user={user} />
        {sideBar === "Admin" &&
          <div className={classes.midDIv}>
            <Form />
        </div>
        }
        {sideBar !== "Admin" &&
          <div className={classes.midSideBarCompDIv}>
            <SIdeBarComp text={sideBar} />
        </div>}
    </div>
  )
}

export default Home