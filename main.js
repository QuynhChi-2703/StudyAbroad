document.querySelectorAll('.info-item .btn').forEach(function(button){
    button.addEventListener('click',function(){
        document.querySelector('.container').classList.toggle('log-in');
    });
});
function register(event){
    event.preventDefault();
    let username=document.getElementById('regUsername').value.trim();
    let password=document.getElementById('regPassword').value.trim();
    let email=document.getElementById('regEmail').value.trim();
    let fullName=document.getElementById('regFullname').value.trim();
    let regMessage=document.getElementById('regMessage');

    let lowerCaseLeter=/[a-z]/g;
    let upperCaseLeter=/[A-Z]/g;
    let numbers=/[0-9]/g;

    regMessage.style.color='red';

    if(!username||!password||!email||!fullName){
        regMessage.innerText="Vui lòng điền vào tất cả các chỗ trống!";
        return;
    }
    if(password.length < 8){
        regMessage.innerText="Mật khẩu phải bao gồm ít nhất 8 kí tự.";
        return;
    }

    if(!lowerCaseLeter.test(password)){
        regMessage.innerText="Mật khẩu phải bao gồm chữ thường.";
        return;
    }

    if(!upperCaseLeter.test(password)){
        regMessage.innerText="Mật khẩu phải bao gồm chữ hoa.";
        return;
    }

    if(!numbers.test(password)){
        regMessage.innerText="Mật khẩu phải bao gồm chữ số.";
        return;
    }

    let user ={
        username: username,
        password: password,
        fullName: fullName,
        email: email,
    };
    let users=localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')):{};

    if(users[username]){
        regMessage.innerText="Tên đăng nhập đã tồn tại!";
    }else{
        users[username]=user;
        localStorage.setItem('users',JSON.stringify(users));
        regMessage.innerText="Đăng ký thành công!";
        regMessage.style.color='green';
    }
}
function login(event){
    event.preventDefault();
    
    let username=document.getElementById('loginUsername').value.trim();
    let password=document.getElementById('loginPassword').value.trim();
    let loginMessage=document.getElementById('loginMessage').value.trim();
    
    let users=localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):{};
    let storedUser=users[username];
    if(storedUser && storedUser.password === password){
        window.location.href='welcome.html';
    }else{
        loginMessage.innerText="Tên đăng nhập hoặc mật khẩu không hợp lệ";
        loginMessage.style.color='red';
    }
}

function logout(){
    window.location.href='index.html';
}