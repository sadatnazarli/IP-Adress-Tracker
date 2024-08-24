const API_KEY = 'at_Uni39GiXwEABeRaY4aybw39enE8G3';
const DEFAULT_IP = '8.8.8.8';

// DOM elements
const ipInput = document.getElementById('ip-input');
const searchBtn = document.getElementById('search-btn');
const ipAddressElement = document.getElementById('ip-address');
const locationElement = document.getElementById('location');
const timezoneElement = document.getElementById('timezone');
const ispElement = document.getElementById('isp');
const mapDiv = document.getElementById('map');

const map = L.map('map').setView([51.505, -0.09], 13); // Default location (London)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker([51.505, -0.09]).addTo(map); // Default marker

searchBtn.addEventListener('click', fetchIPData);

async function fetchIPData() {
    const ipAddress = ipInput.value || DEFAULT_IP;
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        updateUI(data);
        displayMap(data.location.lat, data.location.lng);
    } catch (error) {
        console.error('Error fetching IP data:', error);
        alert('Failed to retrieve IP data. Please try again.');
    }
}

function updateUI(data) {
    ipAddressElement.textContent = data.ip;
    locationElement.textContent = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    timezoneElement.textContent = `UTC ${data.location.timezone}`;
    ispElement.textContent = data.isp;
}

function displayMap(lat, lng) {
    map.setView([lat, lng], 13); 
    marker.setLatLng([lat, lng]); 
}

fetchIPData();
