document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const jsonOutput = document.getElementById('jsonOutput');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        const formValues = {
            name: formData.get('name'),
            lastname: formData.get('lastname'),
            age: parseInt(formData.get('age')),
            gender: formData.get('gender'),
            hobbies: [],
            country: formData.get('country'),
            about: formData.get('about')
        };
        
        const hobbyCheckboxes = form.querySelectorAll('input[name="hobbies"]:checked');
        hobbyCheckboxes.forEach(checkbox => {
            formValues.hobbies.push(checkbox.value);
        });
        
        const jsonData = JSON.stringify(formValues, null, 2);
        
        jsonOutput.textContent = jsonData;
    });
});