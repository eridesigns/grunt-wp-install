'use strict';

// Basic template description.
exports.description = 'Create a WordPress project.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'WordPress is ready. Go ahead and start building your theme.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    {
      name: 'database_name',
      message: 'Database Name:',
      validator: /^[\w\-\.]+$/,
      warning: 'Must be only letters, numbers, dashes, dots or underscores.',
      default: 'database_name_here'
    },
    {
      name: 'username',
      message: 'Database Username:',
      validator: /^[\w\-\.]+$/,
      warning: 'Must be only letters, numbers, dashes, dots or underscores.',
      default: 'username_here'
    },
    {
      name: 'password',
      message: 'Password:',
      validator: /^[\w\-\.]+$/,
      warning: 'Must be only letters, numbers, dashes, dots or underscores.',
      default: 'password_here'
    },
    {
      name: 'localhost',
      message: 'Host:(localhost)',
      validator: /^[\w\-\.]+$/,
      warning: 'Must be only letters, numbers, dashes, dots or underscores.',
      default: 'localhost'
    }
  ], function(err, props) {

    props.keywords = [];

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Getting files to your choosen directory
    init.copyAndProcess(files, props, {noProcess: ['wp-includes/**/*', 'wp-admin/**/*', 'wp-content/plugins/**/*']});

    // All done!
    done();
  });

};