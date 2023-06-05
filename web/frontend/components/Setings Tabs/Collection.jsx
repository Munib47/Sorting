import React from 'react';
import { useState, useCallback } from 'react';
import {
  Card,
  Grid,
  Select,
  Button,
  TextField
} from "@shopify/polaris";

const Collection = () => {

  //'Sort By' for Disabled Collections
  const [disabledCollection, setDisabledCollection] = useState("manual");
  const handleDisabledCollection = useCallback((value) => setDisabledCollection(value), []);

  const DisabledCollectionOption = [
    { label: "Leave as Manual", value: "manual" },
    { label: "Best Selling", value: "bestselling" },
    { label: "Date - Newest to Oldest", value: "datenewest" },
    { label: "Date - Oldest to Newest", value: "dateoldest" },
    { label: "Price - High to Low", value: "pricehigh" },
    { label: "Price - Low to High", value: "pricelow" },
    { label: "Product Title - A-Z", value: "titleascending" },
    { label: "Product Title - Z-A", value: "titledescending" }
  ]

  // console.log(disabledCollection);

  //Auto Enable New Collections
  const [autoEnableContent, setAutoEnableContent] = useState("Enable");
  const [autoEnablePrimary, setAutoEnablePrimary] = useState(true);

  const handleAutoEnableNewCollection = () => {
    if (autoEnableContent === "Enable") {
      setAutoEnableContent("Disable");
      setAutoEnablePrimary(false);
    } else {
      setAutoEnableContent("Enable");
      setAutoEnablePrimary(true);
    }

    // console.log(`Auto Enable New Collection ${autoEnableContent}`);
  }

  //Re-Enable Disabled Collections
  const [reEnableContent, setReEnableContent] = useState("Enable");
  const [reEnablePrimary, setReEnablePrimary] = useState(true);

  const handleReEnableDisabledCollection = () => {
    if (reEnableContent === "Enable") {
      setReEnableContent("Disable");
      setReEnablePrimary(false);
    } else {
      setReEnableContent("Enable");
      setReEnablePrimary(true);
    }

    // console.log(`Clicked Re-Enable Disabled Collection ${reEnableContent}`);
  }

  //Collection Metafield
  const [metafieldCotent, setMetafieldCotent] = useState("Enable");
  const [metafieldPrimary, setMetafieldPrimary] = useState(true);
  const [metafieldInputEnable, setMetafieldInputEnable] = useState(true);

  const handleCollectionMetafield = () => {
    if (metafieldCotent === "Enable") {
      setMetafieldCotent("Disable");
      setMetafieldPrimary(false);
      setMetafieldInputEnable(false);
    } else {
      setMetafieldCotent("Enable");
      setMetafieldPrimary(true);
      setMetafieldInputEnable(true);
      setCollectionMetafield("resort_status")
    }

    // console.log(`Clicked Re-Enable Disabled Collection ${reEnableContent}`);
  }

  // Collection Metafield Input
  const [collectionMetafield, setCollectionMetafield] = useState(
    'resort_status',
  );

  const handleTextFieldChange = useCallback(
    (value) => setCollectionMetafield(value),
    [],
  );

  // Save button
  const [saveBtn, setSaveBtn] = useState('Save');

  const handleSaveBtn = () => {
    if (saveBtn === 'Save') {
      setSaveBtn('Saved');
    }
  }

  // Reset Default Button
  const resetDefault = () => {
    setSaveBtn('Save');
  }

  return (
    <>
      <Card title="Collection Setting">
        {/* 'Sort By' for Disabled Collections */}
        <Card.Section subdued>
          <Grid columns={{ sm: 3 }}>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>'Sort By' for Disabled Collections</h3>
              <p>Set a default sort order in Shopify when a collection was disabled on the main page of the app. <strong>Will apply only IF a collection was previously enabled for reSort.</strong></p>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <Select
                label="Primary Sort Order"
                options={DisabledCollectionOption}
                onChange={handleDisabledCollection}
                value={disabledCollection}
                labelHidden
              />
            </Grid.Cell>
          </Grid>
        </Card.Section>
        {/* Auto Enable New Collections */}
        <Card.Section>
          <Grid columns={{ sm: 3 }}>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Auto Enable New Collections</h3>
              <p>Automatically enable new collections to be re-sorted by the app. New collections will use global sorting rules and will be re-sorted within the next scheduled run.</p>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <Button primary={autoEnablePrimary} onClick={handleAutoEnableNewCollection}>{autoEnableContent}</Button>
            </Grid.Cell>
          </Grid>
        </Card.Section>
        {/* Re-Enable Disabled Collections */}
        <Card.Section subdued>
          <Grid columns={{ sm: 3 }}>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Re-Enable Disabled Collections</h3>
              <p>When a sort order is changed through Shopify admin - the app can't access this collection. Turn on to re-enable these collections in the app automatically.</p>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <Button primary={reEnablePrimary} onClick={handleReEnableDisabledCollection}>{reEnableContent}</Button>
            </Grid.Cell>
          </Grid>
        </Card.Section>
        {/* Collection Metafield */}
        <Card.Section>
          <Grid columns={{ sm: 3 }}>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Collection Metafield</h3>
              <p>Add a metafield to the collection if it's enabled for re-sort in the app. Useful for theme development to modify the collection's page using the metafield value. The value for enabled collections is <b>1</b>. The value for disabled collections is <b>0</b>.</p>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <Button primary={metafieldPrimary} onClick={handleCollectionMetafield}>{metafieldCotent}</Button>
              <TextField
                label="Metafield name"
                value={collectionMetafield}
                onChange={handleTextFieldChange}
                maxLength={30}
                helpText="Letters, numbers, underscores, dashes only. 30 chars max."
                showCharacterCount
                disabled={metafieldInputEnable}
              />
            </Grid.Cell>
          </Grid>
        </Card.Section>
      </Card>
      {/* Save Settigns */}
      <Card sectioned>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={resetDefault}>Reset All to Default</Button>
          <Button primary onClick={handleSaveBtn}>{saveBtn}</Button>
        </div>
      </Card>
    </>
  )
}

export default Collection
