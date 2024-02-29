const users = [
    {
        id: 1,
        login: 'maks.vaganov',
        password: 'qwerty'
    },
    {
        id: 2,
        login: 'amirhan',
        password: 'document'
    },
    {
        id: 3,
        login: 'milana',
        password: '12345'
    },
    {
        id: 4,
        login: 'sergei',
        password: '1111'
    },
]
const formUser = document.forms[0];
const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation()
    const inputLogin = formUser.querySelector('#inputLogin');
    const inputPassword = formUser.querySelector('#inputPassword');

    const user = users.find(item => {
        return item.login === inputLogin.value;
    });

    if (user) {
        if(user.password === inputPassword.value){
            inputLogin.classList.add('green');
            inputPassword.classList.add('green');
            console.log("Авторизация успешна");

        }else{
            console.log("Неверный пароль");
        }
    }else{
        console.log('Логин не найден')
    }
});

// const pass = document.querySelector('input')
// const img = document.querySelector('img')
// let counter = 0
// let inter

// pass.oninput = () => {
//     if(pass.checked){

//         inter = setInterval(() => {
//             counter = counter + 5
//             img.style.transform = `rotate(${counter}deg)`
//         },1000)
//     }
//     else{
//         clearInterval(inter)

//     }
// }
        // img.classList.add('hide')
        // img.classList.remove('hide')

// img.style.display = 'block'
        // img.style.display = 'none'


// document.querySelector('button').addEventListener('click', () => {})   



    // const imgValue = pass.value
    // img.style.width = imgValue + 'px'

    // document.querySelector('button').style.backGroundColor = pass
    // console.log(pass.value);
    // const dateUser = new Date(pass.value)
    // console.log(dateUser.getMonth());