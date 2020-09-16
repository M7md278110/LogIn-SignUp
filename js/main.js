var myEye1 = document.getElementById('eye1');
var myPass1 = document.getElementById('logpass1');

myEye1.onclick = function(e) {
    e.preventDefault();
    if (this.classList.contains('fa-eye')) {
        this.classList.remove("fa-eye");
        this.classList.add('fa-eye-slash');
        myPass1.setAttribute('type', 'text');
    } else {
        this.classList.remove("fa-eye-slash");
        this.classList.add('fa-eye');
        myPass1.setAttribute('type', 'password');
    }
}

var myEye2 = document.getElementById('eye2');
var myPass2 = document.getElementById('logpass2');

myEye2.onclick = function(e) {
    e.preventDefault();
    if (this.classList.contains('fa-eye')) {
        this.classList.remove("fa-eye");
        this.classList.add('fa-eye-slash');
        myPass2.setAttribute('type', 'text');
    } else {
        this.classList.remove("fa-eye-slash");
        this.classList.add('fa-eye');
        myPass2.setAttribute('type', 'password');
    }
}