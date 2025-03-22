<h1 align="center">Code Documentation: Technology Page (TechStore)</h1>

<p align="center">
  This project is a static web page that simulates an online store for technology products. The page is built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, and uses <strong>Bootstrap</strong> for responsive design and interactive components.
</p>

---

## **1. Project Structure**

### **1.1. Files and Folders**
- **HTML**: `index.html` (main page).
- **CSS**: 
  - `styles.css` (custom styles).
  - Bootstrap (linked via CDN).
  - Font Awesome (linked via CDN).
- **JavaScript**: 
  - `scripts.js` (custom functionalities).
  - Bootstrap JS (linked via CDN).
- **Images**: 
  - `img` folder with subfolders for carousel and product images.

---

## **2. HTML**

### **2.1. General Structure**
- **DOCTYPE and Metadata**: 
  - Defines the document as HTML5.
  - Specifies the language (`es` for Spanish).
  - Includes metadata such as `charset` (UTF-8) and mobile viewport configuration.

- **External Resources**:
  - Bootstrap CSS and JS.
  - Font Awesome for icons.
  - Custom CSS file (`styles.css`).

- **Body Structure**:
  - **Header**: Contains the logo and a navigation menu with dropdowns.
  - **Offers Carousel**: Displays promotional images with descriptive text.
  - **New Arrivals Section**: Displays products in a horizontal carousel.
  - **Main Content**: Displays products in a grid layout.
  - **Footer**: Contains contact information, social media links, and quick links.

### **2.2. Key Components**
- **Header**:
  - Logo (`TechStore`).
  - Navigation menu with dropdowns for **Products**, **Brands**, **Services**, and **Contact**.

- **Offers Carousel**:
  - Three slides with images and descriptive text.
  - Controls to navigate between slides.

- **New Arrivals**:
  - Horizontal carousel with product cards.
  - Each card includes an image, title, description, price, and action buttons (buy, favorite, cart).

- **Main Content**:
  - Grid of products with cards similar to the new arrivals section.

- **Footer**:
  - Contact information (email and phone).
  - Social media icons (Facebook, X/Twitter, Instagram, TikTok).
  - Quick links (Privacy Policy, Terms and Conditions, Support).

---

## **3. CSS**

### **3.1. Custom Styles**
- **Body**:
  - Default font: `Arial, sans-serif`.
  - Background color: `#F1F3F5`.

- **Header**:
  - Dark background (`#343a40`) with shadow.
  - Dropdown menu with smooth animation when opened.

- **Offers Carousel**:
  - Images with a maximum height of `400px` and object fit (`object-fit: cover`).
  - Descriptive text centered with a semi-transparent background.

- **Product Cards**:
  - Uniform design with rounded corners, shadow, and hover transition.
  - Action buttons (favorite and cart) with Font Awesome icons.
  - Highlighted price in a red box.

- **New Arrivals Carousel**:
  - Smooth horizontal scrolling with control buttons.
  - Responsive design: shows 4 cards on desktop and 1 on mobile.

- **Footer**:
  - Dark background (`#343a40`) with white text.
  - Social media icons with hover effect (color change).

---

## **4. JavaScript**

### **4.1. Key Functionalities**
- **Dropdown Menus**:
  - Smooth animation when opening and closing dropdown menus.
  - Uses Bootstrap events (`show.bs.dropdown` and `hide.bs.dropdown`).

- **Cards Carousel**:
  - Smooth horizontal scrolling when clicking control buttons.
  - Dynamic adjustment of the number of visible cards based on screen size.

- **Product Interaction**:
  - **Favorite** and **Cart** buttons with animation and floating messages.
  - Floating messages indicating whether a product was added or removed.

- **Floating Messages**:
  - Appear in the bottom-right corner when adding or removing products.
  - Automatically disappear after 2 seconds.

---

## **5. Detailed Functionalities**

### **5.1. Dropdown Menus**
- **Animation**: Dropdown menus open and close with a smooth animation (opacity and vertical translation).
- **Events**: Bootstrap events are used to control visibility and animation.

### **5.2. Offers Carousel**
- **Autoplay**: Slides change automatically every 5 seconds.
- **Controls**: Buttons to manually navigate between slides.

### **5.3. New Arrivals Carousel**
- **Scrolling**: Products scroll horizontally when clicking control buttons.
- **Responsiveness**: Shows 4 cards on desktop and 1 on mobile.

### **5.4. Product Interaction**
- **Favorites**: Clicking the heart icon marks the product as a favorite and shows a floating message.
- **Cart**: Clicking the cart icon adds the product to the cart and shows a floating message.

### **5.5. Floating Messages**
- **Animation**: Messages slide in from the right.
- **Duration**: Automatically disappear after 2 seconds.

---

## **6. Design Considerations**
- **Responsiveness**: The page is designed to adapt to different screen sizes (desktop, tablet, mobile).
- **Accessibility**: Use of semantic tags and ARIA attributes to improve accessibility.
- **Performance**: Use of CDN for Bootstrap and Font Awesome, reducing load time.

---

## **7. Future Improvements**
1. **Backend Integration**: Connect the page to a backend to handle products, favorites, and shopping cart.
2. **Product Search**: Add a search bar to filter products.
3. **Pagination**: Implement pagination for the product section.
4. **Additional Animations**: Add more animations to enhance the user experience.

---

<p align="center">
  This code is a solid foundation for an online technology store. It can be extended and improved based on project needs.
</p>
