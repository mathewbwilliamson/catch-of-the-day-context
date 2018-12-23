import React from 'react'
import { render } from 'react-dom'
import { getFunName } from '../helpers'

// Getting data from an input: 
// 1. Create myInput = React.createRef() inside the class.
// 2. Create the reference in the form: ref = {this.myInput}
// 3. Access it in any bound function 

export default class StorePicker extends React.Component {
    constructor(props) {
        super(props)
        //When functions are bound, this gets bound to the class component
        this.goToStore = this.goToStore.bind(this)
    }
    myInput = React.createRef()

    goToStore(event) {
        // 1. Stop the form from submitting
        event.preventDefault();

        // 2. Get the text from that input
        // Uses ref (see above)
        const storeInput = this.myInput.value.value
        
        // 3. Change the page to /store/whatever-they-entered
        // We can do .push because StorePicker is a direct child comp of React Router
        this.props.history.push(`/store/${storeInput}`)
    }

    render() {
        return ( 
            <form className='store-selector' onSubmit={this.goToStore}> 
                {/* {this is a comment} */}
                <h2>Please Enter a Store:</h2>
                <input 
                    type='text' 
                    required 
                    ref={this.myInput}
                    placeholder="Store Name" 
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store ->></button>
            </form>
        )
    }
}