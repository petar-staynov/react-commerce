import React from 'react';
import {Route} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {fetchCollectionsStart} from "../../../redux/collections/collectionsActions";
import {selectIsCollectionFetching} from "../../../redux/collections/collectionsSelector";
import {connect} from 'react-redux';

import CollectionsOverview from "../../CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";


class ShopPage extends React.Component {
    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    }

    render() {
        let {match, collections, ...otherProps} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionName`} component={CollectionPage}/>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopPage)