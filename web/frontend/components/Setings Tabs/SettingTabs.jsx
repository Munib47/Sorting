import GeneralSettings from "./GeneralSettings";
import NewOOSItems from "./NewOOSItems";
import SortByTag from "./SortByTag";
import AssignTags from "./AssignTags";
import Collection from "./Collection";

function SettingTabs(props) {
    if(props.content === 'General') return <GeneralSettings/>
    if(props.content === 'New & OOS Items') return <NewOOSItems/>
    if(props.content === 'Sort by Tags') return <SortByTag/>
    if(props.content === 'Assign Tags') return <AssignTags/>
    if(props.content === 'Collection') return <Collection/>
}

export default SettingTabs
