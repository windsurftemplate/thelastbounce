// Stripe Configuration
const stripe = Stripe('pk_test_YOUR_PUBLISHABLE_KEY'); // Replace with your Stripe publishable key

// Product configurations
const products = {
    single: {
        name: 'Single Ball Edition',
        price: 9.95,
        priceId: 'price_single' // Replace with your Stripe Price ID
    },
    triple: {
        name: 'Three Ball Gift Set',
        price: 24.95,
        priceId: 'price_triple' // Replace with your Stripe Price ID
    },
    team: {
        name: 'Ten Ball Team Pack',
        price: 79,
        priceId: 'price_team' // Replace with your Stripe Price ID
    }
};

// Buy Button Handler
async function handlePurchase(productType = 'single') {
    // In production, this would call your backend to create a Checkout Session
    const product = products[productType];

    alert(`You selected: ${product.name} - $${product.price}\n\nPayment integration coming soon! For early access, email hello@thelastbounce.com`);

    // Example Stripe Checkout integration (uncomment when ready):
    /*
    try {
        const response = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quantity: 1,
                priceId: product.priceId
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

// Attach event listeners to all buy buttons
document.getElementById('buyButton').addEventListener('click', () => handlePurchase('single'));
document.getElementById('buyButton2').addEventListener('click', () => handlePurchase('single'));
document.getElementById('buyButton3').addEventListener('click', () => handlePurchase('triple'));
document.getElementById('buyButton4').addEventListener('click', () => handlePurchase('team'));

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