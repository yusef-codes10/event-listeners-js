const username = document.getElementById('username');
const clickBtn = document.getElementById('clickBtn');
const dialog = document.querySelector('#dialog');
console.log(dialog);


clickBtn.addEventListener('click', () => {
    dialog.showModal();
});

const cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click', closeDialog)

const userChoiceBtn = document.getElementById('userChoiceBtn') ;
userChoiceBtn.addEventListener('click', () => {
    if (usernameRadio.checked) {
        console.log('username mode');
    } else if (ageRadio.checked) {
        console.log('age mode');
    }
    closeDialog();

})

// radio 
const usernameRadio = document.getElementById('usernameRadio');
const ageRadio = document.getElementById('ageRadio');


function closeDialog() {
    dialog.close();
}