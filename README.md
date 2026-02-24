# Clinic Website

## Overview
This project is a professional website for a clinic, designed to provide an engaging and informative experience for patients. The website features a smooth slideshow of clinic photos, a hero card for doctors, Google Maps integration, and easy contact options via WhatsApp and phone.

## Features
- **Slideshow Background**: A smooth slideshow of clinic photos serves as the background for the website.
- **Hero Card for Doctors**: Prominently displays information about the clinic's doctors.
- **Google Maps Integration**: Includes a map with a direct navigation option to the clinic.
- **Contact Options**: Users can easily reach out via WhatsApp or phone with an automated text for appointment requests.
- **Patient Reviews**: Displays reviews fetched from Google Maps to enhance credibility.
- **Treatment Information**: Showcases various treatments offered at the clinic with accompanying photos.

## Project Structure
```
clinic-website
├── src
│   ├── index.html
│   ├── styles
│   │   ├── main.css
│   │   ├── slideshow.css
│   │   ├── hero.css
│   │   ├── maps.css
│   │   ├── reviews.css
│   │   └── contact.css
│   ├── scripts
│   │   ├── slideshow.js
│   │   ├── maps.js
│   │   ├── reviews.js
│   │   └── contact.js
│   ├── components
│   │   ├── navbar.html
│   │   ├── hero.html
│   │   ├── doctors.html
│   │   ├── gallery.html
│   │   ├── reviews.html
│   │   ├── treatments.html
│   │   └── contact.html
│   └── data
│       ├── doctors.json
│       ├── reviews.json
│       └── treatments.json
├── public
│   └── fonts
│       └── custom-font.woff2
├── .env
├── package.json
└── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Create a `.env` file and add your Google Maps API key.
5. Open `src/index.html` in your web browser to view the website.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Google Maps API

## Contribution
Feel free to contribute to this project by submitting issues or pull requests. Your feedback and suggestions are welcome!