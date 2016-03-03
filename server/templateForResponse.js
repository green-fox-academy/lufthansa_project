'use strict';
var moment = require('moment');

function responseTemplate(result) {
  // console.log(result.rows[0]);
  var resultObject = {
    projects: [],
    status:'ok'
  };
  result.rows.forEach(function (build) {
    var buildToObject = {  
          projectId: build.project_id,
          projectName: build.project_name,
          projectUrl: build.project_url,
          lastBuild: {
            buildId: build.build_id,
            status: build.build_status,
            time: moment(build.max).format('YYYY-MM-DD HH:mm'),
            coverage: {
              totalLines: build.build_totallines,
              actualLines: build.build_actuallines,
            },
          }
        };

    resultObject.projects.push(buildToObject);
  });
  console.log(resultObject);
  return resultObject;
}

module.exports = responseTemplate;
