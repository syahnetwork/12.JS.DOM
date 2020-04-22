myFunction = () => {
  let e = document.getElementById('my_select')
  let selectedOptions = e.options[e.selectedIndex].value
  console.log(selectedOptions)
  switch (selectedOptions) {
    case 'red':
      document.body.style.backgroundColor = 'red'
      break;
    case 'blue':
      document.body.style.backgroundColor = 'blue'
      break;
    case 'yellow':
      document.body.style.backgroundColor = 'yellow'
      break;
    case 'white':
      document.body.style.backgroundColor = 'white'
      break;
  }
}