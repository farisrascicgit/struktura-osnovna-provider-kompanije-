new Vue({
    el: '#app',
    data: {
        showLoginForm: false,
        name: '',
        email: '',
        phone: ''
    },
    methods: {
        toggleLoginForm() {
            this.showLoginForm = !this.showLoginForm;
        },
        submitForm() {
            alert(`Prijava uspješna!\nIme: ${this.name}\nEmail: ${this.email}\nBroj telefona: ${this.phone}`);
            this.showLoginForm = false;
            this.name = '';
            this.email = '';
            this.phone = '';
        }
    }
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
