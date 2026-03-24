1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: In JavaScript, getElementById, getElementsByClassName, and querySelector / querySelectorAll are used to retrieve elements from the DOM, but they all work differently. getElementById is the simplest, as it retrieves just one element using a specific id. getElementsByClassName retrieves multiple elements with the same class. On the other hand, querySelector retrieves only the first matching element, and querySelectorAll retrieves all matching elements.

2. How do you create and insert a new element into the DOM?
Ans : Creating and adding new elements to the DOM means using JavaScript to dynamically display something new on a webpage. For this, first a new element is created, then text content, class or other properties are added to it as required. And finally it is added to a specific parent element of the page. Through this, it is possible to change the content without reloading the page, which makes the website more user-friendly, smooth, dynamic and interactive.

3. What is Event Bubbling? And how does it work?
Ans: Event bubbling is a JavaScript concept where when an event is triggered on a child element, it triggers all previous elements in order, from the innermost element up to the document root. This is useful for event delegation, but it is sometimes necessary to control it to prevent unwanted behavior.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans : Event Delegation is a simple method in JavaScript where instead of having separate listeners for multiple child elements, a listener is used on a parent element. It uses event bubbling to understand which child has received an event. This makes the code easier to understand and works well for newly added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: The preventDefault() method and the stopPropagation() method are both used in event handling, but they do different things. The preventDefault() method stops an element from performing a default action, such as submitting a form. And the stopPropagation() method prevents the event from going to the parent element. In short, one stops the default action, and the other stops the propagation of the event.