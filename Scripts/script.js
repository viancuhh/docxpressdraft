// Save data to localStorage on form submission
document.getElementById("docuOrderForm").addEventListener("submit", function (e) {
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

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve order data from localStorage
    const orderData = JSON.parse(localStorage.getItem("orderData")) || {};

    // Prefill the fields if data is available
    if (orderData) {
        document.getElementById("fullName").value = orderData.fullName || "";
        document.getElementById("birthday").value = orderData.birthday || "";
        document.getElementById("gender").value = orderData.gender || "Female"; // Default to "Female" if no gender is provided
    }
});
    // Handle the form submission for User Verification
document.getElementById("verificationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Retrieve values from the form
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

    // Store verification data in localStorage (in case you need it later)
    orderData.fatherFullName = fatherFullName;
    orderData.motherFullName = motherFullName;


    // Optionally, you can store any changes back to localStorage
    localStorage.setItem("orderData", JSON.stringify(orderData));

    // Navigate to the next step, e.g., the payment page
    window.location.href = "payment.html";
});

document.getElementById("paymentForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const paymentMethod = document.getElementById("paymentMethod").value;

    if (!paymentMethod) {
        alert("Please select a payment method.");
        return;
    }

    // Update orderData with payment method
    const orderData = JSON.parse(localStorage.getItem("orderData")) || {};
    orderData.paymentMethod = paymentMethod;
    localStorage.setItem("orderData", JSON.stringify(orderData));

    // Navigate to the delivery page
    window.location.href = "delivery.html";
});
document.getElementById("deliveryForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const deliveryType = document.getElementById("deliveryType").value;

    if (!deliveryType) {
        alert("Please select a delivery type.");
        return;
    }

    // Update orderData with delivery type
    const orderData = JSON.parse(localStorage.getItem("orderData")) || {};
    orderData.deliveryType = deliveryType;
    localStorage.setItem("orderData", JSON.stringify(orderData));

    // Navigate to the order confirmation page
    window.location.href = "orderConfirmation.html";
});
window.addEventListener("DOMContentLoaded", () => {
    const orderData = JSON.parse(localStorage.getItem("orderData")) || {};
    const referenceNumber = Math.random().toString(36).substring(2, 10).toUpperCase();

    // Save reference number back to orderData
    orderData.referenceNumber = referenceNumber;
    localStorage.setItem("orderData", JSON.stringify(orderData));

    // Display the reference number
    document.getElementById("referenceNumber").textContent = referenceNumber;

    // Display all the order details
    const confirmationContainer = document.getElementById("confirmationContainer");
    confirmationContainer.innerHTML = `
        <h2>Order Details</h2>
        <p><strong>Document Type:</strong> ${orderData.docuType}</p>
        <p><strong>Number of Copies:</strong> ${orderData.copies}</p>
        <p><strong>Full Name:</strong> ${orderData.fullName}</p>
        <p><strong>Birthday:</strong> ${orderData.birthday}</p>
        <p><strong>Email:</strong> ${orderData.email}</p>
        <p><strong>Phone Number:</strong> ${orderData.phone}</p>
        <p><strong>Delivery Address:</strong> ${orderData.address}</p>
        <p><strong>Delivery Type:</strong> ${orderData.deliveryType}</p>
        <p><strong>Payment Method:</strong> ${orderData.paymentMethod}</p>
    `;
});
