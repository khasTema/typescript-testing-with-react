import React, { useState } from 'react'
import { AddInput, AddToListProps } from '../types/types'

const AddToList:React.FC<AddToListProps> = ({people, setPeople}) => {

    const [input, setInput] = useState<AddInput>({
        name: '',
        age: '',
        note: '',
        img: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
         setInput({
            ...input,
            [e.target.name]: e.target.value
         })
    }
    // use :void when function do not return anything

    const handleClick = () :void => {
        if(!input.name || !input.age || input.img){return};
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note

            }
        ])

        setInput({
            name: '',
            age: '',
            note: '',
            img: ''
        })
    }

  return (
    <div className='AddToList'>
       <input 
            type='text'
            placeholder='Name'
            name='name'
            className='AddToList-input'
            value={input.name}
            onChange={handleChange}
       />
       <input 
            type='text'
            placeholder='Age'
            name='age'
            className='AddToList-input'
            value={input.age}
            onChange={handleChange}
       />
       <input 
            type='text'
            placeholder='Image Url'
            name='img'
            className='AddToList-input'
            value={input.img}
            onChange={handleChange}
       />
       <textarea 
            placeholder='Note'
            name='note'
            className='AddToList-input'
            value={input.note}
            onChange={handleChange}
       />
       <button
            className='AddToList-btn'
            onClick={handleClick}
       >
            Add to List
        </button>

    </div>
  )
}

export default AddToList