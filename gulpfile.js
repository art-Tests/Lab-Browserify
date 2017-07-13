var gulp = require('gulp')
var chai = require('chai')
var mocha = require('gulp-mocha')
var karma = require('karma');
var browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('default', ['karma'], function () {
  console.log('My Default Task')

})

gulp.task('karma',['mocha'], function (done) {
  karma.server.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});


gulp.task('mocha',['build-js'], function () {
  console.log('Run All Unit Test With Mocha')
  return gulp.src(['test/*.test.js'], { read: false })
    .pipe(mocha({
      reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'report',
        reportFilename: 'TestReport',
        reportTitle: 'All Unit Test Report'
        // inlineAssets: true
      },
      globals: {
        should: require('chai')
      }
    }))
})




gulp.task('build-js', function() {
    console.log('執行打包js...')
    return browserify()
        .require(require.resolve('./src/SBonus.js'),{expose:'SBonus'})
        .require(require.resolve('./src/DBonus.js'),{expose:'DBonus'})
        .require(require.resolve('./src/CalculateBonus.js'),{expose:'CalculateBonus'})
        .require(require.resolve('./src/Calculator.js'),{expose:'Calculator'})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/'));
});