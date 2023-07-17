import React from 'react'
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
let keyInc = 0;
export const ResultsPage = (props) => {
    keyInc++;
    console.log("uuid", uuidv4())
    return (
        <div className='container'>
            <div className='row'>
                <div className='resultcontainer'>
                    <div className='col-md-6'>
                        <div className='appheadermeaningtext'>Correct </div>
                        {props.answersCorrect.map((item) => {
                            return (
                                <div className='cardBody' key={uuidv4()}>{item}</div>
                            )
                        })}


                    </div>
                    <div className='col-md-6'>
                        <div className='appheadermeaningtext'>Incorrect</div>
                        {props.answersIncorrect.map((item) => {
                            return (
                                <div className='cardBody' key={uuidv4()}>{item}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
