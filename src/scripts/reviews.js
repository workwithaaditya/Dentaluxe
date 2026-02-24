const reviewsContainer = document.getElementById('reviews-container');

async function fetchReviews() {
    try {
        const response = await fetch('../data/reviews.json');
        const reviews = await response.json();
        displayReviews(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
}

function displayReviews(reviews) {
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        const reviewerName = document.createElement('h3');
        reviewerName.textContent = review.name;

        const reviewText = document.createElement('p');
        reviewText.textContent = review.text;

        reviewElement.appendChild(reviewerName);
        reviewElement.appendChild(reviewText);
        reviewsContainer.appendChild(reviewElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchReviews);