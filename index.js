function scuberGreetingForFeet(numberOfFeet){
  if (numberOfFeet <= 400) {
    return 'This one is on me!'
  } else if (numberOfFeet > 400 && numberOfFeet <= 2000){
      return 'That will be twenty bucks.'
  } else if (numberOfFeet > 2000 && numberOfFeet <= 2500){
    return 'I will gladly take your thirty bucks.'
  } else if (numberOfFeet > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(nameOfCity){
  const returnMessage = nameOfCity === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return returnMessage;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.'
      break;
    case 'not as generous':
      response = 'Thank you.'
      break;
    default:
      response = 'Bye.'
      break;
  }
  return response;
}