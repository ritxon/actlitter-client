import React, { Component } from 'react'
import CardItem from './CardItem'
import './cards.css'

export class Cards extends Component {
    render() {
        return (
            <div className='cards'>
                <h1>This could be a good title.</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem 
                            src='images/img-1.jpg'
                            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nobis accusantium aut illum atque commodi dolorem ipsum vitae tenetur laudantium ad dicta illo quis nemo quos quidem eveniet, nisi nam! Numquam?"
                            label="Label"
                            path='/login'
                            />
                            <CardItem 
                            src='images/img-2.jpg'
                            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nobis accusantium aut illum atque commodi dolorem ipsum vitae tenetur laudantium ad dicta illo quis nemo quos quidem eveniet, nisi nam! Numquam?"
                            label="Label"
                            path='/login'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem 
                            src='images/img-9.jpg'
                            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nobis accusantium aut illum atque commodi dolorem ipsum vitae tenetur laudantium ad dicta illo quis nemo quos quidem eveniet, nisi nam! Numquam?"
                            label="Label"
                            path='/login'
                            />
                            <CardItem 
                            src='images/img-7.jpg'
                            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nobis accusantium aut illum atque commodi dolorem ipsum vitae tenetur laudantium ad dicta illo quis nemo quos quidem eveniet, nisi nam! Numquam?"
                            label="Label"
                            path='/login'
                            />
                            <CardItem 
                            src='images/img-6.jpg'
                            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nobis accusantium aut illum atque commodi dolorem ipsum vitae tenetur laudantium ad dicta illo quis nemo quos quidem eveniet, nisi nam! Numquam?"
                            label="Label"
                            path='/login'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards
