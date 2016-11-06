// load plugins

var gulp = require('gulp');
var browserSync = require('browser-sync');
var fs = require('fs');
var webpack = require('webpack-stream');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var gcmq = require('gulp-group-css-media-queries');
var htmlmin = require('gulp-htmlmin');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');
var sass = require('gulp-ruby-sass');
var twig = require('gulp-twig');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

var path = {
  src: './_src',
  build: './_build',
  css: '/assets/styles',
  js: '/assets/scripts'
};

// autoprefixer

var browsers = [
  'last 2 versions',
  'ie 10',
  'ios 7'
];

// browserSync

gulp.task('browserSync', function() {

  browserSync({
    proxy: 'colorizer.dev',
    notify: false
  });

});

// plumber

var onError = function(err) {
  console.log(err.message);
  this.emit('end');
};

// styles

gulp.task('styles', function() {
  return sass(path.src + path.css + '/*.scss', { style: 'expanded' })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(autoprefixer(browsers))
    .pipe(gcmq())
    .pipe(util.env.production ? cleanCSS() : util.noop())
    .pipe(gulp.dest(path.build + path.css))
    .pipe(browserSync.stream())
    .pipe(notify({ title: 'styles', message: 'main.scss has been compiled into main.css' }));
});

// scripts

gulp.task('scripts', function() {
  return gulp.src([path.src + path.js + '/**/*.js'])
    .pipe(plumber({ errorHandler: onError }))
    .pipe(!util.env.production ? jshint('.jshintrc') : util.noop())
    .pipe(!util.env.production ? jshint.reporter('jshint-stylish') : util.noop())
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      },
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel'
        }]
      }
    }))
    .pipe(util.env.production ? uglify() : util.noop())
    .pipe(gulp.dest(path.build + path.js))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(notify({ title: 'scripts', message: 'scripts have been compiled into bundle.js' }));
});

// twig

gulp.task('twig', function() {
  return gulp.src(path.src + '/*.html')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(twig())
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

gulp.task('clean', function() {
  return gulp.src([path.build + path.css + '/*.css', path.build + path.js + '/*.js'], { read: false })
    .pipe(clean());
});

gulp.task('build', function() {
  runSequence('clean', ['styles', 'scripts'], 'twig');
});

// watch

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(path.src + path.css + '/**/*.scss', ['styles']);
  gulp.watch(path.src + path.js + '/**/*.js', ['scripts']);
  gulp.watch(path.src + '/**/*.html', ['twig']);
});

// default

gulp.task('default', function() {
  gulp.start('watch');
});
