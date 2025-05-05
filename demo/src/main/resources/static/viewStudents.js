window.onload = function() {
    fetch('http://localhost:8080/api/students')
    .then(response => response.json())
    .then(data => {
        const studentList = document.getElementById('student-list').getElementsByTagName('tbody')[0];
        data.forEach(student => {
            const row = studentList.insertRow();
            row.insertCell(0).textContent = student.rollNumber;
            row.insertCell(1).textContent = student.name;
            row.insertCell(2).textContent = student.email;
            row.insertCell(3).textContent = student.department;
        });
    })
    .catch(error => {
        alert('Failed to load students. Please try again.');
    });
};
