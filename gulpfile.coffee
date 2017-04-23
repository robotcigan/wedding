gulp = require 'gulp'
stylus = require 'gulp-stylus'
nib = require 'nib'
rupture = require 'rupture'
autoprefixer = require 'gulp-autoprefixer'
uglifycss = require 'gulp-uglifycss'
sourcemaps = require 'gulp-sourcemaps'
# jade = require 'gulp-jade'
pug = require 'gulp-pug'
# coffee = require 'gulp-coffee'
browserSync = require 'browser-sync'
reload = browserSync.reload


gulp.task 'stylus', ->
	gulp.src 'styles/*.styl'
		# .pipe sourcemaps.init()
		.pipe stylus
			'include css': true
			use: [nib(), rupture()]
			# compress: true
		.on 'error', (err) ->
			console.log err
		# .pipe autoprefixer({browsers: ['> 1%', 'last 5 version','IE 10'], cascade: false})
		# .pipe uglifycss
		# 	'uglyComments': true
		# .pipe sourcemaps.write('.')
		.pipe gulp.dest 'dist/styles/css/'
		.pipe(reload({stream: true}))


# gulp.task 'jade', ->
# 	gulp.src '*.jade'
# 		.pipe jade {pretty: true}
# 		.pipe gulp.dest 'dist/'

gulp.task 'pug', ->
	gulp.src '*.pug'
		.pipe pug {pretty: true}
		.pipe gulp.dest 'dist/'

# gulp.task 'coffee', ->
# 	gulp.src('js/*.coffee')
# 		.pipe(coffee(bare: true))
# 		.pipe gulp.dest('dist/js/')
# 		.pipe(reload({stream: true}))


# gulp.task('jade-watch', ['jade'], reload)
gulp.task('pug-watch', ['pug'], reload)

gulp.task 'watch', ->
	gulp.watch 'styles/**/*.styl', ['stylus']
	# gulp.watch 'js/*.coffee',   ['coffee']
	gulp.watch '*.pug',        ['pug']


# gulp.task 'default', ['pug', 'stylus', 'coffee','watch'], ->
gulp.task 'default', ['pug', 'stylus', 'watch'], ->

	browserSync
		server: 'dist/'
		notify: false
		open: false

	# gulp.watch('styles/*.styl', ['stylus'])
	gulp.watch('dist/styles/css/main.css')
	# gulp.watch('js/*.coffee',     ['coffee'])
	gulp.watch('*.pug',      ['pug-watch'])