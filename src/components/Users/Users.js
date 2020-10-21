import React from "react";
import userPhoto from "../../assets/images/User_icon-cp.png";
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleFollowingProggress} from "../../redux/users-reducer";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }




    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {
                    props.onPageChanged(p);
                }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button disabled={props.followingInProggress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProggress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "e57fee85-fdc2-49ab-8efe-26f668ccf4b9"
                                        }
                                    })
                                        .then(response => {
                                            if(response.data.resultCode == 0){
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingProggress(false, u.id);
                                        });

                                }}> Unfollow </button>
                                : <button disabled={props.followingInProggress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProggress(true, u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "e57fee85-fdc2-49ab-8efe-26f668ccf4b9"
                                        }
                                    })
                                        .then(response => {
                                            if(response.data.resultCode == 0){
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingProggress(false, u.id);
                                        });

                                }}> Follow </button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
        </div>)
        }
    </div>

};


export default Users;