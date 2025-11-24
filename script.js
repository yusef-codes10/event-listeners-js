const username = document.getElementById('username');
const clickBtn = document.getElementById('clickBtn');
const dialog = document.querySelector('#dialog');
console.log(dialog);


clickBtn.addEventListener('click', () => {
    dialog.showModal();
});

const cancelBtn = document.getElementById('cancel');
cancelBtn.addEventListener('click', 
    () => {
        dialog.close();
    }
)