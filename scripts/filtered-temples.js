// Temple Array with 7 original entries + 3 student-added entries (10 temples total)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // 3 Student-Added Entries (Accra Ghana, Salt Lake, Paris France)
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "images/accra.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/salt-lake.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "images/paris.jpg"
  }
];

// DOM references
const templeContainer = document.getElementById("temple-cards");
const filterTitle = document.getElementById("filter-title");
const navLinks = document.querySelectorAll(".navigation a");
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

// Function to render temple cards dynamically
function displayTemples(templeList) {
  templeContainer.innerHTML = "";
  
  templeList.forEach((temple) => {
    const card = document.createElement("article");
    card.classList.add("temple-card");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const details = document.createElement("div");
    details.classList.add("temple-details");

    const location = document.createElement("p");
    location.innerHTML = '<span class="label">Location:</span> ' + temple.location;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = '<span class="label">Dedicated:</span> ' + temple.dedicated;

    const size = document.createElement("p");
    size.innerHTML = '<span class="label">Size:</span> ' + temple.area.toLocaleString() + ' sq ft';

    details.appendChild(location);
    details.appendChild(dedicated);
    details.appendChild(size);

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName + ' Temple';
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;

    card.appendChild(name);
    card.appendChild(details);
    card.appendChild(img);

    templeContainer.appendChild(card);
  });
}

// Function to filter temples based on navigation selection
function setupFiltering() {
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      
      // Update active link styling
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      // Close mobile navigation on click
      if (navigation.classList.contains("open")) {
        navigation.classList.remove("open");
        menuButton.classList.remove("open");
      }

      const filterType = link.id;

      if (filterType === "old") {
        filterTitle.textContent = "Old Temples (Built before 1900)";
        const oldTemples = temples.filter((t) => {
          const year = parseInt(t.dedicated.split(",")[0].trim());
          return year < 1900;
        });
        displayTemples(oldTemples);
      } else if (filterType === "new") {
        filterTitle.textContent = "New Temples (Built after 2000)";
        const newTemples = temples.filter((t) => {
          const year = parseInt(t.dedicated.split(",")[0].trim());
          return year > 2000;
        });
        displayTemples(newTemples);
      } else if (filterType === "large") {
        filterTitle.textContent = "Large Temples (> 90,000 sq ft)";
        const largeTemples = temples.filter((t) => t.area > 90000);
        displayTemples(largeTemples);
      } else if (filterType === "small") {
        filterTitle.textContent = "Small Temples (< 10,000 sq ft)";
        const smallTemples = temples.filter((t) => t.area < 10000);
        displayTemples(smallTemples);
      } else {
        filterTitle.textContent = "Home (All Temples)";
        displayTemples(temples);
      }
    });
  });
}

// Hamburger menu toggle for mobile
function setupMenuToggle() {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
  });
}

// Dynamic Footer Year and Last Modified
function setupFooter() {
  const currentYearSpan = document.getElementById("currentyear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const lastModifiedP = document.getElementById("lastModified");
  if (lastModifiedP) {
    lastModifiedP.textContent = 'Last Modified: ' + document.lastModified;
  }
}

// Initial execution
document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);
  setupFiltering();
  setupMenuToggle();
  setupFooter();
});
