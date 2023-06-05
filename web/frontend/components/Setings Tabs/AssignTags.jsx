import React from 'react';
import { useState, useCallback } from 'react';
import {
  Card,
  Grid,
  Select,
  Button,
  TextField
} from "@shopify/polaris";

const AssignTags = () => {

  //Tag Bestsellers
  const [tagBestsellersContent, setTagBestsellersContent] = useState("Enable");
  const [tagBestsellersPrimary, setTagBestsellersPrimary] = useState(true);

  const handleTagBestsellers = () => {
    if (tagBestsellersContent === "Enable") {
      setTagBestsellersContent("Disable");
      setTagBestsellersPrimary(false);
      setBestSellersTagNameEnable(false);
      setBestSellersTopEnable(false);
      setSelectBestsellersEnable(false);
      setLookbackPeriodEnable(false);
    } else {
      setTagBestsellersContent("Enable");
      setTagBestsellersPrimary(true);
      setBestSellersTagNameEnable(true);
      setBestSellersTopEnable(true);
      setSelectBestsellersEnable(true);
      setLookbackPeriodEnable(true);
    }
  }

  // Tag Bestsellers Tag Name
  const [bestSellersTagName, setBestSellersTagName] = useState('');

  const handleBestSellersTagName = useCallback(
    (value) => setBestSellersTagName(value),
    [],
  );

  //Tag Bestsellers Tag Name Disable / Enable
  const [bestsellersTagNameEnable, setBestSellersTagNameEnable] = useState(true);

  // Tag Bestsellers Top number
  const [numberOfTopBestSellerTag, setNumberOfTopBestSellerTag] = useState('50');

  const handleNumberOfTopBestSellerTag = useCallback(
    (value) => setNumberOfTopBestSellerTag(value),
    [],
  );

  //Tag Bestsellers Tag Top Number Disable / Enable
  const [bestsellersTopEnable, setBestSellersTopEnable] = useState(true);

  // Select Bestsellers By
  const [selectBestsellers, setSelectBestsellers] = useState("numberofsales");
  const handleSelectBestsellers = useCallback((value) => setSelectBestsellers(value), []);

  const selectBestsellersOption = [
    { label: "By Number of Sales", value: "numberofsales" },
    { label: "By Sales Amount", value: "salesamount" }
  ]

  // Select Bestsellers By Enable / Disable
  const [selectBestsellersEnable, setSelectBestsellersEnable] = useState(true);

  //Lookback Period
  const [lookbackPeriod, setLookbackPeriod] = useState("180");

  const handleLookbackPeriod = useCallback((newValue) => setLookbackPeriod(newValue), []);

  // Lookback Period enable / Disable
  const [lookbackPeriodEnable, setLookbackPeriodEnable] = useState(true);

  return (
    <>
      <Card title="Assign Tags">
        {/* Tag Bestsellers */}
        <Card.Section subdued>
          <Grid columns={{ sm: 3 }}>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Tag Bestsellers</h3>
              <p>Automatically assign a specific tag to top bestsellers. One tag only. Use this tag to create smart collections with bestsellers or exclude these products from smart collections. A maximum of 200 top products can be tagged.</p>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <div>
                <div style={{ paddingBottom: '10px' }}>
                  <Button primary={tagBestsellersPrimary} onClick={handleTagBestsellers}>{tagBestsellersContent}</Button>
                </div>
                <div>
                  <TextField
                    label="Tag Bestsellers"
                    labelHidden
                    value={bestSellersTagName}
                    onChange={handleBestSellersTagName}
                    placeholder='Tag Name'
                    helpText="Use letter, numbers, dashes or underscores only as recommended by Shopify"
                    disabled={bestsellersTagNameEnable}
                  />
                </div>
                <b style={{ fontSize: '13px', fontFamily: 'Arial, Helvetica, sans-serif' }}>Number of top bestsellers to tag</b>
                <div style={{ paddingTop: '10px' }}>
                  <TextField
                    label="Number of top bestsellers to tag"
                    labelHidden
                    value={numberOfTopBestSellerTag}
                    onChange={handleNumberOfTopBestSellerTag}
                    type='number'
                    min="1"
                    max="200"
                    disabled={bestsellersTopEnable}
                  />
                </div>
              </div>
            </Grid.Cell>
          </Grid>
        </Card.Section>
        {/* Select Bestsellers By */}
        <Card.Section>
          <Grid columns={{ sm: 3 }}>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Select Bestsellers By</h3>
              <p>Choose how the top bestsellers will be selected for tagging: by the number of sales or revenue.</p>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
              <Select
                label="Select Bestsellers By"
                options={selectBestsellersOption}
                onChange={handleSelectBestsellers}
                value={selectBestsellers}
                labelHidden
                disabled={selectBestsellersEnable}
              />
              <div style={{ paddingTop: '25px' }}>
                <TextField
                  label="Lookback Period"
                  value={lookbackPeriod}
                  type="number"
                  min="1"
                  max="365"
                  onChange={handleLookbackPeriod}
                  autoComplete="off"
                  disabled={lookbackPeriodEnable}
                />
              </div>
            </Grid.Cell>
          </Grid>
        </Card.Section>
      </Card>
    </>
  )
}

export default AssignTags
