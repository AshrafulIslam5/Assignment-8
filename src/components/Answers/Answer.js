import React from 'react';
import './Answer.css';

const Answer = () => {
    return (
        <div className='ground'>
            <div className="_1">
                <h2>How React Works?</h2>
                <p><strong>Answer: </strong>React is a Library of JavaScript and almost everyone of us know that. As much as i have understood by now, React uses Components as parts of the Website and it really helps Programmers in finding where which code or function is used. Also it looks like there is Html in react but I have learned that all that html we wtite in react changes into components and codes of the specific element and we use that created element inside our website.</p>
            </div>
            <div className="_1">
                <h2>props vs state?</h2>
                <p><strong>Answer: </strong>Props are very useful while state helps us in storing data in a component. But, here we can see that state cannot be used here while props are actually used for sending data to another component. So we can say that if we want to re-use any particular element inside that particular component, we can use state. But if we want to send data or function or array or any element, we can send props through calling the component and giving it properties and that's props and state...</p>
            </div>
        </div>
    );
};

export default Answer;