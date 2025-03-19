document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("cta-button");

  // Check if the user already has an assigned test variant
  let variant = localStorage.getItem("ab-test-variant");

  if (!variant) {
    // Randomly assign variant A or B
    variant = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem("ab-test-variant", variant);
  }

  // Apply the correct button text and style
  if (variant === "A") {
    button.textContent = "Buy Now";
    button.classList.add("cta-a");
  } else {
    button.textContent = "Get Yours Today!";
    button.classList.add("cta-b");
  }

  // Track button clicks
  button.addEventListener("click", function () {
    console.log(`User clicked ${variant} version of CTA`);
    alert(`Thank you for choosing ${variant} version!`);
  });
});
