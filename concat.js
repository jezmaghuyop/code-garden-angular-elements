const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [    
        './dist/code-garden-demo/runtime.js',
        './dist/code-garden-demo/polyfills.js',
        './dist/code-garden-demo/main.js',
    ];

    // Make sure directory exist, if not it will create it
    await fs.ensureDir('elements');

    // Delete all files inside the directory if it already existed before
    // we want to make sure, we only copy new files
    await fs.emptyDirSync('elements');

    const exludeFiles = [
        'main.js',
        'polyfills.js',
        'runtime.js',

        // We don't need this
        'index.html',
        'favicon.ico',
        '3rdpartylicenses.txt'
    ];

    // Copy all files in dist folder except the `excluded files`
    // we will merge them into a single file
    fs.copy('./dist/code-garden-demo', './elements', {
        clobber: true,
        filter: n => {
            const shouldExclude = exludeFiles.find(x => n.indexOf(x) >= 0);

            return !shouldExclude;
        }
    },
        () => console.log('done')
    );

    await concat(files, 'elements/code-garden-app.js');
})();