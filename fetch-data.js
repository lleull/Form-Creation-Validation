// Initialize the async function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Convert response to JSON
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create and append user list
        const userList = document.createElement('ul');
        userList.className = 'user-list';
        
        // Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.className = 'user-item';
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the user list to the container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Error handling
        dataContainer.innerHTML = '';
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Failed to load user data.';
        dataContainer.appendChild(errorMessage);
        
        // Log the error to console
        console.error('Error fetching user data:', error);
    }
}

// Invoke fetchUserData when the DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData); 