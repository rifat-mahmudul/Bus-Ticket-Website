const seats = document.getElementsByClassName('seats');
const bookingSeat = document.getElementById('booking-seat');
const couponInput = document.getElementById('couponInput');
const cuponApplyBtn = document.getElementById('cuponApplyBtn');

for(let seat of seats){
    seat.addEventListener('click', (event) =>{
        
        seat.style.backgroundColor = '#1DD100'

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

    })
}