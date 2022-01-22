import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import "./collection-overview.styles.scss";

function CollectionOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
