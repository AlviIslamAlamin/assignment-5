// function use for seat select
let selectedSeats = 0;
function getElementByIdSeat(id) {
    if (selectedSeats >= 4) {
        alert("You have already selected 4 seats.");
        return;
    }

    const seat = document.getElementById(id);
    const seatName = seat.innerText;
    const ticketPriceField = document.getElementById('calculate-area');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="flex justify-between pb-3">
      <p>${seatName}</p>
      <p>Economy</p>
      <p>550</p>
    </div>
    `;
    ticketPriceField.appendChild(div);

    const seatCount = document.getElementById('badge');
    seatCount.innerText = ++selectedSeats;

    const leftSeats = document.getElementById('left-seat');
    leftSeats.innerText = 12 - selectedSeats;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(totalPrice.innerText) + 550;

    const grandPrice = document.getElementById('grand-price');
    grandPrice.innerText = parseInt(grandPrice.innerText) + 550;

    seat.disabled = true;
    seat.style.backgroundColor = '#1DD100';
    seat.style.color = 'white';
}
