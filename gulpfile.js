'use strict';

var gulp = require('gulp');
var potcoreTasks = require('potcore-build');

potcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
