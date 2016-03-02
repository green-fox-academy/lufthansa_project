'use strict';

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
            time: build.build_date,
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
