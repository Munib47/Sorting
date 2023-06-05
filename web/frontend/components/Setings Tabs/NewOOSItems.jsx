import React from 'react';
import { useState, useCallback } from 'react';
import {
  Card,
  Grid,
  Button,
  Select,
  TextField
} from "@shopify/polaris";

const NewOOSItems = () => {

  //Section Subdued
  const [sectionSubdued, setSectionSubdued] = useState(false);

  // Disable input
  const [enableInput, setEnableInput] = useState(true);

  //Button Text
  const [automatedResort, setAutomatedResort] = useState("Enable")

  //Button Primary/Basic
  const [primaryBtn, setPrimaryBtn] = useState(true);

  const handlePushNewProductsUp = () => {
    if (automatedResort === 'Enable') {
      setEnableInput(false);
      setAutomatedResort("Disable");
      setPrimaryBtn(false);
      setSectionSubdued(true);
    } else {
      setEnableInput(true);
      setAutomatedResort("Enable");
      setPrimaryBtn(true);
      setSectionSubdued(false);
    }
  }

  // Push New Products Up
  const [lookbackPeriod, setLookbackPeriod] = useState("10");
  
  const handleLookbackPeriod = useCallback((newValue) => setLookbackPeriod(newValue), []);

  //Sort New Product
  const [sortNewProduct, setSortNewProduct] = useState("byPrimaryOrder");
  const handleSortNewProduct = useCallback((value) => setSortNewProduct(value), []);

  const sortNewProductOption = [
    { label: "Newest at the Top", value: "newestTop" },
    { label: "Sort By Primary Order", value: "byPrimaryOrder" }
  ];

  return (
    <>
      <Card title='Push Up New Products'>
        {/* Push New Products Up */}
        <Card.Section subdued={sectionSubdued}>
          <Grid columns={{ sm: 3 }}>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Push New Products Up</h3>
              <p>Automatically push new products to the top of a collection. Set the number of days in the collection for the product to be considered new. Range 1-365 maximum.</p>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <Button onClick={handlePushNewProductsUp} primary={primaryBtn}>{automatedResort}</Button>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '20px' }}>
                <div style={{ width: '75%' }}>
                  <TextField
                    label="days"
                    labelHidden
                    value={lookbackPeriod}
                    type="number"
                    min="1"
                    max="365"
                    onChange={handleLookbackPeriod}
                    autoComplete="off"
                    disabled={enableInput}
                  />
                </div>
                <div style={{ fontSize: '15px' }}>days</div>
              </div>
            </Grid.Cell>
          </Grid>
        </Card.Section>
        {/* Sort New Products By */}
        <Card.Section>
          <Grid columns={{ sm: 3 }}>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Sort New Products By</h3>
              <p>Allows you to set a specific sort order for all new products at the top of the collection.</p>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <Select
                label="Sort New Product"
                options={sortNewProductOption}
                onChange={handleSortNewProduct}
                value={sortNewProduct}
                disabled={enableInput}
                labelHidden
              />
            </Grid.Cell>
          </Grid>
        </Card.Section>
        {/* Treat Back-to-Stock Items as New */}
        <Card.Section>
          <Grid columns={{ sm: 3 }}>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Treat Back-to-Stock Items as New</h3>
              <p>Set higher positions for products returning to stock depending on quantity. "Push New Products Up" must be enabled.</p>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <Button disabled={enableInput} primary>Enable</Button>
              <Select
                label="Sort New Product"
                options={sortNewProductOption}
                onChange={handleSortNewProduct}
                value={sortNewProduct}
                disabled={enableInput}
                labelHidden
              />
            </Grid.Cell>
          </Grid>
        </Card.Section>
      </Card>
    </>
  )
}

export default NewOOSItems