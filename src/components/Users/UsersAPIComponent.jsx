import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersAPIComponent extends React.Component{
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <Users/>
    }
}





export default UsersAPIComponent;