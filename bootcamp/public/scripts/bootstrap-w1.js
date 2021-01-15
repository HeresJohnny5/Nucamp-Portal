let viewportSizeSpan = document.getElementById("viewport-size");
let breakpointNameSpan = document.getElementById("breakpointName");
let bp = "";

viewportSizeSpan.textContent = window.innerWidth;

const updateViewportBreakpointDisplay = () => {
  // Display the breakpoint name
  viewportSizeSpan.textContent = window.innerWidth;
  switch (true) {
    case window.innerWidth >= 1200:
      bp = "(XL)";
      break;
    case window.innerWidth >= 992:
      bp = "(LG)";
      break;
    case window.innerWidth >= 768:
      bp = "(MD)";
      break;
    case window.innerWidth >= 576:
      bp = "(SM)";
      break;
    default:
      bp = "(Extra small)";
  }
  breakpointNameSpan.textContent = bp;
};

// Add event listener to run displaySize function whenever viewport is resized.
window.addEventListener("resize", updateViewportBreakpointDisplay);
