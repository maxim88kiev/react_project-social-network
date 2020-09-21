import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.imgBlock}>
                <img src="https://csialtd.com.au/wp-content/themes/csia/dist/img/header/placeholder/header1.jpg"
                     alt="" width=""/>
            </div>
            <div className="s.descriptionBlock">
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;