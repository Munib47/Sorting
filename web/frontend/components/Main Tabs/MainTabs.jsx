import Welcome from '../Welcome';
import Collection from '../Collection';
import Instructions from '../Instructions';
import Setting from '../Setting';
import Plan from '../Plan';
import Contact from '../Contact';

function MainTabs(props) {
    if(props.content === 'Welcome') return <Welcome/>
    if(props.content === 'Collections') return <Collection/>
    if(props.content === 'Instructions') return <Instructions/>
    if(props.content === 'Settings') return <Setting/>
    if(props.content === 'Plans') return <Plan/>
    if(props.content === 'Contact Us') return <Contact/>
}

export default MainTabs
