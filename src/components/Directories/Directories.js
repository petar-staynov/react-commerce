import React from 'react';
import MenuItem from "../MenuItem/MenuItem";
import {connect} from "react-redux";
import {selectDirectories} from "../../redux/directories/directoriesSelector";

import './Directories.scss';


const Directories = ({directories}) => {
    return (
        <div className='directories-menu'>
            {directories.map((dir) => {
                return <MenuItem key={dir.id} {...dir}/>
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    directories: selectDirectories(state),
});

export default connect(mapStateToProps)(Directories);