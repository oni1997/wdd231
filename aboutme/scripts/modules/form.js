export function handleFormSubmission(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };

    // Store in localStorage
    localStorage.setItem('lastFormSubmission', JSON.stringify(formData));
    
    // Redirect to form response page
    window.location.href = `form-response.html?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&subject=${encodeURIComponent(formData.subject)}&message=${encodeURIComponent(formData.message)}`;
}