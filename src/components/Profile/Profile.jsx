import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div>
            <img src="https://csialtd.com.au/wp-content/themes/csia/dist/img/header/placeholder/header1.jpg" alt=""/>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;