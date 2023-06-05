import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  Tabs,
  Icon,
  Tooltip,
  TextField,
  Select,
  ResourceList,
  ResourceItem,
  ButtonGroup,
  Button,
  IndexTable,
  Filters,
  useIndexResourceState,
} from "@shopify/polaris";
import {
  SettingsMajor,
  PromoteMinor
} from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';
import './index.css';
import MainTabComponent from '../components/Main Tabs/MainTabs';
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {

  //Main Tabs
  const [mainTab, setMainTab] = useState(0);

  const handleMainTab = useCallback(
    (selectedTabIndex) => setMainTab(selectedTabIndex),
    [],
  );

  const mainTabs = [
    {
      id: 'welcome',
      content: 'Welcome',
      panelID: 'welcome-content-1',
    },
    {
      id: 'collections',
      content: 'Collections',
      panelID: 'collections-content-1',
    },
    {
      id: 'instructions',
      content: 'Instructions',
      panelID: 'instructions-content-1',
    },
    {
      id: 'settings',
      content: 'Settings',
      panelID: 'settings-content-1',
    },
    {
      id: 'plans',
      content: 'Plans',
      panelID: 'plans-content-1',
    },
    {
      id: 'contact',
      content: 'Contact Us',
      panelID: 'contact-content-1',
    },
  ];


  return (
    <>
      <div className="tabHead">
        <Tabs tabs={mainTabs} selected={mainTab} onSelect={handleMainTab}>
          <MainTabComponent content={mainTabs[mainTab].content} />
        </Tabs>
        <div></div>
      </div>
    </>
  );

}
