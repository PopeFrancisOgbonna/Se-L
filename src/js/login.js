const signIn = document.querySelector('#in');
const opt = document.querySelector('.In-option');
const  teacher = document.querySelector('.teachf');
const student = document.querySelector('.studentf');


signIn.addEventListener('click', (e) => {
    e.preventDefault();
    opt.classList.remove('hide');
    signIn.classList.add('hide');
});
teacher.addEventListener('click', (e) => {
    const s = document.querySelector('#studentform');
    const t = document.querySelector('#teachform');
    t.classList.remove('hide');
    s.classList.add('hide');
});
student.addEventListener('click', (e) => {
    const s = document.querySelector('#studentform');
    const t = document.querySelector('#teachform');
    t.classList.add('hide');
    s.classList.remove('hide');
});