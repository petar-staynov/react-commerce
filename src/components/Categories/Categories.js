import React from 'react';
import MenuItem from "../MenuItem/MenuItem";
import {connect} from "react-redux";
import {selectCategories} from "../../redux/categories/categoriesSelector";

import './Categories.scss';


const Categories = ({categories}) => {
    return (
        <div className='categories-menu'>
            {categories.map((category, index) => {
                return <MenuItem key={category.id} {...category}/>
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    categories: selectCategories(state),
});

export default connect(mapStateToProps)(Categories);