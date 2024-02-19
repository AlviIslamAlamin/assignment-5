let selectedSeats = 0;
let totalPrice = 0; 

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

    totalPrice += 550; // Increment totalPrice

    const totalPriceDisplay = document.getElementById('total-price');
    totalPriceDisplay.innerText = totalPrice;

    const grandPrice = document.getElementById('grand-price');
    grandPrice.innerText = totalPrice;

    seat.disabled = true;
    seat.style.backgroundColor = '#1DD100';
    seat.style.color = 'white';

    if (selectedSeats === 2) {
      document.getElementById('applyCoupon').removeAttribute("disabled")
    }

    if (selectedSeats === 1) {
      document.getElementById('next-btn').removeAttribute("disabled")
    }

    return totalPrice;
}

function applyCoupon() {
    const couponField = document.getElementById('couponField');
    console.log(couponField.value);
    if (couponField.value === "NEW15") {
        const discount = totalPrice * 0.15;
        const discountArea = document.getElementById("discount");
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between mt-3 mb-3">
            <h1 class="font-bold">Total discount</h1>
            <h1 class="font-bold">BDT ${discount}</h1>
        </div>
        `;
        discountArea.appendChild(div);
        const grandPrice = document.getElementById('grand-price');
        grandPrice.innerText = totalPrice - discount;
        document.getElementById('coupon-area').style.display = 'none';
    }
    else if(couponField.value === "Couple 20"){
        const discount = totalPrice * 0.2;
        const discountArea = document.getElementById("discount");
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between mt-3 mb-3">
            <h1 class="font-bold">Total discount</h1>
            <h1 class="font-bold">BDT ${discount}</h1>
        </div>
        `;
        discountArea.appendChild(div);
        const grandPrice = document.getElementById('grand-price');
        grandPrice.innerText = totalPrice - discount;
        document.getElementById('coupon-area').style.display = 'none';
    }
    else{
       alert("Your coupon is wrong! Please write valid coupon.")
    }
}