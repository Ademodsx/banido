document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Verifikasi kredensial admin
    if (username === 'admin@gmail.com' && password === 'admin') {
        window.location.href = 'admin.html';
    }
    // Verifikasi kredensial user biasa
    else if (username === 'user@gmail.com' && password === 'user') {
        window.location.href = 'user.html';
    }
    // Tampilkan pesan kesalahan jika kredensial tidak valid
    else {
        alert('Invalid username or password. Please try again.');
    }
});
