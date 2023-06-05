import React from 'react';
import CollectionsTabs from './Collection Tabs/CollectionTabs';
import {
    Card,
    Page,
    Tabs
} from "@shopify/polaris";
import { useState, useCallback } from 'react';
import './Collection.css';

const Collection = () => {

    // Collection Tabs
    const [collectionTab, setCollectionTab] = useState(0);

    const handleCollectionTab = useCallback(
        (selectedTabIndex) => setCollectionTab(selectedTabIndex),
        [],
    );

    const collectionTabs = [
        {
            id: 'all',
            content: 'All',
            panelID: 'all-content-1',
        },
        {
            id: 'dynamic',
            content: 'Dynamic',
            panelID: 'dynamic-content-1',
        },
        {
            id: 'traditional',
            content: 'Traditional',
            panelID: 'traditional-content-1',
        },
    ];

    return (
        <div className="collections">
            <Page>
                <div className="collectionHeader">
                    <p>Collections</p>
                </div>
                <Card>
                    <Card.Section>
                        <Tabs tabs={collectionTabs} selected={collectionTab} onSelect={handleCollectionTab}>
                            <CollectionsTabs content={collectionTabs[collectionTab].content}/>
                        </Tabs>
                    </Card.Section>
                </Card>
            </Page>
        </div>
    )
}

export default Collection
