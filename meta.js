module.exports = {
    prompts: {
        name: {
            type    : "string",
            required: false,
            message : "Project name",
            default : "my-project"
        },
        description: {
            type    : "string",
            required: false,
            message : "Project description",
            default : "A new base angularjs project"
        },
        author: {
            type   : "string",
            message: "Author"
        },
        test: {
            type   : "confirm",
            message: "Use test to lint your code?"
        }
    },
    filters: {
        'test/*':'test'
    },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n bower install\n"
}
