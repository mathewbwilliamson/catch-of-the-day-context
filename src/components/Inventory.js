import React from 'react'
import PropTypes from 'prop-types'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'
import Login from './Login'
import base, {firebaseApp} from '../base'
import firebase from 'firebase'

// [matt]: Stopped at 14 minutes
class Inventory extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        addFish: PropTypes.func,
        loadSampleFishes: PropTypes.func
    }

    state = {
        uid: null,
        owner: null,
        loading: false
    }

    // TODO: Can I create a loading circle or icon? How does that work? 

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    loading: true
                })
                this.authHandler({ user })
            }
        })
    }

    authHandler = async (authData) => {
        // 1. Look up the current store in the firebase database
        const store = await base.fetch(this.props.storeId, { context : this })
        console.log('[matt] store', store)
        

        // 2. If there is no owner, claim it
        if (!store.owner) {
            // Save it as our own
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            })
        }
        // 3. Set the state of the Inventory component to reflect the current user 
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid,
            loading: false
        })
        console.log('[matt] authData', authData)        
    }

    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]()
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler)
        
    }

    logout = async () => {
        console.log('[matt] Logging Out')
        await firebase.auth().signOut()
        this.setState({
            uid: null,
        })
    }

    render() { 
        const logout = <button onClick={this.logout}>Log Out!</button>

        // 1. Check if they are logged in
        if (!this.state.loading && !this.state.uid) {
            return <Login authenticate={this.authenticate}/>
        }

        // 2. Check if they are not the owner of that store
        if (this.state.uid !== this.state.owner) {
            return (
                <div>
                    <p>Sorry, you are not the owner.</p>
                    {logout}
                </div>
            )
        }

        // 3. They must be the owner
        return ( 
            <div className='inventory'>
                <h2>Inventory</h2>
                {logout}
                {Object.keys(this.props.fishes).map(key => 
                    <EditFishForm 
                        key={key} 
                        index={key}
                        fish={this.props.fishes[key]} 
                        updateFish={this.props.updateFish} 
                        deleteFish={this.props.deleteFish}
                    />
                )}
                <AddFishForm 
                    addFish={this.props.addFish} 
                />
                <button onClick={this.props.loadSampleFishes}>
                    Load Sample Fishes
                </button>
            </div> 
        );
    }
}
 
export default Inventory