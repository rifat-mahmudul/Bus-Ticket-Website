const seats = document.getElementsByClassName('seats');
const bookingSeat = document.getElementById('booking-seat');
const couponInput = document.getElementById('couponInput');
const cuponApplyBtn = document.getElementById('cuponApplyBtn');
const seatCount = document.getElementById('seatCount');
const leftSeatCount = document.getElementById('leftSeatCount');
const totalPrice = document.getElementById('totalPrice');

let seatPrice = 0;
let totalSeat = 40;
let selectedSeat = [];

for(let seat of seats){
    seat.addEventListener('click', (event) =>{

        const value = event.target.innerText;

        if(selectedSeat.includes(value)){
            return alert('Seat already booked');
        }

        if(selectedSeat.length >= 4){
            return alert('Maximum seat booked')
        }
        
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';

        selectedSeat.push(event.target.innerText);

        const seatValue = event.target.innerText;
        bookingSeat.innerHTML += `
            <ul>
                <li class=" flex justify-between items-center ">
                    <span>${seatValue}</span>
                    <span>Economoy</span>
                    <span>550</span>
                </li>
            </ul>
        `

        

        // increase and decrease available seat
        seatCount.innerText = selectedSeat.length;
        leftSeatCount.innerText = totalSeat - selectedSeat.length;

        //increase seat price
        seatPrice += 550;

        totalPrice.innerText = seatPrice;

        //active cupone button
        if(selectedSeat.length > 3){

            couponInput.removeAttribute('disabled');
            cuponApplyBtn.removeAttribute('disabled');

            couponInput.classList.add('border-green-500');
            cuponApplyBtn.classList.add('bg-green-500');

        }

    })
}