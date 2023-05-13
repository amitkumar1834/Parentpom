// .versionrc.js
const updater = require('./.github/components/version-helper/project-file-updater');

const projectFiles = [
    {
        filename: './parent-pom.pom',
        updater: updater
    },
];

module.exports = {
    types: [
        {"type": "feat", "section": "Features"},
        {"type": "fix", "section": "Bug Fixes"},
        {"type": "chore", "section": "Chores"},
        {"type": "docs", "section": "Documentation"},
        {"type": "style", "section": "Styles"},
        {"type": "refactor", "section": "Refactorings"},
        {"type": "perf", "section": "Performance"},
        {"type": "test", "section": "Tests"}
    ],
    issueUrlFormat: "https://umpgjira.atlassian.net/browse/UPPMDEV-{{id}}",
    issuePrefixes: [
        "UPPMDEV-"
    ],
    packageFiles: projectFiles,
    bumpFiles: projectFiles,
    infile: "./CHANGELOG.md" 
};