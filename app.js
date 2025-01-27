const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/projects', (req, res) => {
    const projects = [
        {
            title: 'IAM Automation Platform',
            description: 'Automated access profile creation using ServiceNow, Jenkins, and Python.',
            link: 'https://github.com/your-repo',
        },
        {
            title: 'Solar Flare Analysis',
            description: 'Time series analysis using RNN, CNN, LSTM, and DNN models.',
            link: 'https://github.com/your-repo',
        },
    ];
    res.render('projects', { title: 'Projects', projects });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

app.get('/skills', (req, res) => {
    res.render('skills', { title: 'skills' });
});

app.get('/experience', (req, res) => {
    res.render('experience', { title: 'experience' });
});

app.get('/projects', (req, res) => {
    res.render('projects', { title: 'projects' });
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
