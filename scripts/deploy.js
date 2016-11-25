var execSync = require('child_process').execSync;
var jsonfile = require('jsonfile')
var appEngineConfig = jsonfile.readFileSync('package.json').appEngine;

// 1. Deploy index.yaml to update Data Store indices
execCommand(buildDeployCommand('server/index.yaml'));

// 2. Deploy app.yaml which deploy the applcation
execCommand(buildDeployCommand('server/app.yaml'));

function execCommand(command) {
  console.log('executing ' + command + '...');
  var result = execSync(command);
  console.log(result.toString());
}

function buildDeployCommand(yamlFile) {
  var args = ['gcloud app deploy'];
  buildAppEngineArgs(args);
  args.push('--quiet');
  args.push(yamlFile)

  return args.join(' ');
}

function buildAppEngineArgs(args) {
  if (appEngineConfig) {
    if (appEngineConfig.project) {
      args.push('--project ' + appEngineConfig.project);
    }
    if (appEngineConfig.version) {
      args.push('-v ' + appEngineConfig.version);
    }
  }
}
