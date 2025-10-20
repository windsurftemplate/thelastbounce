// Stripe Configuration
const stripe = Stripe('pk_test_YOUR_PUBLISHABLE_KEY'); // Replace with your Stripe publishable key

// ROI Calculator
const playFrequencyInput = document.getElementById('playFrequency');
const savingsDisplay = document.getElementById('savings');
const ballsSavedDisplay = document.getElementById('ballsSaved');

function calculateSavings() {
    const timesPerWeek = parseInt(playFrequencyInput.value) || 3;

    // Average player replaces balls every 2 weeks if playing 3x/week
    const weeksPerCan = Math.max(1, Math.floor(6 / timesPerWeek));
    const cansPerYear = Math.floor(52 / weeksPerCan);
    const regularCost = cansPerYear * 9; // $9 per regular can
    const lastBounceCost = 29.99; // One-time purchase
    const savings = regularCost - lastBounceCost;

    savingsDisplay.textContent = `$${Math.max(0, savings.toFixed(0))}`;
    ballsSavedDisplay.textContent = cansPerYear;
}

playFrequencyInput.addEventListener('input', calculateSavings);
calculateSavings();

// Buy Button Handler
async function handlePurchase() {
    // In production, this would call your backend to create a Checkout Session
    // For now, we'll redirect to a placeholder

    alert('Payment integration coming soon! For early access, email hello@thelastbounce.com');

    // Example Stripe Checkout integration (uncomment when ready):
    /*
    try {
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quantity: 1,
                priceId: 'price_YOUR_PRICE_ID' // Replace with your Stripe Price ID
            })
        });

        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        });

        if (result.error) {
            alert(result.error.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    }
    */
}

document.getElementById('buyButton').addEventListener('click', handlePurchase);
document.getElementById('buyButton2').addEventListener('click', handlePurchase);

// Smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple analytics tracking (replace with your analytics)
window.addEventListener('load', () => {
    console.log('Page loaded - track this event in your analytics');
});