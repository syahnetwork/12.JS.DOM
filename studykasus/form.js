function buatLogin() {
  let elem = document.getElementById('x')
  elem.parentElement.removeChild(elem)

  let p = document.createElement('p')
  p.className = 'tulisan_login'
  p.innerHTML = 'silahkan login'

  let element = document.getElementsByTagName('div')[0]
  element.appendChild(p)

  let form = document.createElement('form')
  element.appendChild(form)

  let label = document.createElement('label')
  label.innerHTML = 'username'

  form.appendChild(label)

  let inputUsername = document.createElement('input')
  inputUsername.type = 'text'
  inputUsername.name = 'username'
  inputUsername.className = 'form_login'
  inputUsername.value = 'borat'

  form.appendChild(inputUsername)

  let label2 = document.createElement('label')
  label2.innerHTML = 'password'

  form.appendChild(label2)

  let inputPassword = document.createElement('input')
  inputPassword.type = 'password'
  inputPassword.name = 'password'
  inputPassword.className = 'form_login'
  inputPassword.value = 'xxxx'

  form.appendChild(inputPassword)

  let tombol = document.createElement('input')
  tombol.type = 'submit'
  tombol.className = 'tombol_login'
  form.appendChild(tombol)
}