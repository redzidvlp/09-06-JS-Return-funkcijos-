// 1. Funkcija, kuri paverčia žmogaus metus į šuns metus:
function humanToDog(humanAge) {
    let dogAge = humanAge * 7;
    return `${humanAge} žmogaus metai yra ${dogAge} šuns metai.`;
}

// 2. Funkcija, kuri skaičiuoja, per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metus skaičių:
function speedOfReading(goalPerYear) {
    let oneBookReadingSpeed = 365 / goalPerYear;
    return `Norint perskaityti ${goalPerYear} knygų per metus, vienai knygai perskaityti turėsite ${oneBookReadingSpeed.toFixed(1)} dienas.`;
}

// 3. Funkcija, kuri konvertuoja dienas į savaites:
function daysToWeeks(days) {
    let weeks = days / 7;
    return `${days} dienos yra ${weeks.toFixed(1)} savaitės.`;
}

// 4. Funkcija, kuri konvertuoja dienas į metus:
function daysToYears(days) {
    let years = days / 365;
    return `${days} dienos yra ${years.toFixed(2)} metai.`;
}

// 5. Funkcija, kuri konvertuoja metus į valandas:
function yearsToHours(years) {
    let hours = years * 365 * 24;
    return `${years} metai turi ${hours} valandas.`;
}

// 6. Funkcija, kuri konvertuoja mėnesius į valandas:
function monthsToHours(months) {
    let hours = months * 30 * 24;
    return `${months} mėnesiai turi ${hours} valandas.`;
}

// 7. Funkcija, kuri konvertuoja mėnesius į minutes:
function monthsToMinutes(months) {
    let minutes = months * 30 * 24 * 60;
    return `${months} mėnesiai turi ${minutes} minutes.`;
}

// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du argumentus:
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

function convertDays(days, format) {
    if (format === 'minutes') {
        let minutes = days * 24 * 60
        return `${days} days - ${minutes} minutes.`
    } else if (format === 'hours') {
        let hours = days * 24
        return `${days} days - ${hours} hours.`
    } else if (format === 'weeks') {
        let weeks = (days / 7).toFixed(2)
        return `${days} days - ${weeks} weeks.`
    } else if (format === 'months') {
        let months = (days / 30).toFixed(2)
        return `${days} days - ${months} months.`
    } else if (format === 'years') {
        let years = (days / 365).toFixed(2)
        return `${days} days - ${years} years.`
    }
}

// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus:
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function checkNumber(unit, divisor) {
    let answer = unit % divisor

    if (answer === 0) {
        return `${unit} dalinasi iš ${divisor}.`
    }

    return `Skaičius ${unit} nesidalina iš ${divisor}. Liekana yra ${answer}.`
}

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function checkText(str) {
    if (typeof str !== 'string') {
        return 'ERROR: Įvesti duomenys nėra tekstas.'
    }

    let strLength = str.length

    if (strLength % 2 === 0) {
        return `Tekstas '${str}' turi porinį simbolių kiekį`
    }

    return `Tekstas '${str}' turi neporinį simbolių kiekį`
}

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio.
//   11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
//   11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

//   11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

//   11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.

function getSymbol(str, num) {
    if (!str || !num) {
        return 'Neteisingai įvesti duomenys'
    }

    if (typeof str !== 'string') {
        return 'ERROR: pirmas parametras privalo būti tekstas (string)'
    }

    if (isNaN(num)) {
        return 'ERROR: antras parametras privalo būti skaičius (number)'
    }

    if (num === 0) {
        return 'Reikia įvesti arba teigiamą, arba neigiamą skaičių'
    }

    let strLength = str.length
    // let convertedNum = num
    // if (num < 0) {
    //   convertedNum = num * -1
    // }

    let convertedNum = num < 0 ? num * -1 : num

    if (strLength < convertedNum) {
        return `Tekstas "${str}" turi ${strLength} simbolius, o jūs nurodėte grąžinti ${convertedNum}.`
    }

    if (num < 0) {
        // let symbolIndexBack = strLength + num
        // let selectedBackSymbol = str[symbolIndexBack]

        let selectedBackSymbol = str.at(num)

        return `Teksto "${str}" ${convertedNum} simbolis nuo galo yra "${selectedBackSymbol}".`
    }

    let symbolIndex = num - 1
    // let selectedSymbol = str[symbolIndex]
    // let selectedSymbol = str.charAt(symbolIndex)
    let selectedSymbol = str.at(symbolIndex)

    return `Teksto "${str}" ${num} simbolis yra "${selectedSymbol}".`
}