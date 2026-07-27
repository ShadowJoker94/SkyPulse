"use strict";

const LOCATIONS = [
  // Athens metropolitan area
  { name: "Athens Centre", greek: "Κέντρο Αθήνας", aliases: ["athens", "athina", "athens center", "syntagma", "monastiraki", "αθηνα", "συνταγμα", "μοναστηρακι"], latitude: 37.9838, longitude: 23.7275, admin: "Central Athens", region: "Attica", coast: false, tempOffset: 1.4 },
  { name: "Piraeus", greek: "Πειραιάς", aliases: ["peiraias", "piraias", "πειραιας"], latitude: 37.9429, longitude: 23.6469, admin: "Piraeus", region: "Attica", coast: true, tempOffset: 0.6 },
  { name: "Glyfada", greek: "Γλυφάδα", aliases: ["glifada", "γλυφαδα"], latitude: 37.8650, longitude: 23.7549, admin: "South Athens", region: "Attica", coast: true, tempOffset: 0.8 },
  { name: "Vouliagmeni", greek: "Βουλιαγμένη", aliases: ["vouliagmeni", "βουλιαγμενη"], latitude: 37.8142, longitude: 23.7787, admin: "South Athens", region: "Attica", coast: true, tempOffset: 0.4 },
  { name: "Voula", greek: "Βούλα", aliases: ["βουλα"], latitude: 37.8429, longitude: 23.7762, admin: "South Athens", region: "Attica", coast: true, tempOffset: 0.6 },
  { name: "Alimos", greek: "Άλιμος", aliases: ["alimos", "αλιμος"], latitude: 37.9104, longitude: 23.7236, admin: "South Athens", region: "Attica", coast: true, tempOffset: 0.8 },
  { name: "Palaio Faliro", greek: "Παλαιό Φάληρο", aliases: ["paleo faliro", "faliro", "παλαιο φαληρο", "φαληρο"], latitude: 37.9280, longitude: 23.7011, admin: "South Athens", region: "Attica", coast: true, tempOffset: 0.8 },
  { name: "Kallithea", greek: "Καλλιθέα", aliases: ["kalithea", "καλλιθεα"], latitude: 37.9559, longitude: 23.7027, admin: "South Athens", region: "Attica", coast: false, tempOffset: 1.2 },
  { name: "Nea Smyrni", greek: "Νέα Σμύρνη", aliases: ["nea smirni", "νεα σμυρνη"], latitude: 37.9450, longitude: 23.7148, admin: "South Athens", region: "Attica", coast: false, tempOffset: 1.1 },
  { name: "Ilioupoli", greek: "Ηλιούπολη", aliases: ["iliupoli", "ηλιουπολη"], latitude: 37.9311, longitude: 23.7597, admin: "Central Athens", region: "Attica", coast: false, tempOffset: 1.0 },
  { name: "Marousi", greek: "Μαρούσι", aliases: ["amarousio", "maroussi", "μαρουσι"], latitude: 38.0540, longitude: 23.8060, admin: "North Athens", region: "Attica", coast: false, tempOffset: 0.2 },
  { name: "Kifisia", greek: "Κηφισιά", aliases: ["kifissia", "κηφισια"], latitude: 38.0748, longitude: 23.8117, admin: "North Athens", region: "Attica", coast: false, tempOffset: -0.4 },
  { name: "Chalandri", greek: "Χαλάνδρι", aliases: ["halandri", "xalandri", "χαλανδρι"], latitude: 38.0237, longitude: 23.8004, admin: "North Athens", region: "Attica", coast: false, tempOffset: 0.4 },
  { name: "Agia Paraskevi", greek: "Αγία Παρασκευή", aliases: ["agia paraskevi", "αγια παρασκευη"], latitude: 38.0053, longitude: 23.8208, admin: "North Athens", region: "Attica", coast: false, tempOffset: 0.1 },
  { name: "Psychiko", greek: "Ψυχικό", aliases: ["psihiko", "ψυχικο"], latitude: 38.0140, longitude: 23.7727, admin: "North Athens", region: "Attica", coast: false, tempOffset: 0.5 },
  { name: "Nea Ionia", greek: "Νέα Ιωνία", aliases: ["nea ionia", "νεα ιωνια"], latitude: 38.0386, longitude: 23.7575, admin: "North Athens", region: "Attica", coast: false, tempOffset: 0.7 },
  { name: "Peristeri", greek: "Περιστέρι", aliases: ["peristeri", "περιστερι"], latitude: 38.0154, longitude: 23.6919, admin: "West Athens", region: "Attica", coast: false, tempOffset: 1.3 },
  { name: "Egaleo", greek: "Αιγάλεω", aliases: ["aigaleo", "egaleo", "αιγαλεω"], latitude: 37.9929, longitude: 23.6780, admin: "West Athens", region: "Attica", coast: false, tempOffset: 1.4 },
  { name: "Petroupoli", greek: "Πετρούπολη", aliases: ["petroupoli", "πετρουπολη"], latitude: 38.0416, longitude: 23.6859, admin: "West Athens", region: "Attica", coast: false, tempOffset: 0.6 },
  { name: "Acharnes", greek: "Αχαρνές", aliases: ["menidi", "acharnai", "αχαρνες", "μενιδι"], latitude: 38.0836, longitude: 23.7346, admin: "East Attica", region: "Attica", coast: false, tempOffset: 0.1 },
  { name: "Rafina", greek: "Ραφήνα", aliases: ["rafina", "ραφηνα"], latitude: 38.0181, longitude: 24.0059, admin: "East Attica", region: "Attica", coast: true, tempOffset: 0.2 },
  { name: "Nea Makri", greek: "Νέα Μάκρη", aliases: ["nea makri", "νεα μακρη"], latitude: 38.0872, longitude: 23.9765, admin: "East Attica", region: "Attica", coast: true, tempOffset: 0.0 },
  { name: "Marathon", greek: "Μαραθώνας", aliases: ["marathonas", "marathon", "μαραθωνας"], latitude: 38.1532, longitude: 23.9628, admin: "East Attica", region: "Attica", coast: false, tempOffset: -0.2 },
  { name: "Artemida", greek: "Αρτέμιδα", aliases: ["loutsa", "artemida", "λουτσα", "αρτεμιδα"], latitude: 37.9677, longitude: 24.0080, admin: "East Attica", region: "Attica", coast: true, tempOffset: 0.3 },
  { name: "Spata", greek: "Σπάτα", aliases: ["spata", "airport", "athens airport", "σπατα", "αεροδρομιο"], latitude: 37.9610, longitude: 23.9151, admin: "East Attica", region: "Attica", coast: false, tempOffset: 0.7 },
  { name: "Lavrio", greek: "Λαύριο", aliases: ["lavrion", "laurio", "λαυριο"], latitude: 37.7145, longitude: 24.0560, admin: "East Attica", region: "Attica", coast: true, tempOffset: 0.2 },
  { name: "Sounio", greek: "Σούνιο", aliases: ["sounion", "cape sounion", "σουνιο"], latitude: 37.6501, longitude: 24.0243, admin: "East Attica", region: "Attica", coast: true, tempOffset: -0.1 },
  { name: "Elefsina", greek: "Ελευσίνα", aliases: ["eleusis", "elefsis", "ελευσινα"], latitude: 38.0414, longitude: 23.5429, admin: "West Attica", region: "Attica", coast: true, tempOffset: 1.0 },
  { name: "Megara", greek: "Μέγαρα", aliases: ["megara", "μεγαρα"], latitude: 37.9947, longitude: 23.3430, admin: "West Attica", region: "Attica", coast: false, tempOffset: 0.7 },

  // Mainland Greece
  { name: "Thessaloniki", greek: "Θεσσαλονίκη", aliases: ["salonika", "salonica", "thessaloniki", "θεσσαλονικη"], latitude: 40.6401, longitude: 22.9444, admin: "Thessaloniki", region: "Central Macedonia", coast: true, tempOffset: -1.7 },
  { name: "Patras", greek: "Πάτρα", aliases: ["patra", "patras", "πατρα"], latitude: 38.2466, longitude: 21.7346, admin: "Achaea", region: "Western Greece", coast: true, tempOffset: -0.3 },
  { name: "Larissa", greek: "Λάρισα", aliases: ["larisa", "larissa", "λαρισα"], latitude: 39.6390, longitude: 22.4191, admin: "Larissa", region: "Thessaly", coast: false, tempOffset: 0.2 },
  { name: "Volos", greek: "Βόλος", aliases: ["volos", "βολος"], latitude: 39.3610, longitude: 22.9426, admin: "Magnesia", region: "Thessaly", coast: true, tempOffset: -0.5 },
  { name: "Ioannina", greek: "Ιωάννινα", aliases: ["giannena", "yanina", "ioannina", "ιωαννινα", "γιαννενα"], latitude: 39.6650, longitude: 20.8537, admin: "Ioannina", region: "Epirus", coast: false, tempOffset: -3.1 },
  { name: "Kavala", greek: "Καβάλα", aliases: ["kavala", "καβαλα"], latitude: 40.9396, longitude: 24.4069, admin: "Kavala", region: "Eastern Macedonia", coast: true, tempOffset: -1.8 },
  { name: "Alexandroupoli", greek: "Αλεξανδρούπολη", aliases: ["alexandroupolis", "alexandroupoli", "αλεξανδρουπολη"], latitude: 40.8457, longitude: 25.8739, admin: "Evros", region: "Thrace", coast: true, tempOffset: -1.6 },
  { name: "Serres", greek: "Σέρρες", aliases: ["serres", "σερρες"], latitude: 41.0909, longitude: 23.5413, admin: "Serres", region: "Central Macedonia", coast: false, tempOffset: -1.5 },
  { name: "Katerini", greek: "Κατερίνη", aliases: ["katerini", "κατερινη"], latitude: 40.2719, longitude: 22.5025, admin: "Pieria", region: "Central Macedonia", coast: false, tempOffset: -1.0 },
  { name: "Kozani", greek: "Κοζάνη", aliases: ["kozani", "κοζανη"], latitude: 40.3007, longitude: 21.7889, admin: "Kozani", region: "Western Macedonia", coast: false, tempOffset: -3.0 },
  { name: "Kastoria", greek: "Καστοριά", aliases: ["kastoria", "καστορια"], latitude: 40.5193, longitude: 21.2687, admin: "Kastoria", region: "Western Macedonia", coast: false, tempOffset: -3.5 },
  { name: "Trikala", greek: "Τρίκαλα", aliases: ["trikala", "τρικαλα"], latitude: 39.5557, longitude: 21.7679, admin: "Trikala", region: "Thessaly", coast: false, tempOffset: -1.0 },
  { name: "Karditsa", greek: "Καρδίτσα", aliases: ["karditsa", "καρδιτσα"], latitude: 39.3640, longitude: 21.9210, admin: "Karditsa", region: "Thessaly", coast: false, tempOffset: -0.8 },
  { name: "Lamia", greek: "Λαμία", aliases: ["lamia", "λαμια"], latitude: 38.9006, longitude: 22.4341, admin: "Phthiotis", region: "Central Greece", coast: false, tempOffset: -0.2 },
  { name: "Chalkida", greek: "Χαλκίδα", aliases: ["halkida", "chalkis", "χαλκιδα"], latitude: 38.4635, longitude: 23.6028, admin: "Euboea", region: "Central Greece", coast: true, tempOffset: 0.1 },
  { name: "Livadeia", greek: "Λιβαδειά", aliases: ["livadia", "levadia", "λιβαδεια"], latitude: 38.4362, longitude: 22.8767, admin: "Boeotia", region: "Central Greece", coast: false, tempOffset: -1.0 },
  { name: "Nafplio", greek: "Ναύπλιο", aliases: ["nafplion", "nafplio", "ναυπλιο"], latitude: 37.5686, longitude: 22.8069, admin: "Argolis", region: "Peloponnese", coast: true, tempOffset: 0.2 },
  { name: "Kalamata", greek: "Καλαμάτα", aliases: ["kalamata", "καλαματα"], latitude: 37.0389, longitude: 22.1142, admin: "Messenia", region: "Peloponnese", coast: true, tempOffset: 0.3 },
  { name: "Tripoli", greek: "Τρίπολη", aliases: ["tripoli greece", "tripolis", "τριπολη"], latitude: 37.5101, longitude: 22.3726, admin: "Arcadia", region: "Peloponnese", coast: false, tempOffset: -2.6 },
  { name: "Sparta", greek: "Σπάρτη", aliases: ["sparti", "sparta", "σπαρτη"], latitude: 37.0755, longitude: 22.4297, admin: "Laconia", region: "Peloponnese", coast: false, tempOffset: -0.6 },
  { name: "Corinth", greek: "Κόρινθος", aliases: ["korinthos", "corinth", "κορινθος"], latitude: 37.9386, longitude: 22.9322, admin: "Corinthia", region: "Peloponnese", coast: true, tempOffset: 0.5 },
  { name: "Pyrgos", greek: "Πύργος", aliases: ["pyrgos ilia", "πυργος"], latitude: 37.6751, longitude: 21.4410, admin: "Elis", region: "Western Greece", coast: false, tempOffset: 0.0 },

  // Islands and coastal destinations
  { name: "Heraklion", greek: "Ηράκλειο", aliases: ["iraklio", "heraklion", "ηρακλειο"], latitude: 35.3387, longitude: 25.1442, admin: "Heraklion", region: "Crete", coast: true, tempOffset: 1.1 },
  { name: "Chania", greek: "Χανιά", aliases: ["hania", "chanea", "χανια"], latitude: 35.5138, longitude: 24.0180, admin: "Chania", region: "Crete", coast: true, tempOffset: 0.8 },
  { name: "Rethymno", greek: "Ρέθυμνο", aliases: ["rethimno", "rethymnon", "ρεθυμνο"], latitude: 35.3656, longitude: 24.4822, admin: "Rethymno", region: "Crete", coast: true, tempOffset: 0.8 },
  { name: "Agios Nikolaos", greek: "Άγιος Νικόλαος", aliases: ["agios nikolaos crete", "aghios nikolaos", "αγιος νικολαος"], latitude: 35.1911, longitude: 25.7152, admin: "Lasithi", region: "Crete", coast: true, tempOffset: 1.2 },
  { name: "Rhodes", greek: "Ρόδος", aliases: ["rodos", "rhodes", "ροδος"], latitude: 36.4341, longitude: 28.2176, admin: "Rhodes", region: "South Aegean", coast: true, tempOffset: 1.1 },
  { name: "Corfu", greek: "Κέρκυρα", aliases: ["kerkyra", "corfu", "κερκυρα"], latitude: 39.6243, longitude: 19.9217, admin: "Corfu", region: "Ionian Islands", coast: true, tempOffset: -0.5 },
  { name: "Santorini", greek: "Σαντορίνη", aliases: ["thira", "fira", "santorini", "θηρα", "σαντορινη"], latitude: 36.3932, longitude: 25.4615, admin: "Thira", region: "South Aegean", coast: true, tempOffset: 0.3 },
  { name: "Mykonos", greek: "Μύκονος", aliases: ["mykonos", "μυκονος"], latitude: 37.4467, longitude: 25.3289, admin: "Mykonos", region: "South Aegean", coast: true, tempOffset: -0.1 },
  { name: "Naxos", greek: "Νάξος", aliases: ["naxos", "ναξος"], latitude: 37.1036, longitude: 25.3764, admin: "Naxos", region: "South Aegean", coast: true, tempOffset: 0.1 },
  { name: "Paros", greek: "Πάρος", aliases: ["paros", "parikia", "παρος", "παροικια"], latitude: 37.0856, longitude: 25.1488, admin: "Paros", region: "South Aegean", coast: true, tempOffset: 0.1 },
  { name: "Syros", greek: "Σύρος", aliases: ["ermoupoli", "syros", "συρος", "ερμουπολη"], latitude: 37.4447, longitude: 24.9429, admin: "Syros", region: "South Aegean", coast: true, tempOffset: 0.0 },
  { name: "Milos", greek: "Μήλος", aliases: ["milos", "μηλος"], latitude: 36.6914, longitude: 24.3936, admin: "Milos", region: "South Aegean", coast: true, tempOffset: 0.2 },
  { name: "Kos", greek: "Κως", aliases: ["kos", "κως"], latitude: 36.8926, longitude: 27.2877, admin: "Kos", region: "South Aegean", coast: true, tempOffset: 0.8 },
  { name: "Lemnos", greek: "Λήμνος", aliases: ["limnos", "myrina", "lemnos", "λημνος", "μυρινα"], latitude: 39.8749, longitude: 25.0630, admin: "Lemnos", region: "North Aegean", coast: true, tempOffset: -0.9 },
  { name: "Lesvos", greek: "Λέσβος", aliases: ["mytilene", "mitilini", "lesbos", "lesvos", "λεσβος", "μυτιληνη"], latitude: 39.1070, longitude: 26.5553, admin: "Lesvos", region: "North Aegean", coast: true, tempOffset: -0.4 },
  { name: "Chios", greek: "Χίος", aliases: ["chios", "hios", "χιος"], latitude: 38.3688, longitude: 26.1358, admin: "Chios", region: "North Aegean", coast: true, tempOffset: 0.1 },
  { name: "Samos", greek: "Σάμος", aliases: ["samos", "vathy", "σαμος", "βαθυ"], latitude: 37.7548, longitude: 26.9770, admin: "Samos", region: "North Aegean", coast: true, tempOffset: 0.5 },
  { name: "Zakynthos", greek: "Ζάκυνθος", aliases: ["zante", "zakynthos", "ζακυνθος"], latitude: 37.7870, longitude: 20.8999, admin: "Zakynthos", region: "Ionian Islands", coast: true, tempOffset: 0.1 },
  { name: "Kefalonia", greek: "Κεφαλονιά", aliases: ["cephalonia", "argostoli", "kefalonia", "κεφαλονια", "αργοστολι"], latitude: 38.1754, longitude: 20.5692, admin: "Kefalonia", region: "Ionian Islands", coast: true, tempOffset: -0.1 },
  { name: "Lefkada", greek: "Λευκάδα", aliases: ["leucas", "lefkas", "lefkada", "λευκαδα"], latitude: 38.8339, longitude: 20.7069, admin: "Lefkada", region: "Ionian Islands", coast: true, tempOffset: -0.3 },
  { name: "Aegina", greek: "Αίγινα", aliases: ["aigina", "egina", "αιγινα"], latitude: 37.7462, longitude: 23.4275, admin: "Islands", region: "Attica", coast: true, tempOffset: 0.4 },
  { name: "Salamina", greek: "Σαλαμίνα", aliases: ["salamis", "salamina", "σαλαμινα"], latitude: 37.9643, longitude: 23.4965, admin: "Islands", region: "Attica", coast: true, tempOffset: 0.6 },
  { name: "Poros", greek: "Πόρος", aliases: ["poros", "πορος"], latitude: 37.4994, longitude: 23.4536, admin: "Islands", region: "Attica", coast: true, tempOffset: 0.4 },
  { name: "Hydra", greek: "Ύδρα", aliases: ["idra", "hydra", "υδρα"], latitude: 37.3499, longitude: 23.4669, admin: "Islands", region: "Attica", coast: true, tempOffset: 0.2 },
  { name: "Skiathos", greek: "Σκιάθος", aliases: ["skiathos", "σκιαθος"], latitude: 39.1622, longitude: 23.4909, admin: "Sporades", region: "Thessaly", coast: true, tempOffset: -0.6 },
];

const ATHENS_SHORTCUTS = [
  "Athens Centre", "Piraeus", "Glyfada", "Vouliagmeni", "Marousi", "Kifisia",
  "Chalandri", "Peristeri", "Nea Smyrni", "Rafina", "Artemida", "Elefsina"
];

const WMO_CODES = {
  0: ["Clear sky", "☀️"],
  1: ["Mostly clear", "🌤️"],
  2: ["Partly cloudy", "⛅"],
  3: ["Overcast", "☁️"],
  45: ["Fog", "🌫️"],
  51: ["Light drizzle", "🌦️"],
  61: ["Light rain", "🌦️"],
  63: ["Rain", "🌧️"],
  80: ["Rain showers", "🌦️"],
  81: ["Rain showers", "🌧️"],
  95: ["Thunderstorm", "⛈️"],
};

const state = {
  unit: localStorage.getItem("skypulse-unit") || "celsius",
  location: getSavedLocation(),
  weather: null,
  searchMatches: [],
  activeResultIndex: -1,
};

const elements = {
  unitToggle: document.querySelector("#unitToggle"),
  unitLabel: document.querySelector("#unitLabel"),
  geoButton: document.querySelector("#geoButton"),
  locationSearch: document.querySelector("#locationSearch"),
  searchResults: document.querySelector("#searchResults"),
  searchSpinner: document.querySelector("#searchSpinner"),
  athensAreas: document.querySelector("#athensAreas"),
  showAllAreas: document.querySelector("#showAllAreas"),
  statusMessage: document.querySelector("#statusMessage"),
  weatherDashboard: document.querySelector("#weatherDashboard"),
  currentDate: document.querySelector("#currentDate"),
  locationName: document.querySelector("#locationName"),
  locationMeta: document.querySelector("#locationMeta"),
  conditionIcon: document.querySelector("#conditionIcon"),
  currentTemperature: document.querySelector("#currentTemperature"),
  conditionText: document.querySelector("#conditionText"),
  todayHigh: document.querySelector("#todayHigh"),
  todayLow: document.querySelector("#todayLow"),
  feelsLike: document.querySelector("#feelsLike"),
  humidity: document.querySelector("#humidity"),
  windSpeed: document.querySelector("#windSpeed"),
  pressure: document.querySelector("#pressure"),
  sunrise: document.querySelector("#sunrise"),
  sunset: document.querySelector("#sunset"),
  updatedTime: document.querySelector("#updatedTime"),
  hourlyForecast: document.querySelector("#hourlyForecast"),
  dailyForecast: document.querySelector("#dailyForecast"),
};

function getSavedLocation() {
  try {
    const savedName = JSON.parse(localStorage.getItem("skypulse-location") || "null")?.name;
    return LOCATIONS.find((place) => place.name === savedName) || LOCATIONS[0];
  } catch {
    return LOCATIONS[0];
  }
}

function normalizeText(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("el-GR")
    .replace(/ς/g, "σ")
    .replace(/[^a-z0-9α-ω\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getSearchText(place) {
  return normalizeText([
    place.name,
    place.greek,
    place.admin,
    place.region,
    ...(place.aliases || []),
  ].join(" "));
}

function scoreLocation(place, query) {
  const clean = normalizeText(query);
  const name = normalizeText(place.name);
  const greek = normalizeText(place.greek);
  const aliases = (place.aliases || []).map(normalizeText);
  const haystack = getSearchText(place);

  if (name === clean || greek === clean || aliases.includes(clean)) return 100;
  if (name.startsWith(clean) || greek.startsWith(clean)) return 80;
  if (aliases.some((alias) => alias.startsWith(clean))) return 70;
  if (haystack.includes(clean)) return 50;

  const tokens = clean.split(" ").filter(Boolean);
  return tokens.length && tokens.every((token) => haystack.includes(token)) ? 35 : 0;
}

function findLocations(query, limit = 8) {
  const clean = normalizeText(query);
  if (!clean) return LOCATIONS.slice(0, limit);

  return LOCATIONS
    .map((place) => ({ place, score: scoreLocation(place, clean) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.place.name.localeCompare(b.place.name))
    .slice(0, limit)
    .map((entry) => entry.place);
}

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value += 0x6D2B79F5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / 86400000);
}

function seasonalBaseTemperature(date, latitude) {
  const day = dayOfYear(date);
  const latitudePenalty = Math.max(0, latitude - 35) * 0.42;
  return 18.5 + 10.8 * Math.sin((2 * Math.PI * (day - 108)) / 365) - latitudePenalty;
}

function createLocalDate(baseDate, dayOffset = 0, hour = 12) {
  return new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + dayOffset, hour, 0, 0, 0);
}

function createIsoLocal(date) {
  const pad = (number) => String(number).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function getSunTimes(date, latitude) {
  const day = dayOfYear(date);
  const seasonal = Math.sin((2 * Math.PI * (day - 80)) / 365);
  const latitudeFactor = Math.min(1.35, Math.max(0.7, latitude / 38));
  const daylightHours = 12 + 3.35 * seasonal * latitudeFactor;
  const solarNoon = 12.45;
  const sunriseHour = solarNoon - daylightHours / 2;
  const sunsetHour = solarNoon + daylightHours / 2;

  const asDate = (decimalHour) => {
    const hours = Math.floor(decimalHour);
    const minutes = Math.round((decimalHour - hours) * 60);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
  };

  return { sunrise: asDate(sunriseHour), sunset: asDate(sunsetHour) };
}

function chooseWeatherCode(random, date, coast) {
  const month = date.getMonth();
  const wetSeason = month <= 2 || month >= 9;
  const roll = random();

  if (wetSeason) {
    if (roll < 0.07) return 95;
    if (roll < 0.20) return 63;
    if (roll < 0.31) return 61;
    if (roll < 0.42) return 3;
    if (roll < 0.65) return 2;
    return roll < 0.82 ? 1 : 0;
  }

  if (roll < (coast ? 0.015 : 0.03)) return 95;
  if (roll < 0.07) return 61;
  if (roll < 0.15) return 2;
  if (roll < 0.35) return 1;
  return 0;
}

function codeRainProbability(code, random) {
  if (code === 95) return Math.round(65 + random() * 30);
  if (code === 63) return Math.round(55 + random() * 35);
  if (code === 61 || code === 80 || code === 81) return Math.round(30 + random() * 40);
  if (code === 3) return Math.round(random() * 25);
  if (code === 2) return Math.round(random() * 15);
  return Math.round(random() * 6);
}

function generateOfflineWeather(location) {
  const now = new Date();
  const dateKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
  const random = seededRandom(hashString(`${location.name}-${dateKey}`));
  const base = seasonalBaseTemperature(now, location.latitude) + (location.tempOffset || 0);
  const daily = {
    time: [], weather_code: [], temperature_2m_max: [], temperature_2m_min: [],
    sunrise: [], sunset: [], precipitation_probability_max: [], wind_speed_10m_max: [],
  };

  for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
    const date = createLocalDate(now, dayIndex, 12);
    const variation = (random() - 0.5) * 4.2 + Math.sin(dayIndex * 1.4) * 0.8;
    const high = base + variation + 5.0;
    const range = (location.coast ? 7.0 : 10.0) + random() * 2.4;
    const low = high - range;
    const code = chooseWeatherCode(random, date, location.coast);
    const rain = codeRainProbability(code, random);
    const wind = (location.coast ? 15 : 10) + random() * (location.coast ? 20 : 14);
    const sun = getSunTimes(date, location.latitude);

    daily.time.push(createIsoLocal(date).slice(0, 10));
    daily.weather_code.push(code);
    daily.temperature_2m_max.push(high);
    daily.temperature_2m_min.push(low);
    daily.sunrise.push(createIsoLocal(sun.sunrise));
    daily.sunset.push(createIsoLocal(sun.sunset));
    daily.precipitation_probability_max.push(rain);
    daily.wind_speed_10m_max.push(wind);
  }

  const hourly = {
    time: [], temperature_2m: [], apparent_temperature: [], precipitation_probability: [],
    weather_code: [], wind_speed_10m: [],
  };

  for (let hourIndex = 0; hourIndex < 48; hourIndex += 1) {
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + hourIndex, 0, 0, 0);
    const dayIndex = Math.floor((date - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 86400000);
    const safeDay = Math.max(0, Math.min(6, dayIndex));
    const high = daily.temperature_2m_max[safeDay];
    const low = daily.temperature_2m_min[safeDay];
    const hour = date.getHours();
    const cycle = (Math.cos(((hour - 15) / 12) * Math.PI) + 1) / 2;
    const temperature = low + (high - low) * cycle + (random() - 0.5) * 0.7;
    const dailyCode = daily.weather_code[safeDay];
    const night = hour < 6 || hour > 21;
    const code = night && dailyCode === 0 ? 1 : dailyCode;
    const rainBase = daily.precipitation_probability_max[safeDay];
    const rain = Math.max(0, Math.min(100, rainBase + (random() - 0.5) * 20));
    const wind = (location.coast ? 12 : 7) + random() * (location.coast ? 20 : 13);
    const apparent = temperature - Math.max(0, wind - 18) * 0.035 + (temperature > 28 ? 0.8 : 0);

    hourly.time.push(createIsoLocal(date));
    hourly.temperature_2m.push(temperature);
    hourly.apparent_temperature.push(apparent);
    hourly.precipitation_probability.push(Math.round(rain));
    hourly.weather_code.push(code);
    hourly.wind_speed_10m.push(wind);
  }

  const currentHourIndex = 0;
  const currentTemp = hourly.temperature_2m[currentHourIndex];
  const currentWind = hourly.wind_speed_10m[currentHourIndex];
  const currentCode = hourly.weather_code[currentHourIndex];
  const humidity = Math.max(28, Math.min(92, 72 - (currentTemp - 18) * 1.6 + random() * 14 + (location.coast ? 7 : 0)));

  return {
    generatedAt: now,
    current: {
      time: createIsoLocal(now),
      temperature_2m: currentTemp,
      apparent_temperature: hourly.apparent_temperature[currentHourIndex],
      relative_humidity_2m: humidity,
      weather_code: currentCode,
      surface_pressure: 1007 + random() * 14,
      wind_speed_10m: currentWind,
    },
    hourly,
    daily,
  };
}

function getWeatherDetails(code) {
  return WMO_CODES[code] || ["Variable conditions", "🌤️"];
}

function toDisplayTemperature(celsius) {
  return state.unit === "fahrenheit" ? (celsius * 9) / 5 + 32 : celsius;
}

function formatTemperature(value, includeUnit = false) {
  if (value === null || value === undefined || Number.isNaN(value)) return "--°";
  const suffix = includeUnit ? (state.unit === "celsius" ? "°C" : "°F") : "°";
  return `${Math.round(toDisplayTemperature(value))}${suffix}`;
}

function formatDate(value, options) {
  return new Intl.DateTimeFormat("en-GB", options).format(new Date(value));
}

function formatTime(value) {
  return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date(value));
}

function setStatus(message = "", type = "") {
  elements.statusMessage.textContent = message;
  elements.statusMessage.className = `status-message ${type}`.trim();
}

function renderAreaButtons() {
  const areas = ATHENS_SHORTCUTS.map((name) => LOCATIONS.find((place) => place.name === name)).filter(Boolean);
  elements.athensAreas.innerHTML = areas.map((area) => {
    const active = area.name === state.location.name ? " active" : "";
    return `<button class="location-chip${active}" data-name="${escapeHtml(area.name)}" type="button">${escapeHtml(area.name)}</button>`;
  }).join("");

  elements.athensAreas.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const area = LOCATIONS.find((item) => item.name === button.dataset.name);
      selectLocation(area);
    });
  });
}

function loadOfflineWeather(location) {
  setStatus("Offline demo forecast generated locally. It is not live meteorological data.", "offline");
  state.weather = generateOfflineWeather(location);
  renderWeather();
  elements.weatherDashboard.hidden = false;
}

function renderWeather() {
  const { current, daily, hourly } = state.weather;
  const [condition, icon] = getWeatherDetails(current.weather_code);

  elements.currentDate.textContent = formatDate(current.time, {
    weekday: "long", day: "numeric", month: "long",
  }).toUpperCase();
  elements.locationName.textContent = state.location.name;
  elements.locationMeta.textContent = [state.location.greek, state.location.admin, state.location.region, "Greece"].filter(Boolean).join(" · ");
  elements.conditionIcon.textContent = icon;
  elements.currentTemperature.textContent = formatTemperature(current.temperature_2m);
  elements.conditionText.textContent = `${condition} · Offline sample`;
  elements.todayHigh.textContent = formatTemperature(daily.temperature_2m_max[0]);
  elements.todayLow.textContent = formatTemperature(daily.temperature_2m_min[0]);
  elements.feelsLike.textContent = formatTemperature(current.apparent_temperature, true);
  elements.humidity.textContent = `${Math.round(current.relative_humidity_2m)}%`;
  elements.windSpeed.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
  elements.pressure.textContent = `${Math.round(current.surface_pressure)} hPa`;
  elements.sunrise.textContent = formatTime(daily.sunrise[0]);
  elements.sunset.textContent = formatTime(daily.sunset[0]);
  elements.updatedTime.textContent = `Generated locally ${formatTime(current.time)}`;

  renderHourly(hourly, current.time);
  renderDaily(daily);
}

function renderHourly(hourly, currentTime) {
  const currentIndex = Math.max(0, hourly.time.findIndex((time) => time >= currentTime));
  const end = Math.min(hourly.time.length, currentIndex + 24);

  elements.hourlyForecast.innerHTML = hourly.time.slice(currentIndex, end).map((time, offset) => {
    const index = currentIndex + offset;
    const [, icon] = getWeatherDetails(hourly.weather_code[index]);
    const rain = hourly.precipitation_probability[index] || 0;
    return `
      <article class="hour-card${offset === 0 ? " now" : ""}">
        <time datetime="${time}">${offset === 0 ? "Now" : formatTime(time)}</time>
        <span class="hour-icon" aria-hidden="true">${icon}</span>
        <strong>${formatTemperature(hourly.temperature_2m[index])}</strong>
        <small>${Math.round(hourly.wind_speed_10m[index])} km/h</small>
        <small class="rain-probability">${rain > 5 ? `💧 ${rain}%` : ""}</small>
      </article>`;
  }).join("");
}

function renderDaily(daily) {
  elements.dailyForecast.innerHTML = daily.time.map((time, index) => {
    const [condition, icon] = getWeatherDetails(daily.weather_code[index]);
    const dayName = index === 0 ? "Today" : formatDate(time, { weekday: "short" });
    return `
      <article class="day-row${index === 0 ? " today" : ""}">
        <strong>${dayName}</strong>
        <span class="day-icon" aria-hidden="true">${icon}</span>
        <span class="day-condition">${condition}</span>
        <span class="day-temps">
          <span>${formatTemperature(daily.temperature_2m_max[index])}</span>
          <span>${formatTemperature(daily.temperature_2m_min[index])}</span>
        </span>
      </article>`;
  }).join("");
}

function searchLocations(query) {
  state.searchMatches = findLocations(query, 8);
  state.activeResultIndex = -1;
  renderSearchResults(state.searchMatches, query);
}

function renderSearchResults(results, query = "") {
  if (!results.length) {
    elements.searchResults.innerHTML = `
      <div class="search-empty">
        <strong>No bundled Greek area found</strong>
        <small>Try Athens, Piraeus, Thessaloniki, Lemnos, or a Greek spelling.</small>
      </div>`;
    openSearchResults();
    return;
  }

  elements.searchResults.innerHTML = results.map((place, index) => {
    const details = [place.greek, place.admin, place.region].filter(Boolean).join(" · ");
    return `
      <button class="search-result" type="button" role="option" data-index="${index}" aria-selected="false">
        <span><strong>${escapeHtml(place.name)}</strong><small>${escapeHtml(details)}</small></span>
        <span aria-hidden="true">→</span>
      </button>`;
  }).join("");

  elements.searchResults.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => chooseSearchResult(Number(button.dataset.index)));
  });

  if (query.trim()) openSearchResults();
}

function chooseSearchResult(index = 0) {
  const place = state.searchMatches[index];
  if (!place) return;
  selectLocation(place);
  elements.locationSearch.value = place.name;
  closeSearchResults();
  elements.locationSearch.blur();
}

function updateActiveResult(nextIndex) {
  const buttons = [...elements.searchResults.querySelectorAll("button.search-result")];
  if (!buttons.length) return;

  state.activeResultIndex = (nextIndex + buttons.length) % buttons.length;
  buttons.forEach((button, index) => {
    const active = index === state.activeResultIndex;
    button.classList.toggle("keyboard-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  buttons[state.activeResultIndex].scrollIntoView({ block: "nearest" });
}

function openSearchResults() {
  elements.searchResults.hidden = false;
  elements.locationSearch.setAttribute("aria-expanded", "true");
}

function closeSearchResults() {
  elements.searchResults.hidden = true;
  elements.locationSearch.setAttribute("aria-expanded", "false");
  state.activeResultIndex = -1;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;",
  })[char]);
}

function selectLocation(location) {
  if (!location) return;
  state.location = location;
  localStorage.setItem("skypulse-location", JSON.stringify({ name: location.name }));
  renderAreaButtons();
  loadOfflineWeather(location);
  document.querySelector("#weatherDashboard").scrollIntoView({ behavior: "smooth", block: "start" });
}

function distanceKm(lat1, lon1, lat2, lon2) {
  const radius = 6371;
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);
  const a = Math.sin(deltaLat / 2) ** 2
    + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(deltaLon / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function useCurrentLocation() {
  if (!navigator.geolocation) {
    setStatus("Location services are unavailable. Search for a bundled area instead.", "error");
    return;
  }

  setStatus("Finding the nearest bundled Greek area…");
  elements.geoButton.disabled = true;

  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const nearest = LOCATIONS.reduce((best, place) => {
        const distance = distanceKm(coords.latitude, coords.longitude, place.latitude, place.longitude);
        return !best || distance < best.distance ? { place, distance } : best;
      }, null);

      elements.geoButton.disabled = false;
      if (!nearest || nearest.distance > 250) {
        setStatus("Your position is outside the bundled Greece dataset. Search manually instead.", "error");
        return;
      }
      selectLocation(nearest.place);
      elements.locationSearch.value = nearest.place.name;
    },
    () => {
      elements.geoButton.disabled = false;
      setStatus("Location access was unavailable. Search for your area instead.", "error");
    },
    { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 }
  );
}

function bindEvents() {
  elements.locationSearch.addEventListener("focus", (event) => {
    searchLocations(event.target.value);
    openSearchResults();
  });

  elements.locationSearch.addEventListener("input", (event) => {
    searchLocations(event.target.value);
  });

  elements.locationSearch.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      updateActiveResult(state.activeResultIndex + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      updateActiveResult(state.activeResultIndex - 1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      chooseSearchResult(state.activeResultIndex >= 0 ? state.activeResultIndex : 0);
    } else if (event.key === "Escape") {
      closeSearchResults();
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-wrap")) closeSearchResults();
  });

  elements.unitToggle.addEventListener("click", () => {
    state.unit = state.unit === "celsius" ? "fahrenheit" : "celsius";
    localStorage.setItem("skypulse-unit", state.unit);
    elements.unitLabel.textContent = state.unit === "celsius" ? "°C" : "°F";
    renderWeather();
  });

  elements.geoButton.addEventListener("click", useCurrentLocation);

  elements.showAllAreas.addEventListener("click", () => {
    const isExpanded = elements.athensAreas.classList.toggle("expanded");
    elements.showAllAreas.textContent = isExpanded ? "Show less" : "Show all";
  });
}

function initialise() {
  elements.searchSpinner.hidden = true;
  elements.unitLabel.textContent = state.unit === "celsius" ? "°C" : "°F";
  elements.locationSearch.value = state.location.name;
  renderAreaButtons();
  bindEvents();
  loadOfflineWeather(state.location);
}

initialise();
