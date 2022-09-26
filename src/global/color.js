const colors = (color) => {
  switch (color) {
    case 'greenPrimary':
      return '#14888B';
    case 'greenLoading':
      return '#11AA66';
    case 'greenSecondary':
      return '#196C6F';
    case 'greenButton':
      return '#95FEEC';
    case 'iconLogin':
      return '#6E9987';
    case 'white':
      return '#FFFFFF';
    case 'buttonAdd':
      return '#21DC89';
    case 'black':
      return '#424242';
    case 'FundoHome':
      return '#BDD6D2';  
    default:
      return color;
  }
}

export default colors;