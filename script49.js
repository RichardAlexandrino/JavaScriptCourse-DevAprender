// Project - Virtual Security

// * You need to get the persons name trying to get into tha place.
// * You need to ask him/her who invited you to that party.
// * You need on-screen buttom that when you click it will acess your javascript 
// code to check if the person trying to join has been invited.
// (ex: the person's name is Jhonatan. Who invited to the party? Cristian. I click 
// on the buttom, the javascript takes the informations that I filled in on the 
// screen and checks in my code if that person is on the Cristian's guest list. 
// Jhonatan's name is.)
// If the name is, I will change the description "Searching..." for "You can enter!".
// If the name isn't there, I will change the description "Searching..." for "You can't 
// enter!".

// Solution 1
function CheckEntry1() {
    const nameCheck = document.getElementById('name').value;
    const nameWho = document.getElementById('invitedBy').value;
    const list = ['Jhonatan','Jhon','Michael'];
    const lenght = list.length;
    let a = 0;
    for (let i = 0; i < lenght; i++) {
        permission = verify(i,nameCheck);
        if (permission == true && nameWho == 'Cristian') {
            document.getElementById('entryPermission').innerText = 'You can enter!';
            a = 1;
        }
    }
    
    if (a != 1) {
        document.getElementById('entryPermission').innerText = 'You cannot enter!';
    } 
    
    function verify(j,k) {
        if (list[j] == k) {
            return true;
        }
    }
}

// Solution 2
function CheckEntry2() {
    guestName = document.getElementById('name').value;
    whoInvited = document.getElementById('invitedBy').value;
    cristiansGuest= ['Amanda','Sabrina','Rafael','Jonas', 'Carol','Jhonatan'];
    if ((cristiansGuest.includes(guestName)) && whoInvited == 'Cristian') {
        document.getElementById('entryPermission').innerText = 'You can entry!'
    }
    else {
        document.getElementById('entryPermission').innerText = "You can't entry!"
    }
}