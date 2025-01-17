/*
 * Copyright 2022 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface Timezone {
    offset: string;
    label: string;
    ianaCode: string;
}
export const UTC_TIME: Timezone = { offset: "+00:00", label: "UTC", ianaCode: "Etc/UTC" };

export const TIMEZONE_ITEMS: Timezone[] = [
    UTC_TIME,
    { offset: "-11:00", label: "Niue", ianaCode: "Pacific/Niue" },
    { offset: "-11:00", label: "Pago Pago", ianaCode: "Pacific/Pago_Pago" },
    { offset: "-10:00", label: "Hawaii Time", ianaCode: "Pacific/Honolulu" },
    { offset: "-10:00", label: "Rarotonga", ianaCode: "Pacific/Rarotonga" },
    { offset: "-10:00", label: "Tahiti", ianaCode: "Pacific/Tahiti" },
    { offset: "-09:30", label: "Marquesas", ianaCode: "Pacific/Marquesas" },
    { offset: "-09:00", label: "Alaska", ianaCode: "America/Anchorage" },
    { offset: "-09:00", label: "Gambier", ianaCode: "Pacific/Gambier" },
    { offset: "-08:00", label: "Los Angeles", ianaCode: "America/Los_Angeles" },
    { offset: "-08:00", label: "Tijuana", ianaCode: "America/Tijuana" },
    { offset: "-08:00", label: " Vancouver", ianaCode: "America/Vancouver" },
    { offset: "-08:00", label: "Whitehorse", ianaCode: "America/Whitehorse" },
    { offset: "-08:00", label: "Pitcairn", ianaCode: "Pacific/Pitcairn" },
    { offset: "-07:00", label: "Denver", ianaCode: "America/Denver" },
    { offset: "-07:00", label: "Arizona", ianaCode: "America/Phoenix" },
    { offset: "-07:00", label: "Chihuahua, Mazatlan", ianaCode: "America/Mazatlan" },
    { offset: "-07:00", label: "Dawson Creek", ianaCode: "America/Dawson_Creek" },
    { offset: "-07:00", label: "Edmonton", ianaCode: "America/Edmonton" },
    { offset: "-07:00", label: "Hermosillo", ianaCode: "America/Hermosillo" },
    { offset: "-07:00", label: "Yellowknife", ianaCode: "America/Yellowknife" },
    { offset: "-06:00", label: "Belize", ianaCode: "America/Belize" },
    { offset: "-06:00", label: "Chicago", ianaCode: "America/Chicago" },
    { offset: "-06:00", label: "Mexico City", ianaCode: "America/Mexico_City" },
    { offset: "-06:00", label: "Regina", ianaCode: "America/Regina" },
    { offset: "-06:00", label: "Tegucigalpa", ianaCode: "America/Tegucigalpa" },
    { offset: "-06:00", label: "Winnipeg", ianaCode: "America/Winnipeg" },
    { offset: "-06:00", label: "Costa Rica", ianaCode: "America/Costa_Rica" },
    { offset: "-06:00", label: "El Salvador", ianaCode: "America/El_Salvador" },
    { offset: "-06:00", label: "Galapagos", ianaCode: "Pacific/Galapagos" },
    { offset: "-06:00", label: "Guatemala", ianaCode: "America/Guatemala" },
    { offset: "-06:00", label: "Managua", ianaCode: "America/Managua" },
    { offset: "-05:00", label: "America Cancun", ianaCode: "America/Cancun" },
    { offset: "-05:00", label: "Bogota", ianaCode: "America/Bogota" },
    { offset: "-05:00", label: "Easter Island", ianaCode: "Pacific/Easter" },
    { offset: "-05:00", label: "New York", ianaCode: "America/New_York" },
    { offset: "-05:00", label: "Iqaluit", ianaCode: "America/Iqaluit" },
    { offset: "-05:00", label: "Toronto", ianaCode: "America/Toronto" },
    { offset: "-05:00", label: "Guayaquil", ianaCode: "America/Guayaquil" },
    { offset: "-05:00", label: "Havana", ianaCode: "America/Havana" },
    { offset: "-05:00", label: "Jamaica", ianaCode: "America/Jamaica" },
    { offset: "-05:00", label: "Lima", ianaCode: "America/Lima" },
    { offset: "-05:00", label: "Nassau", ianaCode: "America/Nassau" },
    { offset: "-05:00", label: "Panama", ianaCode: "America/Panama" },
    { offset: "-05:00", label: "Port-au-Prince", ianaCode: "America/Port-au-Prince" },
    { offset: "-05:00", label: "Rio Branco", ianaCode: "America/Rio_Branco" },
    { offset: "-04:00", label: "Halifax", ianaCode: "America/Halifax" },
    { offset: "-04:00", label: "Barbados", ianaCode: "America/Barbados" },
    { offset: "-04:00", label: "Bermuda", ianaCode: "Atlantic/Bermuda" },
    { offset: "-04:00", label: "Boa Vista", ianaCode: "America/Boa_Vista" },
    { offset: "-04:00", label: "Caracas", ianaCode: "America/Caracas" },
    { offset: "-04:00", label: "Curacao", ianaCode: "America/Curacao" },
    { offset: "-04:00", label: "Grand Turk", ianaCode: "America/Grand_Turk" },
    { offset: "-04:00", label: "Guyana", ianaCode: "America/Guyana" },
    { offset: "-04:00", label: "La Paz", ianaCode: "America/La_Paz" },
    { offset: "-04:00", label: "Manaus", ianaCode: "America/Manaus" },
    { offset: "-04:00", label: "Martinique", ianaCode: "America/Martinique" },
    { offset: "-04:00", label: "Port of Spain", ianaCode: "America/Port_of_Spain" },
    { offset: "-04:00", label: "Porto Velho", ianaCode: "America/Porto_Velho" },
    { offset: "-04:00", label: "Puerto Rico", ianaCode: "America/Puerto_Rico" },
    { offset: "-04:00", label: "Santo Domingo", ianaCode: "America/Santo_Domingo" },
    { offset: "-04:00", label: "Thule", ianaCode: "America/Thule" },
    { offset: "-03:30", label: "St. Johns", ianaCode: "America/St_Johns" },
    { offset: "-03:00", label: "Araguaina", ianaCode: "America/Araguaina" },
    { offset: "-03:00", label: "Asuncion", ianaCode: "America/Asuncion" },
    { offset: "-03:00", label: "Belem", ianaCode: "America/Belem" },
    { offset: "-03:00", label: "Buenos Aires", ianaCode: "America/Argentina/Buenos_Aires" },
    { offset: "-03:00", label: "Campo Grande", ianaCode: "America/Campo_Grande" },
    { offset: "-03:00", label: "Cayenne", ianaCode: "America/Cayenne" },
    { offset: "-03:00", label: "Cuiaba", ianaCode: "America/Cuiaba" },
    { offset: "-03:00", label: "Fortaleza", ianaCode: "America/Fortaleza" },
    { offset: "-03:00", label: "Godthab", ianaCode: "America/Godthab" },
    { offset: "-03:00", label: "Maceio", ianaCode: "America/Maceio" },
    { offset: "-03:00", label: "Miquelon", ianaCode: "America/Miquelon" },
    { offset: "-03:00", label: "Montevideo", ianaCode: "America/Montevideo" },
    { offset: "-03:00", label: "Palmer", ianaCode: "Antarctica/Palmer" },
    { offset: "-03:00", label: "Paramaribo", ianaCode: "America/Paramaribo" },
    { offset: "-03:00", label: "Punta Arenas", ianaCode: "America/Punta_Arenas" },
    { offset: "-03:00", label: "Recife", ianaCode: "America/Recife" },
    { offset: "-03:00", label: "Rothera", ianaCode: "Antarctica/Rothera" },
    { offset: "-03:00", label: "Salvador", ianaCode: "America/Bahia" },
    { offset: "-03:00", label: "Santiago", ianaCode: "America/Santiago" },
    { offset: "-03:00", label: "Stanley", ianaCode: "Atlantic/Stanley" },
    { offset: "-02:00", label: "Noronha", ianaCode: "America/Noronha" },
    { offset: "-02:00", label: "Sao Paulo", ianaCode: "America/Sao_Paulo" },
    { offset: "-02:00", label: "South Georgia", ianaCode: "Atlantic/South_Georgia" },
    { offset: "-01:00", label: "Azores", ianaCode: "Atlantic/Azores" },
    { offset: "-01:00", label: "Cape Verde", ianaCode: "Atlantic/Cape_Verde" },
    { offset: "-01:00", label: "Scoresbysund", ianaCode: "America/Scoresbysund" },
    { offset: "+00:00", label: "Abidjan", ianaCode: "Africa/Abidjan" },
    { offset: "+00:00", label: "Accra", ianaCode: "Africa/Accra" },
    { offset: "+00:00", label: "Bissau", ianaCode: "Africa/Bissau" },
    { offset: "+00:00", label: "Canary Islands", ianaCode: "Atlantic/Canary" },
    { offset: "+00:00", label: "Casablanca", ianaCode: "Africa/Casablanca" },
    { offset: "+00:00", label: "Danmarkshavn", ianaCode: "America/Danmarkshavn" },
    { offset: "+00:00", label: "Dublin", ianaCode: "Europe/Dublin" },
    { offset: "+00:00", label: "El Aaiun", ianaCode: "Africa/El_Aaiun" },
    { offset: "+00:00", label: "Faeroe", ianaCode: "Atlantic/Faroe" },
    { offset: "+00:00", label: "GMT (no daylight saving)", ianaCode: "Etc/GMT" },
    { offset: "+00:00", label: "Lisbon", ianaCode: "Europe/Lisbon" },
    { offset: "+00:00", label: "London", ianaCode: "Europe/London" },
    { offset: "+00:00", label: "Monrovia", ianaCode: "Africa/Monrovia" },
    { offset: "+00:00", label: "Reykjavik", ianaCode: "Atlantic/Reykjavik" },
    { offset: "+01:00", label: "Algiers", ianaCode: "Africa/Algiers" },
    { offset: "+01:00", label: "Amsterdam", ianaCode: "Europe/Amsterdam" },
    { offset: "+01:00", label: "Andorra", ianaCode: "Europe/Andorra" },
    { offset: "+01:00", label: "Berlin", ianaCode: "Europe/Berlin" },
    { offset: "+01:00", label: "Brussels", ianaCode: "Europe/Brussels" },
    { offset: "+01:00", label: "Budapest", ianaCode: "Europe/Budapest" },
    { offset: "+01:00", label: "Belgrade", ianaCode: "Europe/Belgrade" },
    { offset: "+01:00", label: "Prague", ianaCode: "Europe/Prague" },
    { offset: "+01:00", label: "Ceuta", ianaCode: "Africa/Ceuta" },
    { offset: "+01:00", label: "Copenhagen", ianaCode: "Europe/Copenhagen" },
    { offset: "+01:00", label: "Gibraltar", ianaCode: "Europe/Gibraltar" },
    { offset: "+01:00", label: "Lagos", ianaCode: "Africa/Lagos" },
    { offset: "+01:00", label: "Luxembourg", ianaCode: "Europe/Luxembourg" },
    { offset: "+01:00", label: "Madrid", ianaCode: "Europe/Madrid" },
    { offset: "+01:00", label: "Malta", ianaCode: "Europe/Malta" },
    { offset: "+01:00", label: "Monaco", ianaCode: "Europe/Monaco" },
    { offset: "+01:00", label: "Ndjamena", ianaCode: "Africa/Ndjamena" },
    { offset: "+01:00", label: "Oslo", ianaCode: "Europe/Oslo" },
    { offset: "+01:00", label: "Paris", ianaCode: "Europe/Paris" },
    { offset: "+01:00", label: "Rome", ianaCode: "Europe/Rome" },
    { offset: "+01:00", label: "Stockholm", ianaCode: "Europe/Stockholm" },
    { offset: "+01:00", label: "Tirane", ianaCode: "Europe/Tirane" },
    { offset: "+01:00", label: "Tunis", ianaCode: "Africa/Tunis" },
    { offset: "+01:00", label: "Vienna", ianaCode: "Europe/Vienna" },
    { offset: "+01:00", label: "Warsaw", ianaCode: "Europe/Warsaw" },
    { offset: "+01:00", label: "Zurich", ianaCode: "Europe/Zurich" },
    { offset: "+02:00", label: "Amman", ianaCode: "Asia/Amman" },
    { offset: "+02:00", label: "Athens", ianaCode: "Europe/Athens" },
    { offset: "+02:00", label: "Beirut", ianaCode: "Asia/Beirut" },
    { offset: "+02:00", label: "Bucharest", ianaCode: "Europe/Bucharest" },
    { offset: "+02:00", label: "Cairo", ianaCode: "Africa/Cairo" },
    { offset: "+02:00", label: "Chisinau", ianaCode: "Europe/Chisinau" },
    { offset: "+02:00", label: "Damascus", ianaCode: "Asia/Damascus" },
    { offset: "+02:00", label: "Gaza", ianaCode: "Asia/Gaza" },
    { offset: "+02:00", label: "Helsinki", ianaCode: "Europe/Helsinki" },
    { offset: "+02:00", label: "Jerusalem", ianaCode: "Asia/Jerusalem" },
    { offset: "+02:00", label: "Johannesburg", ianaCode: "Africa/Johannesburg" },
    { offset: "+02:00", label: "Khartoum", ianaCode: "Africa/Khartoum" },
    { offset: "+02:00", label: "Kiev", ianaCode: "Europe/Kiev" },
    { offset: "+02:00", label: "Maputo", ianaCode: "Africa/Maputo" },
    { offset: "+02:00", label: "Kaliningrad", ianaCode: "Europe/Kaliningrad" },
    { offset: "+02:00", label: "Nicosia", ianaCode: "Asia/Nicosia" },
    { offset: "+02:00", label: "Riga", ianaCode: "Europe/Riga" },
    { offset: "+02:00", label: "Sofia", ianaCode: "Europe/Sofia" },
    { offset: "+02:00", label: "Tallinn", ianaCode: "Europe/Tallinn" },
    { offset: "+02:00", label: "Tripoli", ianaCode: "Africa/Tripoli" },
    { offset: "+02:00", label: "Vilnius", ianaCode: "Europe/Vilnius" },
    { offset: "+02:00", label: "Windhoek", ianaCode: "Africa/Windhoek" },
    { offset: "+03:00", label: "Baghdad", ianaCode: "Asia/Baghdad" },
    { offset: "+03:00", label: "Istanbul", ianaCode: "Europe/Istanbul" },
    { offset: "+03:00", label: "Minsk", ianaCode: "Europe/Minsk" },
    { offset: "+03:00", label: "Moscow", ianaCode: "Europe/Moscow" },
    { offset: "+03:00", label: "Nairobi", ianaCode: "Africa/Nairobi" },
    { offset: "+03:00", label: "Qatar", ianaCode: "Asia/Qatar" },
    { offset: "+03:00", label: "Riyadh", ianaCode: "Asia/Riyadh" },
    { offset: "+03:00", label: "Syowa", ianaCode: "Antarctica/Syowa" },
    { offset: "+03:30", label: "Tehran", ianaCode: "Asia/Tehran" },
    { offset: "+04:00", label: "Baku", ianaCode: "Asia/Baku" },
    { offset: "+04:00", label: "Dubai", ianaCode: "Asia/Dubai" },
    { offset: "+04:00", label: "Mahe", ianaCode: "Indian/Mahe" },
    { offset: "+04:00", label: "Mauritius", ianaCode: "Indian/Mauritius" },
    { offset: "+04:00", label: "Samara", ianaCode: "Europe/Samara" },
    { offset: "+04:00", label: "Reunion", ianaCode: "Indian/Reunion" },
    { offset: "+04:00", label: "Tbilisi", ianaCode: "Asia/Tbilisi" },
    { offset: "+04:00", label: "Yerevan", ianaCode: "Asia/Yerevan" },
    { offset: "+04:30", label: "Kabul", ianaCode: "Asia/Kabul" },
    { offset: "+05:00", label: "Aqtau", ianaCode: "Asia/Aqtau" },
    { offset: "+05:00", label: "Aqtobe", ianaCode: "Asia/Aqtobe" },
    { offset: "+05:00", label: "Ashgabat", ianaCode: "Asia/Ashgabat" },
    { offset: "+05:00", label: "Dushanbe", ianaCode: "Asia/Dushanbe" },
    { offset: "+05:00", label: "Karachi", ianaCode: "Asia/Karachi" },
    { offset: "+05:00", label: "Kerguelen", ianaCode: "Indian/Kerguelen" },
    { offset: "+05:00", label: "Maldives", ianaCode: "Indian/Maldives" },
    { offset: "+05:00", label: "Mawson", ianaCode: "Antarctica/Mawson" },
    { offset: "+05:00", label: "Yekaterinburg", ianaCode: "Asia/Yekaterinburg" },
    { offset: "+05:00", label: "Tashkent", ianaCode: "Asia/Tashkent" },
    { offset: "+05:30", label: "Colombo", ianaCode: "Asia/Colombo" },
    { offset: "+05:30", label: "India - Kolkata", ianaCode: "Asia/Kolkata" },
    { offset: "+05:45", label: "Kathmandu", ianaCode: "Asia/Kathmandu" },
    { offset: "+06:00", label: "Almaty", ianaCode: "Asia/Almaty" },
    { offset: "+06:00", label: "Bishkek", ianaCode: "Asia/Bishkek" },
    { offset: "+06:00", label: "Chagos", ianaCode: "Indian/Chagos" },
    { offset: "+06:00", label: "Dhaka", ianaCode: "Asia/Dhaka" },
    { offset: "+06:00", label: "Omsk", ianaCode: "Asia/Omsk" },
    { offset: "+06:00", label: "Thimphu", ianaCode: "Asia/Thimphu" },
    { offset: "+06:00", label: "Vostok", ianaCode: "Antarctica/Vostok" },
    { offset: "+06:30", label: "Cocos", ianaCode: "Indian/Cocos" },
    { offset: "+06:30", label: "Rangoon", ianaCode: "Asia/Yangon" },
    { offset: "+07:00", label: "Bangkok", ianaCode: "Asia/Bangkok" },
    { offset: "+07:00", label: "Christmas", ianaCode: "Indian/Christmas" },
    { offset: "+07:00", label: "Davis", ianaCode: "Antarctica/Davis" },
    { offset: "+07:00", label: "Hanoi", ianaCode: "Asia/Saigon" },
    { offset: "+07:00", label: "Hovd", ianaCode: "Asia/Hovd" },
    { offset: "+07:00", label: "Jakarta", ianaCode: "Asia/Jakarta" },
    { offset: "+07:00", label: "Moscow+04 - Krasnoyarsk", ianaCode: "Asia/Krasnoyarsk" },
    { offset: "+08:00", label: "Brunei", ianaCode: "Asia/Brunei" },
    { offset: "+08:00", label: "China - Beijing", ianaCode: "Asia/Shanghai" },
    { offset: "+08:00", label: "Choibalsan", ianaCode: "Asia/Choibalsan" },
    { offset: "+08:00", label: "Hong Kong", ianaCode: "Asia/Hong_Kong" },
    { offset: "+08:00", label: "Kuala Lumpur", ianaCode: "Asia/Kuala_Lumpur" },
    { offset: "+08:00", label: "Macau", ianaCode: "Asia/Macau" },
    { offset: "+08:00", label: "Makassar", ianaCode: "Asia/Makassar" },
    { offset: "+08:00", label: "Manila", ianaCode: "Asia/Manila" },
    { offset: "+08:00", label: "Moscow+05 - Irkutsk", ianaCode: "Asia/Irkutsk" },
    { offset: "+08:00", label: "Singapore", ianaCode: "Asia/Singapore" },
    { offset: "+08:00", label: "Taipei", ianaCode: "Asia/Taipei" },
    { offset: "+08:00", label: "Ulaanbaatar", ianaCode: "Asia/Ulaanbaatar" },
    { offset: "+08:00", label: "Perth", ianaCode: "Australia/Perth" },
    { offset: "+08:30", label: "Pyongyang", ianaCode: "Asia/Pyongyang" },
    { offset: "+09:00", label: "Dili", ianaCode: "Asia/Dili" },
    { offset: "+09:00", label: "Jayapura", ianaCode: "Asia/Jayapura" },
    { offset: "+09:00", label: "Moscow+06 - Yakutsk", ianaCode: "Asia/Yakutsk" },
    { offset: "+09:00", label: "Palau", ianaCode: "Pacific/Palau" },
    { offset: "+09:00", label: "Seoul", ianaCode: "Asia/Seoul" },
    { offset: "+09:00", label: "Tokyo", ianaCode: "Asia/Tokyo" },
    { offset: "+09:30", label: "Darwin", ianaCode: "Australia/Darwin" },
    { offset: "+10:00", label: "Dumont D'Urville", ianaCode: "Antarctica/DumontDUrville" },
    { offset: "+10:00", label: "Brisbane", ianaCode: "Australia/Brisbane" },
    { offset: "+10:00", label: "Guam", ianaCode: "Pacific/Guam" },
    { offset: "+10:00", label: "Moscow+07 - Vladivostok", ianaCode: "Asia/Vladivostok" },
    { offset: "+10:00", label: "Port Moresby", ianaCode: "Pacific/Port_Moresby" },
    { offset: "+10:00", label: "Truk", ianaCode: "Pacific/Chuuk" },
    { offset: "+10:30", label: "Adelaide", ianaCode: "Australia/Adelaide" },
    { offset: "+11:00", label: "Casey", ianaCode: "Antarctica/Casey" },
    { offset: "+11:00", label: "Hobart", ianaCode: "Australia/Hobart" },
    { offset: "+11:00", label: "Melbourne, Sydney", ianaCode: "Australia/Sydney" },
    { offset: "+11:00", label: "Efate", ianaCode: "Pacific/Efate" },
    { offset: "+11:00", label: "Guadalcanal", ianaCode: "Pacific/Guadalcanal" },
    { offset: "+11:00", label: "Kosrae", ianaCode: "Pacific/Kosrae" },
    { offset: "+11:00", label: "Moscow+08 - Magadan", ianaCode: "Asia/Magadan" },
    { offset: "+11:00", label: "Norfolk", ianaCode: "Pacific/Norfolk" },
    { offset: "+11:00", label: "Noumea", ianaCode: "Pacific/Noumea" },
    { offset: "+11:00", label: "Ponape", ianaCode: "Pacific/Pohnpei" },
    { offset: "+12:00", label: "Funafuti", ianaCode: "Pacific/Funafuti" },
    { offset: "+12:00", label: "Kwajalein", ianaCode: "Pacific/Kwajalein" },
    { offset: "+12:00", label: "Majuro", ianaCode: "Pacific/Majuro" },
    { offset: "+12:00", label: "Moscow+09 - Petropavlovsk-Kamchatskiy", ianaCode: "Asia/Kamchatka" },
    { offset: "+12:00", label: "Nauru", ianaCode: "Pacific/Nauru" },
    { offset: "+12:00", label: "Tarawa", ianaCode: "Pacific/Tarawa" },
    { offset: "+12:00", label: "Wake", ianaCode: "Pacific/Wake" },
    { offset: "+12:00", label: "Wallis", ianaCode: "Pacific/Wallis" },
    { offset: "+13:00", label: "Auckland", ianaCode: "Pacific/Auckland" },
    { offset: "+13:00", label: "Enderbury", ianaCode: "Pacific/Enderbury" },
    { offset: "+13:00", label: "Fakaofo", ianaCode: "Pacific/Fakaofo" },
    { offset: "+13:00", label: "Fiji", ianaCode: "Pacific/Fiji" },
    { offset: "+13:00", label: "Tongatapu", ianaCode: "Pacific/Tongatapu" },
    { offset: "+14:00", label: "Apia", ianaCode: "Pacific/Apia" },
    { offset: "+14:00", label: "Kiritimati", ianaCode: "Pacific/Kiritimati" },
];

export const MINIMAL_TIMEZONE_ITEMS = [
    UTC_TIME,
    { offset: "-11:00", label: "Pago Pago", ianaCode: "Pacific/Pago_Pago" },
    { offset: "-10:00", label: "Hawaii Time", ianaCode: "Pacific/Honolulu" },
    { offset: "-09:30", label: "Marquesas", ianaCode: "Pacific/Marquesas" },
    { offset: "-09:00", label: "Alaska", ianaCode: "America/Anchorage" },
    { offset: "-08:00", label: "Los Angeles", ianaCode: "America/Los_Angeles" },
    { offset: "-07:00", label: "Denver", ianaCode: "America/Denver" },
    { offset: "-06:00", label: "Mexico City", ianaCode: "America/Mexico_City" },
    { offset: "-05:00", label: "New York", ianaCode: "America/New_York" },
    { offset: "-04:00", label: "Puerto Rico", ianaCode: "America/Puerto_Rico" },
    { offset: "-03:30", label: "St. Johns", ianaCode: "America/St_Johns" },
    { offset: "-03:00", label: "Buenos Aires", ianaCode: "America/Argentina/Buenos_Aires" },
    { offset: "-02:00", label: "Sao Paulo", ianaCode: "America/Sao_Paulo" },
    { offset: "-01:00", label: "Cape Verde", ianaCode: "Atlantic/Cape_Verde" },
    { offset: "+01:00", label: "Paris", ianaCode: "Europe/Paris" },
    { offset: "+02:00", label: "Cairo", ianaCode: "Africa/Cairo" },
    { offset: "+03:00", label: "Moscow", ianaCode: "Europe/Moscow" },
    { offset: "+03:30", label: "Tehran", ianaCode: "Asia/Tehran" },
    { offset: "+04:00", label: "Dubai", ianaCode: "Asia/Dubai" },
    { offset: "+05:00", label: "Karachi", ianaCode: "Asia/Karachi" },
    { offset: "+05:30", label: "India - Kolkata", ianaCode: "Asia/Kolkata" },
    { offset: "+05:45", label: "Kathmandu", ianaCode: "Asia/Kathmandu" },
    { offset: "+06:00", label: "Dhaka", ianaCode: "Asia/Dhaka" },
    { offset: "+06:30", label: "Rangoon", ianaCode: "Asia/Yangon" },
    { offset: "+07:00", label: "Jakarta", ianaCode: "Asia/Jakarta" },
    { offset: "+08:00", label: "Manila", ianaCode: "Asia/Manila" },
    { offset: "+09:00", label: "Tokyo", ianaCode: "Asia/Tokyo" },
    { offset: "+10:00", label: "Brisbane", ianaCode: "Australia/Brisbane" },
    { offset: "+10:30", label: "Adelaide", ianaCode: "Australia/Adelaide" },
    { offset: "+11:00", label: "Melbourne, Sydney", ianaCode: "Australia/Sydney" },
    { offset: "+12:00", label: "Nauru", ianaCode: "Pacific/Nauru" },
    { offset: "+13:00", label: "Auckland", ianaCode: "Pacific/Auckland" },
    { offset: "+14:00", label: "Kiritimati", ianaCode: "Pacific/Kiritimati" },
];
