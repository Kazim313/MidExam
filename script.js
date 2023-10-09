// JavaScript for handling form submissions (you can add more functionality)

document.getElementById("menuForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var itemName = document.getElementById("itemName").value;
    var itemPrice = document.getElementById("itemPrice").value;
    
    // You can handle data manipulation or storage here (e.g., update a menu list)
    // For a real website, you'd use a server for this.
    
    // Clear the form fields
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
});

document.getElementById("promoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var promoText = document.getElementById("promoText").value;
    
    // You can handle data manipulation or storage here (e.g., update a promotions list)
    // For a real website, you'd use a server for this.
    
    // Clear the form field
    document.getElementById("promoText").value = "";
});
