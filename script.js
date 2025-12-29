// Pinterest-style Masonry Grid Generator

// Array of placeholder images from Unsplash with various aspect ratios
const imageData = [
  { url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400', height: 600 },
  { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', height: 500 },
  { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400', height: 550 },
  { url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400', height: 700 },
  { url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400', height: 600 },
  { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400', height: 450 },
  { url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400', height: 650 },
  { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400', height: 500 },
  { url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400', height: 600 },
  { url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400', height: 550 },
  { url: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400', height: 700 },
  { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400', height: 500 },
  { url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400', height: 450 },
  { url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400', height: 600 },
  { url: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400', height: 650 },
  { url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400', height: 550 },
  { url: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400', height: 500 },
  { url: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400', height: 600 },
  { url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400', height: 450 },
  { url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400', height: 700 },
  { url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400', height: 600 },
  { url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400', height: 500 },
  { url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400', height: 550 },
  { url: 'https://images.unsplash.com/photo-1498550744921-75f79806b163?w=400', height: 650 },
  { url: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400', height: 600 },
  { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', height: 500 },
  { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', height: 600 },
  { url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400', height: 550 },
  { url: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=400', height: 700 },
  { url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400', height: 600 },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', height: 500 },
  { url: 'https://images.unsplash.com/photo-1542190891-2093d38760f2?w=400', height: 600 },
  { url: 'https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=400', height: 450 },
  { url: 'https://images.unsplash.com/photo-1523551088-45ef8179a2c2?w=400', height: 650 },
  { url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400', height: 550 },
  { url: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=400', height: 500 },
  { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', height: 600 },
  { url: 'https://images.unsplash.com/photo-1525450040146-c7e77e01e4b0?w=400', height: 700 },
  { url: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400', height: 500 },
  { url: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400', height: 600 },
];

// Function to create a pin card element
function createPinCard(imageUrl, height) {
  const card = document.createElement('div');
  card.className = 'pin-card';

  card.innerHTML = `
    <div class="pin-image-container">
      <img src="${imageUrl}" alt="Pin" class="pin-image" style="aspect-ratio: 400/${height}">
      <div class="pin-overlay">
        <div class="overlay-top">
          <select class="board-select">
            <option>Profile</option>
            <option>Ideas</option>
            <option>Home Decor</option>
            <option>Travel</option>
            <option>Fashion</option>
          </select>
          <button class="save-btn">Save</button>
        </div>
        <div class="overlay-bottom">
          <div class="overlay-actions">
            <button class="action-btn" aria-label="Hide">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 9C11.7348 9 11.4804 9.10536 11.2929 9.29289C11.1054 9.48043 11 9.73478 11 10V18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19C12.2652 19 12.5196 18.8946 12.7071 18.7071C12.8946 18.5196 13 18.2652 13 18V10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9Z" fill="#111"/>
                <path d="M12 5C11.7348 5 11.4804 5.10536 11.2929 5.29289C11.1054 5.48043 11 5.73478 11 6V7C11 7.26522 11.1054 7.51957 11.2929 7.70711C11.4804 7.89464 11.7348 8 12 8C12.2652 8 12.5196 7.89464 12.7071 7.70711C12.8946 7.51957 13 7.26522 13 7V6C13 5.73478 12.8946 5.48043 12.7071 5.29289C12.5196 5.10536 12.2652 5 12 5Z" fill="#111"/>
              </svg>
            </button>
            <button class="action-btn" aria-label="More">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="6" r="1.5" fill="#111"/>
                <circle cx="12" cy="12" r="1.5" fill="#111"/>
                <circle cx="12" cy="18" r="1.5" fill="#111"/>
              </svg>
            </button>
          </div>
          <button class="share-btn" aria-label="Share">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="#111"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  return card;
}

// Function to populate the masonry grid
function populateGrid() {
  const grid = document.getElementById('masonry-grid');

  // Generate 40 pin cards
  imageData.forEach(image => {
    const card = createPinCard(image.url, image.height);
    grid.appendChild(card);
  });

  // Add event listeners for Save buttons
  addSaveButtonListeners();
}

// Function to add save button listeners
function addSaveButtonListeners() {
  const saveButtons = document.querySelectorAll('.save-btn');

  saveButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();

      // Change button text to "Saved"
      if (this.textContent === 'Save') {
        this.textContent = 'Saved';
        this.style.backgroundColor = '#111';

        // Reset after 2 seconds
        setTimeout(() => {
          this.textContent = 'Save';
          this.style.backgroundColor = '#e60023';
        }, 2000);
      }
    });
  });
}

// Initialize the grid when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  populateGrid();

  // Add search functionality
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('focus', function() {
    this.placeholder = 'Search';
  });

  searchInput.addEventListener('blur', function() {
    this.placeholder = 'Search for easy dinners, fashion, etc.';
  });
});

// Optional: Infinite scroll simulation
let scrollTimeout;
window.addEventListener('scroll', function() {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(function() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    // Load more when user scrolls near bottom (within 500px)
    if (scrollPosition >= documentHeight - 500) {
      loadMorePins();
    }
  }, 100);
});

function loadMorePins() {
  const grid = document.getElementById('masonry-grid');
  const currentPinCount = grid.children.length;

  // Limit to avoid infinite loading
  if (currentPinCount >= 200) return;

  // Add 10 more random pins
  for (let i = 0; i < 10; i++) {
    const randomImage = imageData[Math.floor(Math.random() * imageData.length)];
    const card = createPinCard(randomImage.url, randomImage.height);
    grid.appendChild(card);
  }

  // Re-add event listeners for new buttons
  addSaveButtonListeners();
}
