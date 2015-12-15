var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

  component: {
    name: 'DataTable',
    dependencies: [
      'classnames',
      'event-emitter',
      'react',
      'react-dom'
    ],
    less: {
      path: 'less',
      entry: 'default.less'
    }
  },

  example: {
    src: 'examples/src',
    dist: 'examples/dist',
    standalone: true,
    files: [
      'index.html',
      '.gitignore'
    ],
    scripts: [
      'demo.js'
    ],
    less: [
      'style.less'
    ]
  }

};

initGulpTasks(gulp, taskConfig);