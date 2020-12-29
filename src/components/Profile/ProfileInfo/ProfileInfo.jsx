import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>
            {/*<div className={s.imgBlock}>*/}
            {/*    <img src="https://csialtd.com.au/wp-content/themes/csia/dist/img/header/placeholder/header1.jpg"*/}
            {/*         alt="" width=""/>*/}
            {/*</div>*/}
            <div className="s.descriptionBlock">
                <img src={props.profile.photos.large} />
                <ProfileStatus status={"Hello my friends"} />
            </div>
        </div>
    );
};

export default ProfileInfo;