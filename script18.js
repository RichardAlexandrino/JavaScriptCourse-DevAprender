// Maximum speed

// 70 km/h is the maximum. For every 5 km/h above the maximum, one point is added. 
// In the case the point are greater tham 12, the license is suspended.

checkSpeed(130);

function checkSpeed(speed) {
    maxSpeed = 70;
    const kmPerPoint = 5;
    maxPoints = 12;
    if (speed <= maxSpeed)
        console.log('Ok');
    else {
        const points = Math.floor(((speed - maxSpeed) / kmPerPoint));
            if (points >= maxPoints)
                console.log('Carteira suspensa!');
            else
                console.log('Points:', points);
    }
}
