function setLightSwitch(value: boolean) {
  switch (value) {
    case true:
      turnLightOn();
      break;
    case false:
      turnLightOff();
      break;
    default:
      console.log('Consider whether this line is executed.');
  }
}

function turnLightOff() {
  console.log('turnLightOff()');
}

function turnLightOn() {
  console.log('turnLightOn()');
}

setLightSwitch(true);
setLightSwitch(false);
