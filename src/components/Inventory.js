import React from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className='inventory'>
                <h2>Inventory</h2>
                <AddFishForm />
            </div> 
        );
    }
}
 
export default Inventory;