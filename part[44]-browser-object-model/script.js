//The BOM (Browser Object Model) refers to the collection of objects that the browser 
//exposes to JavaScript, allowing interaction with the browser itself, rather than just the web page content. 
//It includes everything outside the webpage's document, such as the browser window, screen, navigation, location, and history.

// 1. location object
// The `location` object holds information about the current URL and can be used to redirect or reload the page.
console.log("Current URL:", window.location.href);  // Logs the current page URL
console.log("Host:", window.location.host);         // Logs the domain name and port number
console.log("Pathname:", window.location.pathname); // Logs the path of the current page

// You can use location methods such as:
// window.location.reload();  // Reloads the current page
// window.location.assign("https://example.com");  // Redirects to a new URL

// 2. history object
// The `history` object allows you to navigate back and forward in the browser's history.
console.log("History length:", window.history.length); // Logs the number of entries in the browser's history

// Go back or forward in the history
// window.history.back(); // Goes back one page in history
// window.history.forward(); // Goes forward one page in history

// 3. innerHeight and innerWidth
// The `innerHeight` and `innerWidth` properties return the height and width of the browser window's content area (excluding scrollbars).
console.log("Window innerHeight:", window.innerHeight); // Logs the height of the window content area
console.log("Window innerWidth:", window.innerWidth);   // Logs the width of the window content area

// 4. open() and close()
// The `open()` method is used to open a new browser window or tab, and `close()` closes that window/tab.
const newWindow = window.open("https://example.com", "_blank", "width=400,height=400"); // Opens a new window with the specified URL

// Close the new window after a delay of 3 seconds
setTimeout(() => {
  newWindow.close();  // Closes the newly opened window
}, 3000);

// 5. resizeBy() and resizeTo()
// The `resizeBy()` method resizes the current window by the specified amount, while `resizeTo()` resizes it to specific dimensions.
function resizeWindow() {
  window.resizeBy(100, 100);  // Resizes the window by 100 pixels horizontally and vertically
  console.log("Window resized by 100px");
}

function resizeWindowTo() {
  window.resizeTo(800, 600);  // Resizes the window to 800px by 600px
  console.log("Window resized to 800x600");
}

// Call the function after 2 seconds
setTimeout(resizeWindowTo, 2000);

// 6. moveTo() and moveBy()
// The `moveTo()` method moves the window to a specific position on the screen, while `moveBy()` moves it relative to its current position.
function moveWindow() {
  window.moveTo(300, 200);  // Moves the window to (300, 200) on the screen
  console.log("Window moved to position (300, 200)");
}

function moveWindowBy() {
  window.moveBy(50, 50);  // Moves the window 50 pixels to the right and 50 pixels down
  console.log("Window moved by 50px in both directions");
}

// Call the function after 1 second
setTimeout(moveWindowBy, 1000);

// 7. scrollBy() and scrollTo()
// The `scrollBy()` method scrolls the window by the specified number of pixels, while `scrollTo()` scrolls to a specific position.
function scrollWindow() {
  window.scrollBy(0, 100);  // Scrolls the window 100 pixels down
  console.log("Window scrolled by 100px");
}

function scrollWindowTo() {
  window.scrollTo(0, 0);  // Scrolls the window to the top-left corner
  console.log("Window scrolled to the top");
}

// Call scroll after 2 seconds
setTimeout(scrollWindowTo, 2000);

// 8. print()
// The `print()` method opens the print dialog box to print the current document.
function printPage() {
  window.print();  // Opens the print dialog box
  console.log("Print dialog opened");
}

// 9. document object
// The `document` object represents the HTML content of the page and can be used to manipulate elements on the page.
console.log("Page Title:", document.title);  // Logs the title of the page
console.log("Document body:", document.body);  // Logs the body of the document

// You can modify the document
document.title = "BOM JavaScript Example";  // Changes the page title
document.body.style.backgroundColor = "#f0f0f0";  // Changes the background color of the page
