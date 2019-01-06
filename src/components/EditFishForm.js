import React from 'react'
import {getFunName} from '../helpers';

class EditFishForm extends React.Component {
    handleChange = (event) => {
        // Bi-Directional Data Flow Process
        // In the form field, the value needs to be the value from state and there needs to be an onChange function
        // The onChange function lives in the current component
        // In the HandleChange function, we create a copy of the current object along with the new change in the object from the form
        // Then we use an updateState function. The updateState function will live in the Component where the state lives
        // The updateState function in App will look like: 
        //      Common update the state pattern: Copy, Update, Set
        //      1. Take a copy of the current state
        //      2. Update that state
        //      3. Set that to state
        // The UpdateState function will live in App then be passed down through all the intermediate components on its way to this component

        // We need to get values from EditFishForm, up to Inventory, then up to App where state lives
        // Update the fish
        // 1. Take a copy of the current fish
        const updatedFish = {
            ...this.props.fish, 
            // The below takes the name of the piece that is being changed, and uses that for the piece of the object to change
            // Very neat method! 
            [event.currentTarget.name]: event.currentTarget.value
        }
        this.props.updateFish(this.props.index, updatedFish)        
    }

    render() { 
        return ( 
            <div className='fish-edit'>
            <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
            <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
            <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status} >
                <option value='available'>Fresh!</option>
                <option value='unavailable'>Sold Out!</option>
            </select>
            <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
            <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
            <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
         )
    }
}
 
export default EditFishForm