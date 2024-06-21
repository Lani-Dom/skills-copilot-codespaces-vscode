// Create web server
// Start the server
// Listen on the port
// Get the comments
// Get the comment by id
// Add a new comment
// Update a comment
// Delete a comment

// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Start the server
app.listen(3000, () => {
    console.log('Server started');
});

// Listen on the port
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Get the comments
app.get('/api/comments', (req, res) => {
    res.send('Get all comments');
});

// Get the comment by id
app.get('/api/comments/:id', (req, res) => {
    res.send('Get comment by id');
});

// Add a new comment
app.post('/api/comments', (req, res) => {
    res.send('Add a new comment');
});

// Update a comment
app.put('/api/comments/:id', (req, res) => {
    res.send('Update a comment');
});

// Delete a comment
app.delete('/api/comments/:id', (req, res) => {
    res.send('Delete a comment
