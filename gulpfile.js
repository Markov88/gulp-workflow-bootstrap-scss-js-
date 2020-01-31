const gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  newer = require('gulp-newer'),
purgecss = require('gulp-purgecss'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
  size = require('gulp-size'),
  imagemin = require('gulp-imagemin'),
browserSync = require('browser-sync').create();

function css() {
  return gulp.src('./src/assets/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename(function (path) {
      path.extname = ".min.css";
    }))
    .pipe(
      purgecss({
        content: ['public/**/*.html']
      })
    )
    .pipe(gulp.dest('./public/assets/css/'))
    .pipe(browserSync.stream());
}

function html() {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./public/'));
};

function serve() {
  browserSync.init({
    server: {
      baseDir: './public'
    }
  })
};

const dir = {
  src: 'src/',
  build: 'public/'
};

const imgConfig = {
  src: dir.src + 'images/**/*',
  build: dir.build + 'images/',
  minOpts: {
    optimizationLevel: 5
  }
};

function images() {

  return gulp.src(imgConfig.src)
    .pipe(newer(imgConfig.build))
    .pipe(imagemin(imgConfig.minOpts))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(imgConfig.build));
};
 
function js(){
  return gulp.src([
              'node_modules/jquery/dist/jquery.js',
              'node_modules/bootstrap/dist/js/bootstrap.js',
              'src/assets/js/**/*.js'
          ])
          // .pipe(count('## js-files selected'))
           .pipe(concat({ path: 'app.js', stat: { mode: 0666 }}))
          .pipe(uglify())
      .pipe(gulp.dest('./public/assets/js'));
};
 
gulp.watch('./src/assets/js/**/*.js',js);
gulp.watch('./src/images/**/*',images);
gulp.watch('./src/assets/css/**/*.scss', css);
gulp.watch('./src/*.html', html).on('change', browserSync.reload);

exports.default = gulp.parallel(html, css, js, images, serve);