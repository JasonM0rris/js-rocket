var doCoolStuff = function () {
  var currentClassName = document.getElementById('cool').className;

  if (currentClassName == 'cool') {document.getElementById('cool').className = 'cool red'} else { document.getElementById('cool').className = 'cool';}

}

var car = {
  make: 'VW',
  type: 'Polo',
  color:'blue',
  isTurnedOn: false,
  numberOfWheels: 4,
  seats: [
          'seat1',
          'seat2',
          'seat3',
          'seat4'
  ],
  turnOn: function (){
    this.isTurnedOn = true;
  },
  fly: function() {
    alert('Boo-yah!');
  },
  switchCar: function(isOn) {
    console.log('turn car' +isOn);
    if (isOn == true) {
      this.isTurnedOn = true;
    } else { this.isTurnedOn = false;
    }
  }
};
