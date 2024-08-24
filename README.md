# IP Address Tracker

This is a simple IP Address Tracker web application built with HTML, CSS, JavaScript, and Leaflet.js (using OpenStreetMap). The app fetches the geolocation data of an IP address or domain using the IPify API and displays the corresponding location on a map.

![Screenshot](./design/desktop-preview.jpg)

## Features

- **Search IP Address/Domain**: Search for any IP address or domain to get location details.
- **IP Geolocation**: Displays the location, timezone, and ISP of the IP address or domain.
- **Map Integration**: Shows the location on a map using OpenStreetMap and Leaflet.js.

## Technologies Used

- **HTML**: For the structure of the web page.
- **CSS**: For the styling of the web page.
- **JavaScript**: For fetching the IP geolocation data from the API and updating the UI dynamically.
- **Leaflet.js**: For map integration using OpenStreetMap.
- **IPify API**: For fetching the IP geolocation data.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ip-address-tracker.git
   cd ip-address-tracker
   ```
2. Open index.html in your browser:
   ```bash
   open index.html
   ```

## Usage

1. Enter an IP address or domain in the search bar.
2. Click the search button.
3. The app will display the IP address's geolocation data, including the location, timezone, and ISP, and show the location on a map.

## API

This project uses the IPify API for fetching IP geolocation data. To use this project, you'll need an API key from IPify.

Sign up for an API key on [IPify](https://geo.ipify.org/).
Add your API key in the script.js file:

```javascript
const API_KEY = "your-api-key-here";
```

## Map Integration

The project uses Leaflet.js and OpenStreetMap for displaying the map. The map automatically centers on the location of the searched IP address or domain.

## Credits

Challenge by [Frontend Mentor](https://www.frontendmentor.io/).
Coded by Sadat Nazarli.

### Changes:

- **Links**: Added correct links for IPify and Frontend Mentor.
- **Credits**: Updated to include your name and GitHub profile.
- **Code Formatting**: Fixed the formatting of the API key section and ensured everything is properly formatted in Markdown.

Let me know if you need further edits or adjustments!
