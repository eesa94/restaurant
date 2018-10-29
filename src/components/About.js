import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container section-container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi modi vitae reprehenderit, accusantium rem voluptatem quo quaerat suscipit, quos itaque nostrum ab maxime perferendis totam illum placeat deserunt adipisci?</p>
        </div>
    )
}

export default Rainbow(About)