import React from "react";
// import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useParams } from "react-router-dom";

import "./collection.styles.scss";

function CollectionPage() {
  let { collectionId } = useParams();
  const { title, items } = useSelector(selectCollection(collectionId));

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
