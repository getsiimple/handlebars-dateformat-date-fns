'use strict';

var { addMinutes, format } = require('date-fns');

// https://github.com/date-fns/date-fns/blob/main/docs/unicodeTokens.md
module.exports = function dateFormat(date, desiredFormat, utc) {
    return (utc === true) ? format(addMinutes(date, date.getTimezoneOffset()), desiredFormat) : format(date, desiredFormat);
};
