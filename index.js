"use strict";
var humanizeDuration = require('humanize-duration');
var moment = require('moment');

module.exports = function prettyDate(start,end,options)
{
    if(start == null)
    {
        return "Please enter the starting date";
    }
    var start_date = moment(start);
    var start_date_check = start_date.isValid();
    if(start_date_check == false)
    {
        return null;
    }

    if(end == null)
    {
        var end_date = moment();
    } else {
        var end_date = moment(end);
        var end_date_check = end_date.isValid();
        if(end_date_check == false)
        {
            return null;
        }
    }

    var duration = moment.duration(start_date.diff(end_date));
    var duration_milliseconds = duration.as('milliseconds');
    
    if(options == null)
    {
        return humanizeDuration(duration_milliseconds);
    } else {
        return humanizeDuration(duration_milliseconds,options);
    }
     
}