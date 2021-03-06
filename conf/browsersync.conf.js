const conf = require('./gulp.conf');

module.exports = function() {
    return {
        server: {
            baseDir: [
                conf.paths.tmp,
                conf.paths.src,
            ],
        },
        port: 4020,
        open: false,
    };
};
