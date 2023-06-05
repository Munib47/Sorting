import React from 'react'
import { useState, useCallback } from 'react'
import {
    Card,
    Grid,
    Button,
    Select,
    TextField,
    Page
} from "@shopify/polaris";

const GeneralSettings = () => {

    // Auto Resort
    //Section Subdued
    const [sectionSubdued, setSectionSubdued] = useState(false);

    // Turn On Button
    const [selectEnable, setSelectEnable] = useState(true);

    //Button Text
    const [automatedResort, setAutomatedResort] = useState("Activate")

    //Button Primary/Basic
    const [primaryBtn, setPrimaryBtn] = useState(true);

    const handleSelectEnable = () => {
        if (automatedResort === 'Activate') {
            setSelectEnable(false);
            setAutomatedResort("Deactivate");
            setPrimaryBtn(false);
            setSectionSubdued(true);
        } else {
            setSelectEnable(true);
            setAutomatedResort("Activate");
            setPrimaryBtn(true);
            setSectionSubdued(false);
        }
    }

    // console.log(sectionSubdued, selectEnable, automatedResort, primaryBtn)

    // Select Option Hours
    const [hourSelected, setHourSelected] = useState("01");
    const handleHourChange = useCallback((value) => setHourSelected(value), []);

    const hourOption = [
        { label: "01", value: "01" },
        { label: "02", value: "02" },
        { label: "03", value: "03" },
        { label: "04", value: "04" },
        { label: "05", value: "05" },
        { label: "06", value: "06" },
        { label: "07", value: "07" },
        { label: "08", value: "08" },
        { label: "09", value: "09" },
        { label: "10", value: "10" },
        { label: "11", value: "11" },
        { label: "12", value: "12" },
        { label: "13", value: "13" },
        { label: "14", value: "14" },
        { label: "15", value: "15" },
        { label: "16", value: "16" },
        { label: "17", value: "17" },
        { label: "18", value: "18" },
        { label: "19", value: "19" },
        { label: "20", value: "20" },
        { label: "21", value: "21" },
        { label: "22", value: "22" },
        { label: "23", value: "23" }
    ];

    //Select option Minutes
    const [minuteSelected, setMinuteSelected] = useState("00");
    const handleMinuteChange = useCallback((value) => setMinuteSelected(value), []);

    const minuteOption = [
        { label: "00", value: "00" },
        { label: "15", value: "15" },
        { label: "30", value: "30" },
        { label: "45", value: "45" }
    ];

    // console.log(hourSelected, minuteSelected)

    // Select Primary Sort Order
    const [primarySortOrder, setPrimarySortOrder] = useState("revenuegenerated");
    const handlePrimarySortOrder = useCallback((value) => setPrimarySortOrder(value), []);

    const primarySortOrderOption = [
        { label: "Revenue Generated - High to Low", value: "revenuegenerated" },
        { label: "Number of Sales - High to Low", value: "numberofsaleshigh" },
        { label: "Number of Sales - Low to High", value: "numberofsaleslow" },
        { label: "Date - Newest to Oldest", value: "newest" },
        { label: "Date - Oldest to Newest", value: "oldest" },
        { label: "Inventory Qty - High to Low", value: "inventoryhigh" },
        { label: "Inventory Qty - Low to High", value: "inventorylow" },
        { label: "Price - High to Low", value: "pricehigh" },
        { label: "Price - Low to High", value: "pricelow" },
        { label: "Discount - High to Low", value: "discounthigh" },
        { label: "Discount - Low to High", value: "discountlow" },
        { label: "Product Title - A-Z", value: "titleascending" },
        { label: "Random Order", value: "random" },
        { label: "Manual", value: "manual" },
        { label: "Gross Profit - High to Low", value: "grossprofithigh" },
        { label: "Gross Profit - Low to High", value: "grossprofitlow" }
    ]

    // console.log(primarySortOrder)

    //Lookback Period
    const [lookbackPeriod, setLookbackPeriod] = useState("180");

    const handleLookbackPeriod = useCallback((newValue) => setLookbackPeriod(newValue), []);

    // console.log(lookbackPeriod)

    // Select Order Status
    const [orderStatus, setOrderStatus] = useState("allOrders");
    const handleOrderStatus = useCallback((value) => setOrderStatus(value), []);

    const orderStatusOption = [
        { label: "All Orders", value: "allOrders" },
        { label: "Paid Orders Only", value: "paidOrdersOnly" }
    ];

    // console.log(orderStatus)

    // Select Product Date To Use
    const [productDateToUse, setProductDateToUse] = useState("creationDate");
    const handleProductDateToUse = useCallback((value) => setProductDateToUse(value), []);

    const productDateToUseOption = [
        { label: "Creation Date", value: "creationDate" },
        { label: "Publish Date", value: "publishDate" },
        { label: "Update Date", value: "updateDate" },
    ];

    // console.log(productDateToUse)

    // Select Discount Value
    const [discountValue, setDiscountValue] = useState("absolute[$]");
    const handleDiscountValue = useCallback((value) => setDiscountValue(value), []);

    const discountValueOption = [
        { label: "Absolute - [$]", value: "absolute[$]" },
        { label: "Percentage - [%]", value: "percentage[%]" }
    ];

    // console.log(discountValue)

    // Discount button
    const [discountBtn, setDiscountBtn] = useState("Enable");
    const [discountPrimary, setDiscountPrimary] = useState(true);

    const enableDiscount = () => {
        if (discountBtn === "Enable") {
            setDiscountPrimary(false);
            setDiscountBtn("Disable");
        } else {
            setDiscountPrimary(true);
            setDiscountBtn("Enable");
        }
    }

    // console.log(discountBtn, discountPrimary)

    // AVerage Margin 
    const [averageMargin, setAverageMargin] = useState("20");

    const handleAverageMargin = useCallback((newValue) => setAverageMargin(newValue), []);

    // console.log(averageMargin)

    // Gross profit Value
    const [grossProfit, setGrossProfit] = useState("absolute[$]");
    const handleGrossProfit = useCallback((value) => setGrossProfit(value), []);

    const grossProfitOption = [
        { label: "Absolute - [$]", value: "absolute[$]" },
        { label: "Percentage - [%]", value: "percentage[%]" }
    ];

    // console.log(grossProfit)

    // Save button
    const [saveBtn, setSaveBtn] = useState('Save');

    const handleSaveBtn = () => {
        if (saveBtn === 'Save') {
            setSaveBtn('Saved');
        }
    }

    // console.log(saveBtn, handleSaveBtn)

    // Reset Default Button
    const resetDefault = () => {
        setSaveBtn('Save');
    }

    return (
        <>
            <Card >
                {/* Daily Automated re-Sort */}
                <Card.Section subdued={sectionSubdued}>
                    <Grid columns={{ sm: 3 }}>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Daily Automated re-Sort</h3>
                            <p>Automatically re-sort products within selected collection(s). Set the time for this process. Calculating positions for products takes time, so it is recommended to choose the quietest hours for your store.<strong>Your timezone is: (GMT +05:00).</strong></p>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <Button onClick={handleSelectEnable} primary={primaryBtn}>{automatedResort}</Button>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '115px', paddingTop: '50px' }}>
                                <Select
                                    label="Hours"
                                    options={hourOption}
                                    onChange={handleHourChange}
                                    value={hourSelected}
                                    labelHidden
                                    disabled={selectEnable}
                                />
                                <Select
                                    label="Minutes"
                                    options={minuteOption}
                                    onChange={handleMinuteChange}
                                    value={minuteSelected}
                                    labelHidden
                                    disabled={selectEnable}
                                />
                            </div>
                        </Grid.Cell>
                    </Grid>
                </Card.Section>
                {/* Primary Sort Order */}
                <Card.Section>
                    <Grid columns={{ sm: 3 }}>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Primary Sort Order</h3>
                            <p>Default/global sorting rule for ordering products in a collection. Applied to automated and manual sorting.</p>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <Select
                                label="Primary Sort Order"
                                options={primarySortOrderOption}
                                onChange={handlePrimarySortOrder}
                                value={primarySortOrder}
                                labelHidden
                            />
                        </Grid.Cell>
                    </Grid>
                </Card.Section>
                {/* Lookback Period */}
                <Card.Section>
                    <Grid columns={{ sm: 3 }}>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Lookback Period</h3>
                            <p>How many days to look back to analyze. Used for sorting by revenue, by the number of sales and by product views. Range 1-365 days maximum.</p>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ width: '75%' }}>
                                    <TextField
                                        label="Lookback Period"
                                        labelHidden
                                        value={lookbackPeriod}
                                        type="number"
                                        min="1"
                                        max="365"
                                        onChange={handleLookbackPeriod}
                                        autoComplete="off"
                                    />
                                </div>
                                <div style={{ fontSize: '15px' }}>days</div>
                            </div>
                        </Grid.Cell>
                    </Grid>
                </Card.Section>
                {/* Order Status */}
                <Card.Section>
                    <Grid columns={{ sm: 3 }}>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Order Status</h3>
                            <p>Type of orders to use for revenue generated and the number of sales calculations.</p>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <Select
                                label="Order Status"
                                options={orderStatusOption}
                                onChange={handleOrderStatus}
                                value={orderStatus}
                                labelHidden
                            />
                        </Grid.Cell>
                    </Grid>
                </Card.Section>
                {/* Product Date to Use */}
                <Card.Section>
                    <Grid columns={{ sm: 3 }}>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Product Date to Use</h3>
                            <p>Used for determining the correct date when sorting from newest to oldest and vice versa.</p>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <Select
                                label="Product Date to Use"
                                options={productDateToUseOption}
                                onChange={handleProductDateToUse}
                                value={productDateToUse}
                                labelHidden
                            />
                        </Grid.Cell>
                    </Grid>
                </Card.Section>
                {/* Discount Value */}
                <Card.Section>
                    <Grid columns={{ sm: 3 }}>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Discount Value</h3>
                            <p>Type of the discount to use for calculation. Used when sorted by discount only.</p>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <Select
                                label="Discount Value"
                                options={discountValueOption}
                                onChange={handleDiscountValue}
                                value={discountValue}
                                labelHidden
                            />
                        </Grid.Cell>
                    </Grid>
                </Card.Section>
                {/* Include Discounts */}
                <Card.Section>
                    <Grid columns={{ sm: 3 }}>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Include Discounts</h3>
                            <p>Type of the discount to use for calculation. Used when sorted by discount only.</p>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <Button primary={discountPrimary} onClick={enableDiscount}>{discountBtn}</Button>
                        </Grid.Cell>
                    </Grid>
                </Card.Section>
                {/* Average Margin */}
                <Card.Section>
                    <Grid columns={{ sm: 3 }}>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Average Margin</h3>
                            <p>This value is used to sort products by Gross Profit. Gross profit is calculated based on products cost. If products cost is undefined, this margin will be applied to the price.</p>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ width: '75%' }}>
                                    <TextField
                                        label="Average Margin"
                                        labelHidden
                                        value={averageMargin}
                                        type="number"
                                        min="0"
                                        max="100"
                                        onChange={handleAverageMargin}
                                        autoComplete="off"
                                    />
                                </div>
                                <div style={{ fontSize: '15px' }}><strong>%</strong></div>
                            </div>
                        </Grid.Cell>
                    </Grid>
                </Card.Section>
                {/* Gross Profit Value */}
                <Card.Section>
                    <Grid columns={{ sm: 3 }}>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Gross Profit Value</h3>
                            <p>Type of the gross profit to use for calculation. Used when sorted by gross profit only.</p>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <Select
                                label="Gross Profit Value"
                                options={grossProfitOption}
                                onChange={handleGrossProfit}
                                value={grossProfit}
                                labelHidden
                            />
                        </Grid.Cell>
                    </Grid>
                </Card.Section>
                {/* Google Analytics */}
                <Card.Section>
                    <Grid columns={{ sm: 3 }}>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 1, lg: 3, xl: 3 }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '500', textDecoration: 'underline' }}>Google Analytics</h3>
                            <p>Connect Google Analytics for your Shopify store. Used for 'sorting by views' at the moment only.</p>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 4, sm: 4, md: 1, lg: 9, xl: 9 }}>
                            <p style={{ padding: '5px' }}>Connecting your store's Google Analytics account allows you to use behavioural data in the process of sorting products. We will be adding more options for sorting products using Google Anlytics data in the future.</p>
                            <Button primary>Authorize Access</Button>
                        </Grid.Cell>
                    </Grid>
                </Card.Section>
            </Card>

            {/* Save Setting */}
            <Card sectioned>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={resetDefault}>Reset All to Default</Button>
                    <Button primary onClick={handleSaveBtn}>{saveBtn}</Button>
                </div>
            </Card>
        </>
    )
}

export default GeneralSettings
