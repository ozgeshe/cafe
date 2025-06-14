const API_URL = "https://script.google.com/macros/s/AKfycbxkmXEDcjAladza54d7InlnYybOdWsp2aQYsfqWM_iGR8kzR35lyQ-Dk_r2K024hpI/exec"; // API сілтемесін қой

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("form");
    const successMessage = document.getElementById("success-message");
    const phoneInput = document.getElementById("phone");
    const submitButton = contactForm.querySelector("button");

    phoneInput.addEventListener("input", function () {
        if (!/^\d*$/.test(phoneInput.value)) {
            phoneInput.setCustomValidity("Phone number should contain only numbers.");
        } else {
            phoneInput.setCustomValidity("");
        }
    });

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!/^\d{10,15}$/.test(phoneInput.value)) {
            alert("Phone number should contain only numbers (10-15 digits).");
            return;
        }

        submitButton.disabled = true;
        const formData = new FormData(contactForm);
        const params = new URLSearchParams();

        for (const pair of formData.entries()) {
            params.append(pair[0], pair[1]);
        }

        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString(),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Response data:", data);
            if (data.result === "success") {
                successMessage.classList.remove("hidden");
                setTimeout(() => {
                    successMessage.classList.add("hidden");
                    contactForm.reset();
                    submitButton.disabled = false;
                }, 3000);
            } else {
                alert("Error: " + data.error);
                submitButton.disabled = false;
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
            submitButton.disabled = false;
        });
    });
});

var map = L.map('map').setView([43.2567, 76.9286], 14); 
        

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([43.2567, 76.9286]).addTo(map)
    .bindPopup("Tamenova Atelier, Алматы")
    .openPopup();