import React, { useState, useCallback } from 'react';
import {
    Card,
    TextField,
    IndexTable,
    Button,
    Icon,
    Filters,
    Select,
    useIndexResourceState
} from "@shopify/polaris";
import {
    SettingsMajor,
    PromoteMinor
} from '@shopify/polaris-icons';

const CollectionsContent = () => {

    const customers = [
        {
            id: '3416',
            url: '#',
            name: 'Mae Jemison',
            location: 'Decatur, USA',
            orders: 20,
            amountSpent: '$2,400',
        },
        {
            id: '2566',
            url: '#',
            name: 'Ellen Ochoa',
            location: 'Los Angeles, USA',
            orders: 30,
            amountSpent: '$140',
        },
    ];

    const resourceName = {
        singular: 'customer',
        plural: 'customers',
    };

    const { selectedResources, allResourcesSelected, handleSelectionChange } =
        useIndexResourceState(customers);
    const [taggedWith, setTaggedWith] = useState('');
    const [queryValue, setQueryValue] = useState(null);
    const [sortValue, setSortValue] = useState('titleA-Z');

    const handleTaggedWithChange = useCallback(
        (value) => setTaggedWith(value),
        [],
    );
    const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
    const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
    const handleClearAll = useCallback(() => {
        handleTaggedWithRemove();
        handleQueryValueRemove();
    }, [handleQueryValueRemove, handleTaggedWithRemove]);
    const handleSortChange = useCallback((value) => setSortValue(value), []);

    const filters = [
        {
            key: 'taggedWith',
            label: 'Tagged with',
            filter: (
                <TextField
                    label="Tagged with"
                    value={taggedWith}
                    onChange={handleTaggedWithChange}
                    autoComplete="off"
                    labelHidden
                />
            ),
            shortcut: true,
        },
    ];

    const appliedFilters = !isEmpty(taggedWith)
        ? [
            {
                key: 'taggedWith',
                label: disambiguateLabel('taggedWith', taggedWith),
                onRemove: handleTaggedWithRemove,
            },
        ]
        : [];

    const sortOptions = [
        { label: 'Title A-Z', value: 'titleA-Z' },
        { label: 'Title Z-A', value: 'titleZ-A' },
        { label: 'Date (Newest first)', value: 'newest' },
        { label: 'Date (Oldest first)', value: 'oldest' },
    ];

    // console.log(sortValue)

    const rowMarkup = customers.map(
        ({ id, name, location, orders, amountSpent }, index) => (
            <IndexTable.Row
                id={id}
                key={id}
                selected={selectedResources.includes(id)}
                position={index}
            >
                <IndexTable.Cell>
                    <span style={{ fontWeight: 'bold' }}>
                        {name}
                    </span>
                </IndexTable.Cell>
                <IndexTable.Cell>{location}</IndexTable.Cell>
                <IndexTable.Cell>
                    <Button primary onClick={() => { console.log('Click View') }}>
                        <Icon
                            source={PromoteMinor}
                            color="base"
                        />
                    </Button>
                </IndexTable.Cell>
                <IndexTable.Cell>
                    <Button primary onClick={() => { console.log('Click Settings') }}>
                        <Icon
                            source={SettingsMajor}
                            color="base"
                        />
                    </Button>
                </IndexTable.Cell>
            </IndexTable.Row>
        ),
    );

    return (
        <Card.Section>
            <div style={{ padding: '16px', display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <Filters
                        queryValue={queryValue}
                        filters={filters}
                        appliedFilters={appliedFilters}
                        onQueryChange={setQueryValue}
                        onQueryClear={handleQueryValueRemove}
                        onClearAll={handleClearAll}
                    />
                </div>
                <div style={{ paddingLeft: '0.25rem' }}>
                    <Select
                        labelInline
                        label="Sort by"
                        options={sortOptions}
                        value={sortValue}
                        onChange={handleSortChange}
                    />
                </div>
            </div>
            <IndexTable
                resourceName={resourceName}
                itemCount={customers.length}
                selectedItemsCount={
                    allResourcesSelected ? 'All' : selectedResources.length
                }
                onSelectionChange={handleSelectionChange}
                headings={[
                    { title: 'Title' },
                    { title: 'Products' },
                    { title: 'View' },
                    { title: 'Custom' },
                ]}
            >
                {rowMarkup}
            </IndexTable>
        </Card.Section>
    )
    function disambiguateLabel(key, value) {
        switch (key) {
            case 'taggedWith':
                return `Tagged with ${value}`;
            default:
                return value;
        }
    }

    function isEmpty(value) {
        if (Array.isArray(value)) {
            return value.length === 0;
        } else {
            return value === '' || value == null;
        }
    }
}

export default CollectionsContent
