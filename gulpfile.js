// Gulp
var gulp = require('gulp');

// Plugins
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var twig = require('gulp-twig');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var cssGlobbing = require('gulp-css-globbing');
var babel = require('gulp-babel');

// Paths
var paths = {
    scripts: [
        // 'bower_components/modernizr/modernizr.js',
        // 'bower_components/fastclick/lib/fastclick.js',
        // 'bower_components/foundation/js/foundation/foundation.js',
        // 'bower_components/foundation/js/foundation/foundation.tab.js',
        // 'assets/js/navigation.js',
        

        'bower_components/foundation-sites/js/foundation.core.js',
        'bower_components/foundation-sites/js/foundation.util.mediaQuery.js',
        'bower_components/foundation-sites/js/foundation.util.keyboard.js',
        'bower_components/foundation-sites/js/foundation.util.motion.js',
        'bower_components/foundation-sites/js/foundation.util.timerAndImageLoader.js',
        'bower_components/foundation-sites/js/foundation.util.touch.js',
        // 'bower_components/foundation-sites/js/foundation.toggler.js',
        'bower_components/foundation-sites/js/foundation.responsiveMenu.js',
        'bower_components/foundation-sites/js/foundation.responsiveToggle.js',
        'bower_components/foundation-sites/js/foundation.orbit.js',
        'assets/js/components/*.js',
        'assets/js/main.js'
        ],
    copyScripts: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/svg4everybody/dist/svg4everybody.min.js'
        ],
    images: ['assets/svg/*.svg'],
    fonts: [
        'assets/fonts/*.{ttf,woff,eot,svg}'
        ],
    scss: [
        'assets/scss/main.scss',
        ],
    scssWatch: [
        'assets/scss/**/*.scss'
        ],
    twigTemplates: [
      'assets/twig/[^_]*.twig',
    ],
    twigWatch: [
      'assets/twig/*.twig',
    ],
    dest : 'dist/'
};

// Compile Sass
gulp.task('sass', function() {
    gulp.src(paths.scss)
        .pipe(plumber())
        // .pipe(sourcemaps.init()) // Initialize sourcemap plugin
        .pipe(cssGlobbing({
          extensions: ['.scss'],
          autoReplaceBlock: {
            onOff: true,
            globBlockBegin: 'cssGlobbingBegin',
            globBlockEnd: 'cssGlobbingEnd',
            globBlockContents: 'components/*.scss'
          },
          scssImportPath: {
            leading_underscore: false,
            filename_extension: false
          }
        }))
        .pipe(sass({
            includePaths: ['assets/scss', 'bower_components/foundation-sites/scss'],
            outputStyle: 'expanded'
        }))
        .pipe(prefix(
            "last 2 versions", "> 1%", "ie 8"
        ))
        // .pipe(minifycss()) //TODO turn on
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dest + 'css'))
        .pipe(browserSync.stream());
});

// Compile Twig templates
gulp.task('twig', function () {
    'use strict';
    return gulp.src(paths.twigTemplates)
        .pipe(twig())
        .pipe(gulp.dest('.'))
        .pipe(browserSync.stream());
});

// Uglify JS
gulp.task('uglify', function() {
    gulp.src( ['assets/js/main.js'] )
        .pipe(plumber())
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest(paths.dest + 'js'));
});

// Concat
// TODO concat normalize.css from bower components with our stylesheet
gulp.task('concat', function() {
  gulp.src( paths.scripts )
    .pipe(plumber())
    .pipe(concat('main.js'))
    // .pipe(uglify({
    //     outSourceMap: true
    // }))
    .pipe(gulp.dest(paths.dest + 'js'))
    .pipe(babel())
    .pipe(browserSync.stream());
});

// //SVGs
gulp.task('svgstore', function () {
    return gulp
        .src(paths.images)
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            };
        }))
        .pipe(svgstore())
        .pipe(gulp.dest(paths.dest + '/svg/'));
});

gulp.task('copyfonts', function() {
   gulp.src(paths.fonts)
   .pipe(gulp.dest(paths.dest + '/fonts'));
});

gulp.task('copyScripts', function() {
   gulp.src(paths.copyScripts)
   .pipe(gulp.dest(paths.dest + '/js'));
});

gulp.task('serve', function() {

    browserSync.init({
        server: {
            baseDir: ".",
            index: "/index.html"
        }
    });

    gulp.watch(paths.twigWatch, ['twig']);
    gulp.watch(paths.scssWatch, ['sass']);
    gulp.watch(paths.scripts, ['concat']);
    // gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', [ 'copyfonts', 'copyScripts', 'svgstore', 'sass', 'twig', 'concat', 'serve' ]);
