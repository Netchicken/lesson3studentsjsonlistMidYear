import React from 'react'

export const ResultsPage = (props) => {
    return (
        <div className='contaner'>
            <div className='row'>
                <div className='resultscontainer'>
                    <div className='col-md-6'>
                        <div className='appheadermeaningtext'>Correct </div>

                    </div>
                    <div className='col-md-6'>
                        <div className='appheadermeaningtext'>Incorrect</div>

                    </div>
                </div>
            </div>
        </div>
    )
}
