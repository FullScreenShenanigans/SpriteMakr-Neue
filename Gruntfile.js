module.exports = function (grunt) {
    grunt.initConfig({
        "pkg": grunt.file.readJSON("package.json"),
        "meta": {
            "paths": {
                "source": "Source",
                "styles": "Styles",
                "build": "Build",
                "dist": "Distribution"
            }
        },
        "tslint": {
            "default": {
                "options": {
                    "configuration": grunt.file.readJSON("tslint.json")
                },
                "files": {
                    "src": [
                        "<%= meta.paths.source %>/*.ts",
                        "<%= meta.paths.source %>/*.tsx",
                        "<%= meta.paths.source %>/Components/**/*.tsx"
                    ]
                }
            }
        },
        "clean": {
            "prebuild": [
                "<%= meta.paths.dist %>",
                "<%= meta.paths.build %>",
                "<%= meta.paths.source %>/<%= meta.paths.styles %>/**/*.css"
            ],
            "postbuild": [
                "<%= meta.paths.dist %>/<%= pkg.name %>.js",
                "<%= meta.paths.build %>"
            ]
        },
        "copy": {
            "prebuild": {
                "files": [{
                    "src": "<%= meta.paths.source %>/*.ts",
                    "dest": "<%= meta.paths.build %>/",
                    "expand": true,
                    "flatten": true
                }, {
                    "src": "<%= meta.paths.source %>/*.tsx",
                    "dest": "<%= meta.paths.build %>/",
                    "expand": true,
                    "flatten": true
                }, {
                    "src": "<%= meta.paths.source %>/<%= pkg.name %>.tsx",
                    "dest": "<%= meta.paths.build %>/",
                    "expand": true,
                    "flatten": true,
                    "rename": function (dest, src) {
                        return dest + "/<%= pkg.name %>-<%= pkg.version %>.tsx";
                    }
                }, {
                    "src": "<%= meta.paths.source %>/References/*.ts",
                    "dest": "<%= meta.paths.build %>",
                    "expand": true,
                    "flatten": true
                }, {
                    "src": "<%= meta.paths.source %>/References/*.?s",
                    "dest": "<%= meta.paths.dist %>/",
                    "expand": true,
                    "flatten": true
                }, {
                    "src": "README.md",
                    "dest": "<%= meta.paths.dist %>/"
                }, {
                    "src": "LICENSE.txt",
                    "dest": "<%= meta.paths.dist %>/"
                }]
            },
            "distribution": {
                "files": [{
                    "src": "<%= meta.paths.source %>/<%= pkg.name %>.js",
                    "dest": "<%= meta.paths.dist %>/<%= pkg.name %>-<%= pkg.version %>.js"
                }]
            }
        },
        "less": {
            "source": {
                "options": {
                    "paths": ["<%= meta.paths.source %>/<%= pkg.styles %>"]
                },
                "files": [{
                    "expand": true,
                    "cwd": "<%= meta.paths.source %>/<%= meta.paths.styles %>",
                    "src": ["**/*.less"],
                    "dest": "<%= meta.paths.source %>/<%= meta.paths.styles %>",
                    "ext": ".css"
                }]
            },
            "distribution": {
                "options": {
                    "paths": ["<%= meta.paths.source %>/<%= pkg.styles %>"]
                },
                "files": [{
                    "<%= meta.paths.dist %>/styles.css": "<%= meta.paths.source %>/<%= meta.paths.styles %>/**/*.less"
                }]
            }
        },
        "preprocess": {
            "default": {
                "src": "<%= meta.paths.build %>/<%= pkg.name %>.tsx",
                "dest": "<%= meta.paths.dist %>/<%= pkg.name %>-<%= pkg.version %>.tsx"
            }
        },
        "typescript": {
            "source": {
                "src": [
                    "Source/**/*.ts", 
                    "Source/**/*.tsx"
                ],
                "options": {
                    "jsx": "react",
                    "sourceMap": true
                }
            },
            "distribution": {
                "src": [
                    "<%= meta.paths.source %>/<%= pkg.name %>.ts",
                    "<%= meta.paths.source %>/<%= pkg.name %>.tsx"
                ],
                "dest": "<%= meta.paths.dist %>/<%= pkg.name %>-<%= pkg.version %>.js",
                "options": {
                    "jsx": "react",
                    "sourceMap": true
                }
            },
            "watch": {
                "src": [
                    "<%= meta.paths.source %>/**/*.ts", 
                    "<%= meta.paths.source %>/**/*.tsx"
                ],
                "options": {
                    "jsx": "react",
                    "sourceMap": true,
                    "watch": [
                        "<%= meta.paths.source %>/**/*.ts", 
                        "<%= meta.paths.source %>/**/*.tsx"
                    ]
                }
            }
        },
        "uglify": {
            "options": {
                "compress": true,
                "sourceMap": true
            },
            "default": {
                "files": {
                    "<%= meta.paths.dist %>/<%= pkg.name %>-<%= pkg.version %>.min.js": [
                        "<%= meta.paths.dist %>/<%= pkg.name %>-<%= pkg.version %>.js"
                    ]
                }
            }
        },
        "mocha_phantomjs": {
            "default": ["Tests/*.html"]
        }
    });
    
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-preprocess");
    grunt.loadNpmTasks("grunt-typescript");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-mocha-phantomjs");
    grunt.registerTask("default", [
        "tslint", "clean", "copy:prebuild", "preprocess", "typescript:source", "less:source", "copy:distribution", "typescript:distribution", "less:distribution", "clean:postbuild", "uglify", "mocha_phantomjs"
    ]);
    grunt.registerTask("watch", [
        "typescript:watch"
    ]);
};