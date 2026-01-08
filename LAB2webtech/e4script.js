const userForm = document.getElementById('userForm');
const userTable = document.querySelector('#userTable tbody');
const clearAllBtn = document.getElementById('clearAll');

document.addEventListener('DOMContentLoaded', displayUsers);

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const mobile = document.getElementById('userMobile').value;
    const pass = document.getElementById('userPass').value;

    if (mobile.length !== 10) return alert("Mobile must be 10 digits");
    if (pass.length < 6) return alert("Password must be at least 6 characters");

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.email === email)) {
        return alert("Email already registered!");
    }

    const newUser = { name, email, mobile, pass };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    userForm.reset();
    displayUsers();
});

function displayUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    userTable.innerHTML = '';

    users.forEach((user, index) => {
        const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.mobile}</td>
                <td><button class="delete-btn" onclick="deleteUser(${index})">Delete</button></td>
            </tr>
        `;
        userTable.innerHTML += row;
    });
}

window.deleteUser = (index) => {
    let users = JSON.parse(localStorage.getItem('users'));
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers();
};

clearAllBtn.onclick = () => {
    if (confirm("Delete all users?")) {
        localStorage.removeItem('users');
        displayUsers();
    }
};