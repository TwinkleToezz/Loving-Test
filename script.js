document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * UNIVERSAL BUTTON GROUP HANDLER
     * Works for both Booking (Packages) and Contact (Reasons)
     */
    function setupButtonGroup(containerId, hiddenInputId, dataAttr) {
        const container = document.getElementById(containerId);
        const hiddenInput = document.getElementById(hiddenInputId);
        
        // Only run if the elements exist on the current page
        if (container && hiddenInput) {
            const buttons = container.querySelectorAll('.package-btn');

            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons in this group
                    buttons.forEach(btn => btn.classList.remove('active'));

                    // Add active class to clicked button
                    this.classList.add('active');

                    // Update hidden input with the data attribute or the text
                    hiddenInput.value = this.getAttribute(dataAttr) || this.innerText;
                    
                    console.log(`Selection updated for ${containerId}:`, hiddenInput.value);
                });
            });
        }
    }

    // Initialize for Booking Page (Uses 'data-package')
    setupButtonGroup('packageSelector', 'selectedPackageInput', 'data-package');

    // Initialize for Contact Page (Uses 'data-value')
    setupButtonGroup('contactReasonSelector', 'selectedReasonInput', 'data-value');


    /**
     * CONTACT FORM SUBMISSION
     */
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            // Visual feedback
            alert("Thank you! Your message has been sent to Loving Homes.");
            
            // Reset form and UI states
            contactForm.reset();
            const buttons = contactForm.querySelectorAll('.package-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
        });
    }
});