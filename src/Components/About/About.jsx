import React from 'react'
import './About.css'
import image2 from '../images/image-1.jpg'

function About() {
    return (
        <div className="container-fluid">
            <h2 className="text-1">About KliQ Pizza</h2>
            <hr />
            <div className="row">
                <div className="col-md-5">
                    <img src={image2} className="about-img" alt="pizza" />
                </div>
                <div className="col-md-7">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis deleniti, expedita excepturi magni ratione. Veritatis iste eius nihil nulla sapiente facere, totam, animi ex repellat adipisci hic amet, reiciendis officiis dolorem suscipit beatae aliquam maxime aliquid. Voluptas, voluptates excepturi architecto quia nobis doloribus voluptatibus placeat neque sed itaque ratione similique, numquam molestiae ex optio, deleniti temporibus voluptate delectus odio eos enim distinctio? Iure minima atque ratione nemo blanditiis facere nostrum necessitatibus eum. Soluta ex repellat, rerum facilis minima, sed vel sapiente numquam atque iste suscipit veritatis, eaque voluptatem inventore molestias porro esse obcaecati consequuntur maiores nihil saepe id consequatur! Pariatur explicabo ullam voluptates assumenda erum facilis minima, sed vel sapiente numquam atque iste suscipit veritatis, eaque voluptatem inventore molestias porro esse obcaecati consequuntur maiores nihil saepe id consequatur! Pariatur explicabo ullam voluptates assumenda
                    erum facilis minima, sed vel sapiente numquam atque iste suscipit veritatis, eaque voluptatem inventore molestias porro esse obcaecati consequuntur maiores nihil saepe id consequatur! Pariatur explicabo ullam voluptates assumenda
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
