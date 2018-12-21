import React from 'react'
import { render } from 'react-dom'

export default class StorePicker extends React.Component {
    render() {
        return ( 
            <form className='store-selector' action=''> 
                {/* {this is a comment} */}
                <h2>Please Enter a Store:</h2>
                <input type='text' required placeholder="Store Name" />
                <button type="submit">Visit Store ->></button>
            </form>
        )
    }
}