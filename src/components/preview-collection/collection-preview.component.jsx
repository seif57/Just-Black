import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

function CollectionPreview({ title, items }) {
    return (
        <div className='collection-preview' >
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, index) => index < 4)
                        .map(({id,...otheritemprops}) => {
                            return <CollectionItem key={id} {...otheritemprops}/>
                        })
                }
            </div>
        </div>
    )
}

export default CollectionPreview