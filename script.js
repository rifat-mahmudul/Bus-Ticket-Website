const seats = document.getElementsByClassName('seats');
const bookingSeat = document.getElementById('booking-seat');
const couponInput = document.getElementById('couponInput');
const cuponApplyBtn = document.getElementById('cuponApplyBtn');
const seatCount = document.getElementById('seatCount');
const leftSeatCount = document.getElementById('leftSeatCount');

let totalSeat = 40;
let selectedSeat = [];

for(let seat of seats){
    seat.addEventListener('click', (event) =>{
        
        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';

        selectedSeat.push(event.target.innerText);

        const seatValue = event.target.innerText;
        bookingSeat.innerHTML = `
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

    })
}