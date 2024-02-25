
// Function to get a random number within a range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create SVG elements
function createSvgElement(svgUrl) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "image");
    svg.setAttributeNS(null, "href", svgUrl);
    svg.setAttributeNS(null, "class", "svg-image");
    return svg;
}

// Function to add SVG elements to the background
function addSvgToBackground(svgUrl, container) {
    const svg = createSvgElement(svgUrl);
    const svgWidth = parseInt(svg.getAttributeNS(null, "width"));
    const svgHeight = parseInt(svg.getAttributeNS(null, "height"));
    
    // Get random coordinates within the visible bounds
    const x = getRandomNumber(0, window.innerWidth - svgWidth);
    const y = getRandomNumber(0, window.innerHeight - svgHeight);
    
    const rotation = getRandomNumber(0, 360);
    svg.style.left = x + "px";
    svg.style.top = y + "px";
    svg.style.transform = "rotate(" + rotation + "deg)";
    container.appendChild(svg);
}

// Function to load SVG files from the images folder
function loadSvgFiles() {
    const container = document.getElementById("svg-container");
    const svgFiles = ["strawberry-svgrepo-com.svg"]; // Add your SVG file names here
    svgFiles.forEach(svgUrl => {
        addSvgToBackground("images/" + svgUrl, container);
    });
}

// Load SVG files when the page is loaded
window.onload = loadSvgFiles;
