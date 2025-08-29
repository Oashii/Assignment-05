1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById selects only one element by its unique id. getElementsByClassName selects 
        all the elements that has same class which is called.
        querySelector returns the first element that matches the css selector and querySelectorAll
        returns all elements that matches.



2. How do you create and insert a new element into the DOM?

Answer: I use createElement() to create a new element and use appendChild to insert into DOM.



3. What is Event Bubbling and how does it work?

Answer: Event bubbling is a process in DOM where an event starts from the targeted element 
        and then bubbles upwards through its parent elements until the root.
        Ex- if we click a button inside a div, the button event will be triggered then the 
        div's event the its parent event and it goes upwards till the root.




4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event delegation is a technique where instead of adding event listener to all child 
        elements we attach a single event listener to a the parent element.
        Event Delegation reduces memory usage, improves performance.




5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() stops the default action of an event. like preventing page auto refresh
        or a form from auto submitting.
        stopPropagation() stops the event from propagating or bubbling to parent elements.
        If stopPropagation() is uses in a button inside a div, clicking the button wont trigger the div's event.