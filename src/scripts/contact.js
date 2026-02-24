const whatsappNumber = "1234567890"; // Replace with actual WhatsApp number
const phoneNumber = "0987654321"; // Replace with actual phone number

function redirectToWhatsApp() {
    const message = "Hello, I would like to request an appointment.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function redirectToPhone() {
    window.location.href = `tel:${phoneNumber}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const whatsappButton = document.getElementById("whatsapp-button");
    const phoneButton = document.getElementById("phone-button");

    if (whatsappButton) {
        whatsappButton.addEventListener("click", redirectToWhatsApp);
    }

    if (phoneButton) {
        phoneButton.addEventListener("click", redirectToPhone);
    }
});