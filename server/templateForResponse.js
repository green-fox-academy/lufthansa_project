'use strict';
var moment = require('moment');

function responseTemplate(result) {
  var resultArray = [];
  result.rows.forEach(function (build) {
    var buildToObject = {
      projects: [
        {
          buildId: build.build_id,
          name: build.project_name,
          id: build.project_id,
          projectUrl: build.project_url,
          lastBuild: {
            status: build.build_status,
            time: moment(build.max).format('HH:mm YYYY-MM-DD'),
            coverage: {
              totalLines: build.build_totallines,
              actualLines: build.build_actuallines,
            },
          },
        },
      ],
      status: 'ok',
    };
    resultArray.push(buildToObject);
  });

  return resultArray;
}

module.exports = responseTemplate;
