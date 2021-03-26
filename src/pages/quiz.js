import React, { Component } from 'react'

import Quiz from '../components/Quiz'

export class quiz extends Component {
    render() {
        return (
            <div>
                <h1 className='quiz'>Challenge your knowledge</h1>
				<Quiz/>
            </div>
			
        )
    }
}

export default quiz