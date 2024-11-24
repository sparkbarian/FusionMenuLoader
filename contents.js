// Check if the overlay already exists
if (!document.getElementById("menu-overlay")) {
  // Create the overlay container
  const overlay = document.createElement("div");
  overlay.id = "menu-overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "10px";
  overlay.style.left = "10px";
  overlay.style.width = "50px";
  overlay.style.height = "50px";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  overlay.style.color = "white";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.borderRadius = "5px";
  overlay.style.zIndex = "10000";
  overlay.style.cursor = "pointer";

  // Add text or icon to the overlay
  overlay.textContent = "☰"; // Menu icon (hamburger)

  // Add a click event listener to remove the overlay
  overlay.addEventListener("click", () => {
    overlay.remove();
  });

  // Append the overlay to the document body
  document.body.appendChild(overlay);
}
