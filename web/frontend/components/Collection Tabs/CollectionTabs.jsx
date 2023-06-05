import AllCollections from './All';
import DynamicCollections from './Dynamic';
import TraditionalCollections from './Traditional';

function CollectionTabs(props) {
  if(props.content === 'All') return <AllCollections/>
  if(props.content === 'Dynamic') return <DynamicCollections/>
  if(props.content === 'Traditional') return <TraditionalCollections/>
}

export default CollectionTabs
