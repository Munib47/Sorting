import React from 'react'
import { useState } from 'react';
import {
  Page,
  Grid,
  Card,
  List,
  Icon,
  Button
} from "@shopify/polaris";
import {
  CollectionsMajor,
  DataVisualizationMajor,
  ClockMajor,
  EditMajor,
  ThumbsUpMajor,
  FolderDownMajor
} from '@shopify/polaris-icons';
import './Plan.css';

const Plan = () => {

  // Demo Btn
  const [demoBtn, setDemoBtn] = useState('Go Demo');
  const [demoDisabled, setDemoDisabled] = useState(false)
  function handleDemoClick() {
    setDemoBtn('Selected');
    setDemoDisabled(true);
    setBasicDisabled(false);
    setBasicBtn('Go Basic')
  }

  // Basic Btn
  const [basicBtn, setBasicBtn] = useState('Go Basic');
  const [basicDisabled, setBasicDisabled] = useState(false);
  function handleBasicClick() {
    setBasicBtn('Selected');
    setBasicDisabled(true);
    setDemoDisabled(false);
    setDemoBtn('Go Demo');
  }

  return (
    <div className='plan'>
      <Page>
        <div className="planHeader">
          <p>Plan Page</p>
          <p>You may upgrade or downgrade your plan at any time.</p>
        </div>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <Card title="Demo (Free)" sectioned>
              <hr />
              <Card.Section title="Limits">
                <List>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={CollectionsMajor} color="base" /></span><p>Collection</p>
                      </div>
                      <div>All</div>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={DataVisualizationMajor} color="base" /></span><p>Metrics</p>
                      </div>
                      <div>All</div>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={ClockMajor} color="base" /></span><p>Processing Schedule</p>
                      </div>
                      <div>60 minutes</div>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={EditMajor} color="base" /></span><p>Custom attributes</p>
                      </div>
                      <div>no</div>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={ThumbsUpMajor} color="base" /></span><p>Product boost</p>
                      </div>
                      <div>no</div>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={ClockMajor} color="base" /></span><p>Advanced scheduling</p>
                      </div>
                      <div>no</div>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={FolderDownMajor} color="base" /></span><p>Export</p>
                      </div>
                      <div>no</div>
                    </div>
                  </List.Item>
                </List>
              </Card.Section>
              <div className='btn'>
                <Button id='demo' primary onClick={handleDemoClick} disabled={demoDisabled} >{demoBtn}</Button>
              </div>
            </Card>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <Card title="Basic ($50)" sectioned>
              <hr />
              <Card.Section title="Limits">
                <List>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={CollectionsMajor} color="base" /></span><p>Collection</p>
                      </div>
                      <div>All</div>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={DataVisualizationMajor} color="base" /></span><p>Metrics</p>
                      </div>
                      <div>All</div>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={ClockMajor} color="base" /></span><p>Processing Schedule</p>
                      </div>
                      <div>10 minutes</div>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={EditMajor} color="base" /></span><p>Custom attributes</p>
                      </div>
                      <div>yes</div>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={ThumbsUpMajor} color="base" /></span><p>Product boost</p>
                      </div>
                      <div>yes</div>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={ClockMajor} color="base" /></span><p>Advanced scheduling</p>
                      </div>
                      <div>yes</div>
                    </div>
                  </List.Item>
                  <List.Item>
                    <div className='listItems'>
                      <div className='iconContent'>
                        <span><Icon source={FolderDownMajor} color="base" /></span><p>Export</p>
                      </div>
                      <div>yes</div>
                    </div>
                  </List.Item>
                </List>
              </Card.Section>
              <div className='btn'>
                <Button id='demo' primary onClick={handleBasicClick} disabled={basicDisabled} >{basicBtn}</Button>
              </div>
            </Card>
          </Grid.Cell>
        </Grid>
      </Page>
    </div>
  )
}

export default Plan