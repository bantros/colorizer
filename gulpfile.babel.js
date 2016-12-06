// load plugins

import browserSync from 'browser-sync';
import fs from 'fs';
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import clean from 'gulp-clean';
import cleanCSS from 'gulp-clean-css';
import gcmq from 'gulp-group-css-media-queries';
import htmlmin from 'gulp-htmlmin';
import jshint from 'gulp-jshint';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import prettify from 'gulp-prettify';
import replace from 'gulp-replace';
import runSequence from 'run-sequence';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import twig from 'gulp-twig';
import uglify from 'gulp-uglify';
import util from 'gulp-util';
import webpack from 'webpack-stream';

const path = {
  src: './_src',
  build: './_build',
  css: '/assets/styles',
  js: '/assets/scripts'
};

// autoprefixer

const browsers = [
  'last 2 versions',
  'ie 10',
  'ios 7'
];

// browserSync

gulp.task('browserSync', () => {

  browserSync.init({
    server: path.build,
    notify: false
  });

});

// plumber

const onError = function(err) {
  console.log(err.message);
  this.emit('end');
};

// styles

gulp.task('styles', () => {
  return gulp.src(path.src + path.css + '/*.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer(browsers))
    .pipe(gcmq())
    .pipe(util.env.production ? cleanCSS() : util.noop())
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: path.build + path.css }))
    .pipe(gulp.dest(path.build + path.css))
    .pipe(browserSync.stream())
    .pipe(notify({ title: 'styles', message: 'styles have been compiled into main.css' }));
});

// scripts

gulp.task('scripts', () => {
  return gulp.src([path.src + path.js + '/**/*.js'])
    .pipe(plumber({ errorHandler: onError }))
    .pipe(!util.env.production ? jshint('.jshintrc') : util.noop())
    .pipe(!util.env.production ? jshint.reporter('jshint-stylish') : util.noop())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(util.env.production ? uglify() : util.noop())
    .pipe(gulp.dest(path.build + path.js))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(notify({ title: 'scripts', message: 'scripts have been compiled into bundle.js' }));
});

// twig

gulp.task('twig', () => {
  return gulp.src(path.src + '/templates/**/index.html')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(twig())
    .pipe(!util.env.production ? prettify({ indent_inner_html: true }) : util.noop())
    .pipe(util.env.production ? replace(/<link rel="stylesheet" href="\/assets\/styles\/main.css"[^>]*>/, function(s) {
      var style = fs.readFileSync(path.build + path.css + '/main.css', 'utf8');
      return '<style>\n' + style + '\n</style>';
    }) : util.noop())
    .pipe(util.env.production ? htmlmin({ collapseWhitespace: true }) : util.noop())
    .pipe(gulp.dest(path.build))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(notify({ title: 'twig', message: 'twig templates has been compiled' }));
});

// clean

gulp.task('clean', () => {
  return gulp.src([path.build + path.css + '/*.css', path.build + path.js + '/*.js'], { read: false })
    .pipe(clean());
});

gulp.task('build', () => {
  runSequence('clean', ['styles', 'scripts'], 'twig');
});

// watch

gulp.task('watch', ['browserSync'], () => {
  gulp.watch(path.src + path.css + '/**/*.scss', ['styles']);
  gulp.watch(path.src + path.js + '/**/*.js', ['scripts']);
  gulp.watch(path.src + '/templates/**/*.html', ['twig']);
});

// default

gulp.task('default', () => {
  gulp.start('watch');
});
