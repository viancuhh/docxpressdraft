document.addEventListener("DOMContentLoaded", function () {
    // Retrieve order data from localStorage
    let orderData = JSON.parse(localStorage.getItem("orderData")) || {};

    // Prefill the fields if data is available
    if (orderData) {
        // Only prefill fields if they exist
        if (document.getElementById("fullName")) {
            document.getElementById("fullName").value = orderData.fullName || "";
        }
        if (document.getElementById("birthday")) {
            document.getElementById("birthday").value = orderData.birthday || "";
        }
        if (document.getElementById("gender")) {
            document.getElementById("gender").value = orderData.gender || "Female"; // Default to "Female" if no gender is provided
        }
        // Other fields can be prefilled similarly...
    }

    // Save data to localStorage on form submission for the document order form
    document.getElementById("docuOrderForm")?.addEventListener("submit", function (e) {
        e.preventDefault();

        const docuType = document.getElementById("docuType").value;
        const copies = document.getElementById("copies").value;
        const fullName = document.getElementById("fullName").value;
        const birthday = document.getElementById("birthday").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;

        if (!docuType || !copies || !fullName || !birthday || !email || !phone || !address) {
            alert("Please fill in all fields!");
            return;
        }

        // Store order data in localStorage
        localStorage.setItem("orderData", JSON.stringify({ docuType, copies, fullName, birthday, email, phone, address }));

        // Navigate to the verification page
        window.location.href = "userVerify.html";
    });

    // Handle the form submission for User Verification
    document.getElementById("verificationForm")?.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const birthday = document.getElementById("birthday").value;
        const gender = document.getElementById("gender").value;
        const fatherFullName = document.getElementById("fatherFullName").value;
        const motherFullName = document.getElementById("motherFullName").value;

        // Validate input
        if (!fatherFullName || !motherFullName) {
            alert("Please fill in all fields.");
            return;
        }

        // Update the orderData with verification data
        orderData.fatherFullName = fatherFullName;
        orderData.motherFullName = motherFullName;

        // Store updated order data in localStorage
        localStorage.setItem("orderData", JSON.stringify(orderData));

        // Navigate to the payment page
        window.location.href = "payment.html";
    });

    // Handle the payment form submission
    document.getElementById("paymentForm")?.addEventListener("submit", function (e) {
        e.preventDefault();

        const paymentMethod = document.getElementById("paymentMethod").value;

        if (!paymentMethod) {
            alert("Please select a payment method.");
            return;
        }

        // Update orderData with payment method
        orderData.paymentMethod = paymentMethod;
        localStorage.setItem("orderData", JSON.stringify(orderData));

        // Navigate to the delivery page
        window.location.href = "delivery.html";
    });

    // Handle the delivery form submission
    document.getElementById("deliveryForm")?.addEventListener("submit", function (e) {
        e.preventDefault();

        const deliveryType = document.getElementById("deliveryType").value;

        if (!deliveryType) {
            alert("Please select a delivery type.");
            return;
        }

        // Update orderData with delivery type
        orderData.deliveryType = deliveryType;
        localStorage.setItem("orderData", JSON.stringify(orderData));

        // Navigate to the order confirmation page
        window.location.href = "orderConfirmation.html";
    });
});
