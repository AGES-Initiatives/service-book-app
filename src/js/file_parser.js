"use strict";
import _ from 'lodash';

function parse_year(year_data) {
  let yearName = Object.keys(year_data)[0];
  let months = year_data[yearName];
  let retYear = [];
  for (let i=0; i<months.length; i++) {
    retYear.push(parse_month(months[i], yearName));
  }
  return retYear;
}

function parse_month(month_data, yearName) {
  let monthName = Object.keys(month_data)[0];
  let days = month_data[monthName];
  let retMonth = { name: monthName, data: [] };
  for (let j=0; j<days.length; j++) {
    retMonth.data.push(parse_day(days[j], monthName, yearName));
  }

  return retMonth;
}

function parse_day(day_data, monthName, yearName) {
  let dayName = Object.keys(day_data)[0];
  let services = day_data[dayName];

  let day = {
    title: dayName,
    month: monthName,
    year: yearName,
    services: []
  };
  for (let k=0; k<services.length; k++) {
    day.services.push(parse_services(services[k]));
  }

  return day;
}

function parse_services(service_data) {
  let serviceName = Object.keys(service_data)[0];
  let langsTypes = service_data[serviceName];
  let retService = { name: serviceName, href: ''};
  for (let i=0; i<langsTypes.length; i++) {
    let langType = langsTypes[i];
    let lang = Object.keys(langType)[0];
    if (lang == "GR-EN") {
      let hrefAndType = langType["GR-EN"][0];
      let href = hrefAndType.href;
      let type = hrefAndType.type;
      if (type == "Text/Music") {
        retService.href = href;
      }
    }
  }
  return retService;
}

export default function parse_service_listing(rawJSON) {
  let years = rawJSON.years;
  let retData = [];
  for (let i=0; i<years.length; i++) {
    let tmpYr = parse_year(years[i]);
    for (let j=0; j<tmpYr.length; j++)
      retData.push(tmpYr[j]);
  }

  console.log("Parsed data", retData);
  console.log("Lodash", _); 
  return retData;
}

function old_parse(rawJSON) {
  var parsedListing = [];

  var years = rawJSON.years;
  for (var i=0; i<years.length; i++) {
    var year = years[i];
    var yearName = Object.keys(year)[0];
    var months = year[yearName];
    for (var j=0; j<months.length; j++) {
      var month = months[j];
      var monthName = Object.keys(month)[0];
      var days = month[monthName];
      for (var k=0; k<days.length; k++) {
        var day = days[k];
        var dayName = Object.keys(day)[0];

        var dayInfo = {
          year: yearName,
          month: monthName,
          day: dayName,
          services: [] 
        };

        var services = day[dayName];
        for (var l=0; l<services.length; l++) {
          var service = services[l];
          var serviceName = Object.keys(service)[0];

          var tmpService = {
            name: serviceName,
            href: null
          };

          var langsAndTypes = service[serviceName];
          for (var m=0; m<langsAndTypes.length; m++) {
            var langAndType = langsAndTypes[m];
            var lang = Object.keys(langAndType)[0];
            if (lang == "GR-EN") {
              var hrefAndType = langAndType["GR-EN"][0];
              var href = hrefAndType.href;
              var type = hrefAndType.type;
              if (type == "Text/Music") {
                tmpService.href = href;
              }
            }
          }
          dayInfo.services.push(tmpService);
        }
        parsedDays.push(dayInfo);
      }
    }
  }

  return parsedDays;
}
