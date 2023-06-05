import React from 'react'
import { useState, useCallback } from 'react'
import {
  Page,
  Banner,
  Card,
  Tabs
} from "@shopify/polaris";
import './Setting.css';
import SettingTabs from './Setings Tabs/SettingTabs';

const Setting = () => {

  // Tabs
  const [settingTab, setSettingTab] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSettingTab(selectedTabIndex),
    [],
  );

  const settingTabs = [
    {
      id: 'general',
      content: 'General',
      panelID: 'general-content-1',
    },
    {
      id: 'newAndOosItem',
      content: 'New & OOS Items',
      panelID: 'new-oos-item-content-1',
    },
    {
      id: 'sortTags',
      content: 'Sort by Tags',
      panelID: 'sort-tags-content-1',
    },
    {
      id: 'assignTags',
      content: 'Assign Tags',
      panelID: 'assign-tags-content-1',
    },
    {
      id: 'collection',
      content: 'Collection',
      panelID: 'collection-content-1',
    },
  ];

  

  return (
    <div>
      <Page>
        <div className="settingHeader">
          <p>Settings</p>
        </div>
        <Banner status='info'>
          <p>Customize global sorting rules for your collections. All enabled collections will inherit these sorting rules. You can override your preferences per collection from the main page.</p>
        </Banner>
        <br />
        <Card>
          <Tabs tabs={settingTabs} selected={settingTab} onSelect={handleTabChange}>
          </Tabs>
        </Card>
        <br />
            <SettingTabs content={settingTabs[settingTab].content} />
        {/* General Settings */}
        
      </Page>
    </div>
  )
}

export default Setting
