const btns = document.querySelectorAll('button');
if (!localStorage.getItem('enable-updates')) {
    localStorage.setItem('enable-updates', null);
}
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.value == 'enable-updates') {
            localStorage.setItem('enable-updates', 'true');
            localStorage.setItem('current-update', 0);
        }
        else {
            localStorage.setItem('enable-updates', 'false');
        }
        window.location.href ='https://realslacc.github.io';
    });
});
