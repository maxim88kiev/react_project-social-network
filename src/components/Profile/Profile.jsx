import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return(
        <div className={s.content}>
            <img src="https://csialtd.com.au/wp-content/themes/csia/dist/img/header/placeholder/header1.jpg" alt=""/>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                    <div>
                        post 3
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;