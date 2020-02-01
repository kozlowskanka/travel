export const formatTime = secondsToPromo => {
  if (secondsToPromo == null) {
    return null;
  }
  else if (isNaN(secondsToPromo)){
    return null;
  }
  else if (secondsToPromo<0){
    return null;
  }
  else {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    seconds = (seconds + (secondsToPromo % 60) + '').padStart(2, '0');
    minutes = (minutes + Math.floor((secondsToPromo / 60) % 60) + '').padStart(2, '0');
    hours = (hours + Math.floor(secondsToPromo / (60 * 60))+ '').padStart(2, '0');

    return hours + ':' + minutes + ':' + seconds;
  }
};
