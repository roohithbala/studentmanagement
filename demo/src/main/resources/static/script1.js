document.getElementById('add-student-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const rollNumber = document.getElementById('rollNumber').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    const studentData = {
        rollNumber: rollNumber,
        name: name,
        email: email,
        department: department
    };

    // Send the data to the backend API
    fetch('http://localhost:8080/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Student added:', data);
        alert('Student added successfully!');
        // Redirect to home or another page if needed
    })
    .catch(error => {
        console.error('Error adding student:', error);
        alert('Failed to add student. Please try again.');
    });
});
