function buatLogin() {
  let elem = document.getElementById('x')
  elem.parentElement.removeChild(elem)

  let p = document.createElement('p')
  p.className = 'tulisan_login'
  p.innerHTML = 'silahkan register'

  let element = document.getElementsByTagName('div')[0]
  element.appendChild(p)

  let form = document.createElement('form')
  element.appendChild(form)
  //username
  let label = document.createElement('label')
  label.innerHTML = 'nama user'

  form.appendChild(label)

  let inputName = document.createElement('input')
  inputName.type = 'text'
  inputName.name = 'name'
  inputName.className = 'form_login'
  // inputUsername.value = 'borat'
  inputName.placeholder = 'nama user'

  form.appendChild(inputName)
  //hp
  let label2 = document.createElement('label')
  label2.innerHTML = 'nomor handphone'

  form.appendChild(label2)

  let inputHp = document.createElement('input')
  inputHp.type = 'text'
  inputHp.name = 'handphone'
  inputHp.className = 'form_login'
  // inputUsername.value = 'borat'
  inputHp.placeholder = 'nomor handphone'

  form.appendChild(inputHp)
  //username
  let label3 = document.createElement('label')
  label3.innerHTML = 'nama user'

  form.appendChild(label3)

  let inputUsername = document.createElement('input')
  inputUsername.type = 'text'
  inputUsername.name = 'username'
  inputUsername.className = 'form_login'
  // inputUsername.value = 'borat'
  inputUsername.placeholder = 'username or email'

  form.appendChild(inputUsername)

  let label4 = document.createElement('label')
  label4.innerHTML = 'password'

  form.appendChild(label4)

  let inputPassword = document.createElement('input')
  inputPassword.type = 'password'
  inputPassword.name = 'password'
  inputPassword.className = 'form_login'
  // inputPassword.value = 'xxxx'
  inputPassword.placeholder = 'password'


  form.appendChild(inputPassword)

  let tombol = document.createElement('input')
  tombol.type = 'submit'
  tombol.className = 'tombol_login'
  tombol.value = 'DAFTAR SEKARANG'
  form.appendChild(tombol)
}