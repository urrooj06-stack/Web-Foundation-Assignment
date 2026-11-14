# Assignment 60 & 62: Final Assessment & Reflection

## Architecture Explanation
The final Capstone project was built using the **Model-View-Controller (MVC)** design pattern in Vanilla JavaScript.
By keeping the DOM manipulation (View) strictly separate from the business logic (Model), the codebase is scalable, testable, and maintainable.

## Reflection & Feedback Actions
- **Security First:** Moving away from `innerHTML` to strictly using `document.createElement()` and `textContent` ensures that no malicious scripts can be injected into the application.
- **Performance:** Leveraging functional array methods (`map`, `filter`, `reduce`) with $O(N)$ complexity and `DocumentFragment` for DOM updates minimized reflows and repaints.
- **Persistence:** Wrapping `localStorage` inside a failsafe utility prevented catastrophic crashes on devices with strict privacy settings.

*Portfolio Link: [Insert GitHub Repository/Live Link Here]*
