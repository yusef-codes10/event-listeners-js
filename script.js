const username = document.getElementById('username');
const clickBtn = document.getElementById('clickBtn');


clickBtn.addEventListener('click', () => window.alert(`your name is ${username.value}`));