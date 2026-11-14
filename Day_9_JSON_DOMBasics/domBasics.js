// Assignment 35 & 36: Node relationships and element selection
document.addEventListener("DOMContentLoaded", () => {
    // 1. Element Selection Methods
    const appContainer = document.getElementById("app");
    const highlightText = document.querySelector(".highlight");
    const allParagraphs = document.querySelectorAll("p");
    
    console.log("Selected Text via .querySelector:", highlightText.textContent);
    console.log(`Found ${allParagraphs.length} paragraphs in the document.`);
    
    // 2. Node Relationships (Traversal without selecting directly)
    const header = document.getElementById("main-header");
    console.log("Parent Node of Header:", header.parentNode.nodeName); // Should be DIV
    console.log("Next Sibling Element of Header:", header.nextElementSibling.nodeName); // Should be SECTION
});
