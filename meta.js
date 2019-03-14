module.exports = {
    "prompts": {
        "name": {
            "type"    : "string",
            "required": false,
            "message" : "Project name",
            "default" : "my-project"
        },
        "description": {
            "type"    : "string",
            "required": false,
            "message" : "Project description",
            "default" : "A new base angularjs project"
        },
        "author": {
            "type"   : "string",
            "message": "Author"
        }
    },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n bower install\n"
}
