
/**
 * Generate date results based on the input date and language.
 *
 * @param {Date|string|number} d - The input date in Date object, string, or number format
 * @param {string} lang - The language code for formatting the date
 * @return {Object} An object containing various date and time formats and the time difference from the input date
 */
export default function generateDateResults(d,lang) {
    lang = lang || 'en-US';
    const date = new Date(d);
    const currentDate = Date.now();
    const birthTime = date.getTime();

    const yearsAgo = currentDate - birthTime > 31536000000 ? Math.floor((currentDate - birthTime) / 31536000000) : 0;
    const monthsAgo = (currentDate - birthTime) / 2628000000 > 1 ? Math.floor((currentDate - birthTime) / 2628000000) : 0;
    const daysAgo = (currentDate - birthTime) / 86400000 > 1 ? Math.floor((currentDate - birthTime) / 86400000) : 0;
    const totalMonthsAgo = yearsAgo * 12 + monthsAgo;
    const totalAgeWeeks = Math.floor(totalMonthsAgo / 12) * 52 + Math.floor((totalMonthsAgo % 12) / 4);

    const totalDaysAgo = Math.floor((currentDate - birthTime) / 86400000);
    const totalHoursAgo = Math.floor((currentDate - birthTime) / 3600000);
    const totalMinutesAgo = Math.floor((currentDate - birthTime) / 60000);
    const totalSecondsAgo = Math.floor((currentDate - birthTime) / 1000);

    return {
        default: date,
        timestamp: birthTime,
        utc: date.toUTCString(),
        iso: date.toISOString(),
        rfc: date.toDateString(),
        currentTime: currentDate,
        shortDate: date.toLocaleDateString(lang, { month: "2-digit", day: "2-digit", year: "numeric" }),
        longDate: date.toLocaleDateString(lang, { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
        fullDateTime: date.toLocaleString(lang, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }),
        monthDay: date.toLocaleDateString(lang, { month: "long", day: "numeric" }),
        rfc1123: date.toUTCString().replace("GMT", ""),
        sortableDateTime: date.toISOString().replace(/[:-]|\.\d+/g, ""),
        shortTime: date.toLocaleTimeString(lang, { hour: "numeric", minute: "numeric" }),
        longTime: date.toLocaleTimeString(lang, { hour: "numeric", minute: "numeric", second: "numeric" }),
        universalSortableDateTime: date.toISOString().replace(/-|:/g, ""),
        yearMonth: date.toLocaleDateString(lang, { year: "numeric", month: "long" }),
        binary: birthTime.toString(2),
        hex: parseInt(birthTime.toString(2), 2).toString(16).toUpperCase(),
        octal: parseInt(birthTime.toString(2), 2).toString(8),
        years: yearsAgo.toLocaleString(),
        months: monthsAgo.toLocaleString(),
        weeks: totalAgeWeeks.toLocaleString(),
        days: totalDaysAgo.toLocaleString(),
        hours: totalHoursAgo.toLocaleString(),
        minutes: totalMinutesAgo.toLocaleString(),
        seconds: totalSecondsAgo.toLocaleString(),
    };
}
