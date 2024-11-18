const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'projects_data');
const outputFile = path.join(__dirname, 'projects.json');

let projects = [];

// Read all JSON files in the projects_data directory
fs.readdir(projectsDir, (err, files) => {
    if (err) {
        console.error('Error reading projects_data directory:', err);
        process.exit(1);  // Exit with failure
    }

    files.forEach(file => {
        if (path.extname(file) === '.json') {
            const projectData = JSON.parse(fs.readFileSync(path.join(projectsDir, file)));
            projects.push(projectData);
        }
    });

    // Write to projects.json
    const output = { projects };
    fs.writeFileSync(outputFile, JSON.stringify(output, null, 4));
    console.log('projects.json has been updated.');
});
