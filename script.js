const modal = document.getElementById("bookingModal");
const tourNameInput = document.getElementById("tourName");

function openBooking(tour) {
    modal.style.display = "block";
    tourNameInput.value = tour;
}

function closeBooking() {
    modal.style.display = "none";
}


document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let tours = document.querySelectorAll(".tour-card");

    tours.forEach(tour => {
        let text = tour.textContent.toLowerCase();
        tour.style.display = text.includes(filter) ? "block" : "none";
    });
});
