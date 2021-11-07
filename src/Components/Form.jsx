import React from 'react'
import '../Styles/Form.css'

const Form = ({handlerValue, handlerRequestApi}) => {
    return (
            <form
                onSubmit={(e)=>handlerRequestApi(e)} 
                className='form-container'>
                <input
                    onChange={({target})=>handlerValue(target)} 
                    type="text" 
                    placeholder="type in..."
                />
                <button type="submit">
                    <i class="fa fa-search"></i>
                </button>
            </form>
    )
}

export default Form
