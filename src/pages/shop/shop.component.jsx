import React from "react";
import { Route, Routes } from "react-router-dom";

import CollectionPage from "../collection/collection.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

function ShopPage() {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="*" element={<CollectionOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}

export default ShopPage;
