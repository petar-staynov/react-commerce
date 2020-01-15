import React, {Component} from 'react';
import {connect} from 'react-redux';

import './CollectionsOverview.scss';

import CollectionPreview from "../CollectionPreview/CollectionPreview";
import {selectCollections} from "../../redux/collections/collectionsSelector";
import {firestore, getCollections} from "../../firebase/firebase.utils";
import {UpdateCollections} from "../../redux/collections/collectionActions";
import Spinner from "../Spinner/Spinner";

class CollectionsOverview extends Component {
    unsubscribeFromAuthSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromAuthSnapshot =
            collectionRef.onSnapshot(async snapshot => {
                const collectionsMap = getCollections(snapshot);
                updateCollections(collectionsMap);
            });
    }

    render() {
        const {collections} = this.props;

        return collections
            ? (
                <div className='collections-overview'>
                    {
                        Object.values(collections).map((collection) =>
                            <CollectionPreview key={collection.id} {...collection}/>)
                    }
                </div>)
            : <Spinner/>
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(UpdateCollections(collectionsMap))
});

const mapStateToProps = (state) => ({
    collections: selectCollections(state),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionsOverview);