document.getElementById('add-student-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentData = {
        rollNumber: document.getElementById('rollNumber').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        department: document.getElementById('department').value
    };

    fetch('http://localhost:8080/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Student added successfully!');
        document.getElementById('add-student-form').reset();
    })
    .catch(error => {
        alert('Failed to add student. Please try again.');
    });
});
