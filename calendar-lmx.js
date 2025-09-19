const teamMapping = {
  'América': { id: 6576, stadium: 'CD. DE LOS DEPORTES', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/6576.png' },
  'Atlas': { id: 6577, stadium: 'JALISCO', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/6577.png' },
  'Atlético San Luis': { id: 6358, stadium: 'ALFONSO LASTRAS', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/6358.png' },
  'Chivas': { id: 7807, stadium: 'AKRON', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/7807.png' },
  'Cruz Azul': { id: 6578, stadium: 'O. BENITO JUÁREZ', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/6578.png' },
  'FC Juárez': { id: 649424, stadium: 'O. BENITO JUÁREZ', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/649424.png' },
  'León': { id: 1841, stadium: 'NOU CAMP', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/1841.png' },
  'Mazatlán': { id: 1170234, stadium: 'EL ENCANTO', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/1170234.png' },
  'Monterrey': { id: 8640, stadium: 'BBVA', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/7849.png' },
  'Necaxa': { id: 1842, stadium: 'VICTORIA', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/1842.png' },
  'Pachuca': { id: 7848, stadium: 'HIDALGO', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/7848.png' },
  'Puebla': { id: 7847, stadium: 'CUAUHTÉMOC', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/7847.png' },
  'Pumas': { id: 1946, stadium: 'OLÍMPICO UNIVERSITARIO', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/1946.png' },
  'Querétaro': { id: 1943, stadium: 'LA CORREGIDORA', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/1943.png' },
  'Santos Laguna': { id: 7857, stadium: 'TSM CORONA', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/7857.png' },
  'Tigres': { id: 8561, stadium: 'VOLCÁN', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8561.png' },
  'Tijuana': { id: 162418, stadium: 'CALIENTE', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/162418.png' },
  'Toluca': { id: 6618, stadium: 'NEMESIO DIEZ', logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/6618.png' }
};

const ligaMXSchedule = {
  Jornada1: [
    { date: "17/09/2025", day: "VIERNES", time: "19:00", stadium: "CUAUHTÉMOC", home: "Puebla", away: "Atlas", homeTeam: teamMapping['Puebla'], awayTeam: teamMapping['Atlas'], homeId: 7847, awayId: 6577 },
    { date: "17/09/2025", day: "VIERNES", time: "21:00 HC / 20:00 HL", stadium: "CALIENTE", home: "Tijuana", away: "Santos Laguna", homeTeam: teamMapping['Tijuana'], awayTeam: teamMapping['Santos Laguna'], homeId: 162418, awayId: 7857 },
    { date: "17/09/2025", day: "VIERNES", time: "21:00", stadium: "O. BENITO JUÁREZ", home: "FC Juárez", away: "América", homeTeam: teamMapping['FC Juárez'], awayTeam: teamMapping['América'], homeId: 649424, awayId: 6576 },
    { date: "17/09/2025", day: "SÁBADO", time: "19:00", stadium: "TSM CORONA", home: "Santos Laguna", away: "Pachuca", homeTeam: teamMapping['Santos Laguna'], awayTeam: teamMapping['Pachuca'], homeId: 7857, awayId: 7848 },
    { date: "17/09/2025", day: "SÁBADO", time: "19:00", stadium: "NEMESIO DIEZ", home: "Toluca", away: "Necaxa", homeTeam: teamMapping['Toluca'], awayTeam: teamMapping['Necaxa'], homeId: 6618, awayId: 1842 },
    { date: "17/09/2025", day: "SÁBADO", time: "21:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Pumas", away: "Querétaro", homeTeam: teamMapping['Pumas'], awayTeam: teamMapping['Querétaro'], homeId: 1946, awayId: 1943 },
    { date: "17/09/2025", day: "DOMINGO", time: "17:00", stadium: "HIDALGO", home: "Pachuca", away: "León", homeTeam: teamMapping['Pachuca'], awayTeam: teamMapping['León'], homeId: 7848, awayId: 1841 },
    { date: "17/09/2025", day: "DOMINGO", time: "19:00", stadium: "NOU CAMP", home: "León", away: "Mazatlán", homeTeam: teamMapping['León'], awayTeam: teamMapping['Mazatlán'], homeId: 1841, awayId: 1170234 },
    { date: "17/09/2025", day: "MIÉRCOLES 17/09", time: "19:05", stadium: "AKRON", home: "Chivas", away: "Tigres", homeTeam: teamMapping['Chivas'], awayTeam: teamMapping['Tigres'], homeId: 7807, awayId: 8561 }
  ],
  Jornada2: [
    { date: "16/07/2025", day: "MIÉRCOLES", time: "19:00", stadium: "CD. DE LOS DEPORTES", home: "América", away: "Toluca", homeTeam: teamMapping['América'], awayTeam: teamMapping['Toluca'], homeId: 6576, awayId: 6618 },
    { date: "18/07/2025", day: "MIÉRCOLES", time: "21:00", stadium: "TSM CORONA", home: "Santos Laguna", away: "Cruz Azul", homeTeam: teamMapping['Santos Laguna'], awayTeam: teamMapping['Cruz Azul'], homeId: 7857, awayId: 6578 },
    { date: "19/07/2025", day: "VIERNES", time: "19:00", stadium: "VICTORIA", home: "Necaxa", away: "Atlético San Luis", homeTeam: teamMapping['Necaxa'], awayTeam: teamMapping['Atlético San Luis'], homeId: 1842, awayId: 6358 },
    { date: "19/07/2025", day: "VIERNES", time: "21:00", stadium: "ALFONSO LASTRAS", home: "Atlético San Luis", away: "Puebla", homeTeam: teamMapping['Atlético San Luis'], awayTeam: teamMapping['Puebla'], homeId: 6358, awayId: 7847 },
    { date: "20/07/2025", day: "VIERNES", time: "21:00 HC / 20:00 HL", stadium: "EL ENCANTO", home: "Mazatlán", away: "Monterrey", homeTeam: teamMapping['Mazatlán'], awayTeam: teamMapping['Monterrey'], homeId: 1170234, awayId: 8640 },
    { date: "20/07/2025", day: "SÁBADO", time: "19:00", stadium: "NOU CAMP", home: "León", away: "FC Juárez", homeTeam: teamMapping['León'], awayTeam: teamMapping['FC Juárez'], homeId: 1841, awayId: 649424 },
    { date: "20/07/2025", day: "SÁBADO", time: "19:00", stadium: "UNIVERSITARIO", home: "Pumas", away: "Querétaro", homeTeam: teamMapping['Pumas'], awayTeam: teamMapping['Querétaro'], homeId: 1946, awayId: 1943 },
    { date: "20/07/2025", day: "SÁBADO", time: "21:00", stadium: "JALISCO", home: "Atlas", away: "Tigres", homeTeam: teamMapping['Atlas'], awayTeam: teamMapping['Tigres'], homeId: 6577, awayId: 8561 },
    { date: "20/07/2025", day: "DOMINGO", time: "12:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Cruz Azul", away: "Pachuca", homeTeam: teamMapping['Cruz Azul'], awayTeam: teamMapping['Pachuca'], homeId: 6578, awayId: 7848 }
  ],
  Jornada3: [
    { date: "25/07/2025", day: "VIERNES", time: "19:00", stadium: "LA CORREGIDORA", home: "Querétaro", away: "Chivas", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['Chivas'], homeId: 1943, awayId: 7807 },
    { date: "25/07/2025", day: "VIERNES", time: "19:00", stadium: "CUAUHTÉMOC", home: "Puebla", away: "América", homeTeam: teamMapping['Puebla'], awayTeam: teamMapping['América'], homeId: 7847, awayId: 6576 },
    { date: "25/07/2025", day: "VIERNES", time: "21:00 HC / 20:00 HL", stadium: "CALIENTE", home: "Tijuana", away: "Toluca", homeTeam: teamMapping['Tijuana'], awayTeam: teamMapping['Toluca'], homeId: 162418, awayId: 6618 },
    { date: "26/07/2025", day: "SÁBADO", time: "17:00", stadium: "HIDALGO", home: "Pachuca", away: "Atlético San Luis", homeTeam: teamMapping['Pachuca'], awayTeam: teamMapping['Atlético San Luis'], homeId: 7848, awayId: 6358 },
    { date: "26/07/2025", day: "SÁBADO", time: "17:05", stadium: "AKRON", home: "Chivas", away: "Mazatlán", homeTeam: teamMapping['Chivas'], awayTeam: teamMapping['Mazatlán'], homeId: 7807, awayId: 1170234 },
    { date: "26/07/2025", day: "SÁBADO", time: "19:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Pumas", away: "León", homeTeam: teamMapping['Pumas'], awayTeam: teamMapping['León'], homeId: 1946, awayId: 1841 },
    { date: "26/07/2025", day: "SÁBADO", time: "19:00", stadium: "NEMESIO DIEZ", home: "Toluca", away: "Monterrey", homeTeam: teamMapping['Toluca'], awayTeam: teamMapping['Monterrey'], homeId: 6618, awayId: 8640 },
    { date: "26/07/2025", day: "SÁBADO", time: "21:00", stadium: "VICTORIA", home: "Necaxa", away: "Santos Laguna", homeTeam: teamMapping['Necaxa'], awayTeam: teamMapping['Santos Laguna'], homeId: 1842, awayId: 7857 },
    { date: "27/07/2025", day: "DOMINGO", time: "19:00", stadium: "BBVA", home: "Monterrey", away: "Cruz Azul", homeTeam: teamMapping['Monterrey'], awayTeam: teamMapping['Cruz Azul'], homeId: 8640, awayId: 6578 }
  ],
  Jornada4: [
    { date: "01/08/2025", day: "VIERNES", time: "21:00", stadium: "UNIVERSITARIO", home: "Pumas", away: "FC Juárez", homeTeam: teamMapping['Pumas'], awayTeam: teamMapping['FC Juárez'], homeId: 1946, awayId: 649424 },
    { date: "02/08/2025", day: "SÁBADO", time: "19:00", stadium: "CD. DE LOS DEPORTES", home: "América", away: "Tigres", homeTeam: teamMapping['América'], awayTeam: teamMapping['Tigres'], homeId: 6576, awayId: 8561 },
    { date: "02/08/2025", day: "SÁBADO", time: "21:00 HC / 20:00 HL", stadium: "EL ENCANTO", home: "Mazatlán", away: "Puebla", homeTeam: teamMapping['Mazatlán'], awayTeam: teamMapping['Puebla'], homeId: 1170234, awayId: 7847 },
    { date: "03/08/2025", day: "SÁBADO", time: "21:00", stadium: "JALISCO", home: "Atlas", away: "Querétaro", homeTeam: teamMapping['Atlas'], awayTeam: teamMapping['Querétaro'], homeId: 6577, awayId: 1943 },
    { date: "03/08/2025", day: "DOMINGO", time: "18:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Cruz Azul", away: "Necaxa", homeTeam: teamMapping['Cruz Azul'], awayTeam: teamMapping['Necaxa'], homeId: 6578, awayId: 1842 },
    { date: "03/08/2025", day: "DOMINGO", time: "20:00", stadium: "TSM CORONA", home: "Santos Laguna", away: "Atlético San Luis", homeTeam: teamMapping['Santos Laguna'], awayTeam: teamMapping['Atlético San Luis'], homeId: 7857, awayId: 6358 },
    { date: "04/08/2025", day: "LUNES", time: "19:00", stadium: "NOU CAMP", home: "León", away: "Tijuana", homeTeam: teamMapping['León'], awayTeam: teamMapping['Tijuana'], homeId: 1841, awayId: 162418 },
    { date: "04/08/2025", day: "LUNES", time: "21:00", stadium: "ALFONSO LASTRAS", home: "Atlético San Luis", away: "Monterrey", homeTeam: teamMapping['Atlético San Luis'], awayTeam: teamMapping['Monterrey'], homeId: 6358, awayId: 8640 },
    { date: "04/08/2025", day: "LUNES", time: "21:00", stadium: "O. BENITO JUÁREZ", home: "FC Juárez", away: "Toluca", homeTeam: teamMapping['FC Juárez'], awayTeam: teamMapping['Toluca'], homeId: 649424, awayId: 6618 }
  ],
  Jornada5: [
    { date: "15/08/2025", day: "VIERNES", time: "19:00", stadium: "CUAUHTÉMOC", home: "Puebla", away: "Chivas", homeTeam: teamMapping['Puebla'], awayTeam: teamMapping['Chivas'], homeId: 7847, awayId: 7807 },
    { date: "15/08/2025", day: "VIERNES", time: "21:00", stadium: "VICTORIA", home: "Necaxa", away: "Pumas", homeTeam: teamMapping['Necaxa'], awayTeam: teamMapping['Pumas'], homeId: 1842, awayId: 1946 },
    { date: "16/08/2025", day: "SÁBADO", time: "17:00", stadium: "NEMESIO DIEZ", home: "Toluca", away: "Atlas", homeTeam: teamMapping['Toluca'], awayTeam: teamMapping['Atlas'], homeId: 6618, awayId: 6577 },
    { date: "16/08/2025", day: "SÁBADO", time: "17:05", stadium: "AKRON", home: "Chivas", away: "León", homeTeam: teamMapping['Chivas'], awayTeam: teamMapping['León'], homeId: 7807, awayId: 1841 },
    { date: "16/08/2025", day: "SÁBADO", time: "19:00", stadium: "HIDALGO", home: "Pachuca", away: "Mazatlán", homeTeam: teamMapping['Pachuca'], awayTeam: teamMapping['Mazatlán'], homeId: 7848, awayId: 1170234 },
    { date: "16/08/2025", day: "SÁBADO", time: "19:00", stadium: "UNIVERSITARIO", home: "Querétaro", away: "Santos Laguna", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['Santos Laguna'], homeId: 1943, awayId: 7857 },
    { date: "16/08/2025", day: "SÁBADO", time: "21:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Pumas", away: "Tigres", homeTeam: teamMapping['Pumas'], awayTeam: teamMapping['Tigres'], homeId: 1946, awayId: 8561 },
    { date: "17/08/2025", day: "DOMINGO", time: "16:00", stadium: "LA CORREGIDORA", home: "Querétaro", away: "América", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['América'], homeId: 1943, awayId: 6576 },
    { date: "17/08/2025", day: "DOMINGO", time: "18:00", stadium: "BBVA", home: "Monterrey", away: "Cruz Azul", homeTeam: teamMapping['Monterrey'], awayTeam: teamMapping['Cruz Azul'], homeId: 8640, awayId: 6578 }
  ],
  Jornada6: [
    { date: "22/08/2025", day: "VIERNES", time: "19:00", stadium: "O. BENITO JUÁREZ", home: "FC Juárez", away: "Atlético San Luis", homeTeam: teamMapping['FC Juárez'], awayTeam: teamMapping['Atlético San Luis'], homeId: 649424, awayId: 6358 },
    { date: "22/08/2025", day: "VIERNES", time: "19:00", stadium: "LA CORREGIDORA", home: "Querétaro", away: "Pachuca", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['Pachuca'], homeId: 1943, awayId: 7848 },
    { date: "22/08/2025", day: "VIERNES", time: "21:00 HC / 20:00 HL", stadium: "EL ENCANTO", home: "Mazatlán", away: "Puebla", homeTeam: teamMapping['Mazatlán'], awayTeam: teamMapping['Puebla'], homeId: 1170234, awayId: 7847 },
    { date: "22/08/2025", day: "VIERNES", time: "21:00 HC / 20:00 HL", stadium: "CALIENTE", home: "Tijuana", away: "Tigres", homeTeam: teamMapping['Tijuana'], awayTeam: teamMapping['Tigres'], homeId: 162418, awayId: 8561 },
    { date: "23/08/2025", day: "SÁBADO", time: "17:00", stadium: "NOU CAMP", home: "León", away: "América", homeTeam: teamMapping['León'], awayTeam: teamMapping['América'], homeId: 1841, awayId: 6576 },
    { date: "23/08/2025", day: "SÁBADO", time: "19:00", stadium: "BBVA", home: "Monterrey", away: "Necaxa", homeTeam: teamMapping['Monterrey'], awayTeam: teamMapping['Necaxa'], homeId: 8640, awayId: 1842 },
    { date: "24/08/2025", day: "SÁBADO", time: "21:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Pumas", away: "Atlas", homeTeam: teamMapping['Pumas'], awayTeam: teamMapping['Atlas'], homeId: 1946, awayId: 6577 },
    { date: "24/08/2025", day: "DOMINGO", time: "17:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Cruz Azul", away: "Santos Laguna", homeTeam: teamMapping['Cruz Azul'], awayTeam: teamMapping['Santos Laguna'], homeId: 6578, awayId: 7857 },
    { date: "24/08/2025", day: "DOMINGO", time: "19:00", stadium: "JALISCO", home: "Atlas", away: "Toluca", homeTeam: teamMapping['Atlas'], awayTeam: teamMapping['Toluca'], homeId: 6577, awayId: 6618 }
  ],
  Jornada7: [
    { date: "29/08/2025", day: "VIERNES", time: "19:00", stadium: "O. BENITO JUÁREZ", home: "FC Juárez", away: "Querétaro", homeTeam: teamMapping['FC Juárez'], awayTeam: teamMapping['Querétaro'], homeId: 649424, awayId: 1943 },
    { date: "29/08/2025", day: "VIERNES", time: "19:00", stadium: "ALFONSO LASTRAS", home: "Atlético San Luis", away: "Pumas", homeTeam: teamMapping['Atlético San Luis'], awayTeam: teamMapping['Pumas'], homeId: 6358, awayId: 1946 },
    { date: "29/08/2025", day: "VIERNES", time: "21:00", stadium: "CUAUHTÉMOC", home: "Puebla", away: "Mazatlán", homeTeam: teamMapping['Puebla'], awayTeam: teamMapping['Mazatlán'], homeId: 7847, awayId: 1170234 },
    { date: "30/08/2025", day: "SÁBADO", time: "17:00", stadium: "NOU CAMP", home: "León", away: "Monterrey", homeTeam: teamMapping['León'], awayTeam: teamMapping['Monterrey'], homeId: 1841, awayId: 8640 },
    { date: "30/08/2025", day: "SÁBADO", time: "19:00", stadium: "TSM CORONA", home: "Santos Laguna", away: "Tijuana", homeTeam: teamMapping['Santos Laguna'], awayTeam: teamMapping['Tijuana'], homeId: 7857, awayId: 162418 },
    { date: "30/08/2025", day: "SÁBADO", time: "19:05", stadium: "AKRON", home: "Chivas", away: "Cruz Azul", homeTeam: teamMapping['Chivas'], awayTeam: teamMapping['Cruz Azul'], homeId: 7807, awayId: 6578 },
    { date: "30/08/2025", day: "SÁBADO", time: "21:00", stadium: "CD. DE LOS DEPORTES", home: "América", away: "Tigres", homeTeam: teamMapping['América'], awayTeam: teamMapping['Tigres'], homeId: 6576, awayId: 8561 },
    { date: "31/08/2025", day: "SÁBADO", time: "17:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Pumas", away: "Pachuca", homeTeam: teamMapping['Pumas'], awayTeam: teamMapping['Pachuca'], homeId: 1946, awayId: 7848 },
    { date: "31/08/2025", day: "DOMINGO", time: "21:00 HC / 20:00 HL", stadium: "CALIENTE", home: "Tijuana", away: "Toluca", homeTeam: teamMapping['Tijuana'], awayTeam: teamMapping['Toluca'], homeId: 162418, awayId: 6618 }
  ],
  Jornada8: [
    { date: "12/09/2025", day: "VIERNES", time: "19:00", stadium: "VICTORIA", home: "Necaxa", away: "Querétaro", homeTeam: teamMapping['Necaxa'], awayTeam: teamMapping['Querétaro'], homeId: 1842, awayId: 1943 },
    { date: "12/09/2025", day: "VIERNES", time: "19:00", stadium: "CD. DE LOS DEPORTES", home: "América", away: "Chivas", homeTeam: teamMapping['América'], awayTeam: teamMapping['Chivas'], homeId: 6576, awayId: 7807 },
    { date: "13/09/2025", day: "SÁBADO", time: "21:00 HC / 20:00 HL", stadium: "EL ENCANTO", home: "Mazatlán", away: "León", homeTeam: teamMapping['Mazatlán'], awayTeam: teamMapping['León'], homeId: 1170234, awayId: 1841 },
    { date: "13/09/2025", day: "SÁBADO", time: "17:00", stadium: "HIDALGO", home: "Pachuca", away: "FC Juárez", homeTeam: teamMapping['Pachuca'], awayTeam: teamMapping['FC Juárez'], homeId: 7848, awayId: 649424 },
    { date: "14/09/2025", day: "DOMINGO", time: "19:00", stadium: "UNIVERSITARIO", home: "Querétaro", away: "Tigres", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['Tigres'], homeId: 1943, awayId: 8561 },
    { date: "14/09/2025", day: "DOMINGO", time: "19:00", stadium: "JALISCO", home: "Atlas", away: "Santos Laguna", homeTeam: teamMapping['Atlas'], awayTeam: teamMapping['Santos Laguna'], homeId: 6577, awayId: 7857 },
    { date: "14/09/2025", day: "DOMINGO", time: "21:00", stadium: "NEMESIO DIEZ", home: "Toluca", away: "Puebla", homeTeam: teamMapping['Toluca'], awayTeam: teamMapping['Puebla'], homeId: 6618, awayId: 7847 },
    { date: "14/09/2025", day: "DOMINGO", time: "17:00", stadium: "LA CORREGIDORA", home: "Cruz Azul", away: "Atlético San Luis", homeTeam: teamMapping['Cruz Azul'], awayTeam: teamMapping['Atlético San Luis'], homeId: 6578, awayId: 6358 },
    { date: "14/09/2025", day: "DOMINGO", time: "19:00", stadium: "ALFONSO LASTRAS", home: "Atlético San Luis", away: "Monterrey", homeTeam: teamMapping['Atlético San Luis'], awayTeam: teamMapping['Monterrey'], homeId: 6358, awayId: 8640 }
  ],
  Jornada9: [
    { date: "19/09/2025", day: "VIERNES", time: "19:00", stadium: "VICTORIA", home: "Necaxa", away: "Tijuana", homeTeam: teamMapping['Necaxa'], awayTeam: teamMapping['Tijuana'], homeId: 1842, awayId: 162418 },
    { date: "19/09/2025", day: "VIERNES", time: "19:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Pumas", away: "América", homeTeam: teamMapping['Pumas'], awayTeam: teamMapping['América'], homeId: 1946, awayId: 6576 },
    { date: "19/09/2025", day: "VIERNES", time: "21:00 HL / 20:00 HC", stadium: "CALIENTE", home: "Tijuana", away: "Pachuca", homeTeam: teamMapping['Tijuana'], awayTeam: teamMapping['Pachuca'], homeId: 162418, awayId: 7848 },
    { date: "20/09/2025", day: "SÁBADO", time: "21:00 HL / 20:00 HC", stadium: "EL ENCANTO", home: "Mazatlán", away: "Atlas", homeTeam: teamMapping['Mazatlán'], awayTeam: teamMapping['Atlas'], homeId: 1170234, awayId: 6577 },
    { date: "20/09/2025", day: "SÁBADO", time: "17:00", stadium: "HIDALGO", home: "Pachuca", away: "Santos Laguna", homeTeam: teamMapping['Pachuca'], awayTeam: teamMapping['Santos Laguna'], homeId: 7848, awayId: 7857 },
    { date: "20/09/2025", day: "SÁBADO", time: "19:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Cruz Azul", away: "Querétaro", homeTeam: teamMapping['Cruz Azul'], awayTeam: teamMapping['Querétaro'], homeId: 6578, awayId: 1943 },
    { date: "20/09/2025", day: "SÁBADO", time: "19:05", stadium: "AKRON", home: "Chivas", away: "Atlético San Luis", homeTeam: teamMapping['Chivas'], awayTeam: teamMapping['Atlético San Luis'], homeId: 7807, awayId: 6358 },
    { date: "21/09/2025", day: "SÁBADO", time: "21:00", stadium: "BBVA", home: "Monterrey", away: "Toluca", homeTeam: teamMapping['Monterrey'], awayTeam: teamMapping['Toluca'], homeId: 8640, awayId: 6618 },
    { date: "21/09/2025", day: "DOMINGO", time: "17:00", stadium: "TSM CORONA", home: "Santos Laguna", away: "León", homeTeam: teamMapping['Santos Laguna'], awayTeam: teamMapping['León'], homeId: 7857, awayId: 1841 }
  ],
  Jornada10: [
    { date: "23/09/2025", day: "VIERNES", time: "19:00", stadium: "VICTORIA", home: "Necaxa", away: "Pachuca", homeTeam: teamMapping['Necaxa'], awayTeam: teamMapping['Pachuca'], homeId: 1842, awayId: 7848 },
    { date: "23/09/2025", day: "VIERNES", time: "21:00 HL / 20:00 HC", stadium: "EL ENCANTO", home: "Mazatlán", away: "Tigres", homeTeam: teamMapping['Mazatlán'], awayTeam: teamMapping['Tigres'], homeId: 1170234, awayId: 8561 },
    { date: "24/09/2025", day: "SÁBADO", time: "21:00", stadium: "JALISCO", home: "Atlas", away: "América", homeTeam: teamMapping['Atlas'], awayTeam: teamMapping['América'], homeId: 6577, awayId: 6576 },
    { date: "24/09/2025", day: "SÁBADO", time: "17:00", stadium: "LA CORREGIDORA", home: "Querétaro", away: "Puebla", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['Puebla'], homeId: 1943, awayId: 7847 },
    { date: "24/09/2025", day: "SÁBADO", time: "19:00", stadium: "NOU CAMP", home: "León", away: "Cruz Azul", homeTeam: teamMapping['León'], awayTeam: teamMapping['Cruz Azul'], homeId: 1841, awayId: 6578 },
    { date: "24/09/2025", day: "SÁBADO", time: "19:00", stadium: "UNIVERSITARIO", home: "Pumas", away: "Monterrey", homeTeam: teamMapping['Pumas'], awayTeam: teamMapping['Monterrey'], homeId: 1946, awayId: 8640 },
    { date: "24/09/2025", day: "SÁBADO", time: "21:00", stadium: "CD. DE LOS DEPORTES", home: "América", away: "Atlético San Luis", homeTeam: teamMapping['América'], awayTeam: teamMapping['Atlético San Luis'], homeId: 6576, awayId: 6358 },
    { date: "24/09/2025", day: "DOMINGO", time: "19:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Cruz Azul", away: "Toluca", homeTeam: teamMapping['Cruz Azul'], awayTeam: teamMapping['Toluca'], homeId: 6578, awayId: 6618 },
    { date: "24/09/2025", day: "DOMINGO", time: "21:00 HC / 20:00 HL", stadium: "CALIENTE", home: "Tijuana", away: "Santos Laguna", homeTeam: teamMapping['Tijuana'], awayTeam: teamMapping['Santos Laguna'], homeId: 162418, awayId: 7857 }
  ],
  Jornada11: [
    { date: "26/09/2025", day: "MARTES", time: "19:00", stadium: "CUAUHTÉMOC", home: "Puebla", away: "Querétaro", homeTeam: teamMapping['Puebla'], awayTeam: teamMapping['Querétaro'], homeId: 7847, awayId: 1943 },
    { date: "26/09/2025", day: "MARTES", time: "19:05", stadium: "AKRON", home: "Chivas", away: "Pachuca", homeTeam: teamMapping['Chivas'], awayTeam: teamMapping['Pachuca'], homeId: 7807, awayId: 7848 },
    { date: "26/09/2025", day: "MARTES", time: "21:00", stadium: "NOU CAMP", home: "León", away: "Tigres", homeTeam: teamMapping['León'], awayTeam: teamMapping['Tigres'], homeId: 1841, awayId: 8561 },
    { date: "26/09/2025", day: "MARTES", time: "21:00", stadium: "O. BENITO JUÁREZ", home: "FC Juárez", away: "Mazatlán", homeTeam: teamMapping['FC Juárez'], awayTeam: teamMapping['Mazatlán'], homeId: 649424, awayId: 1170234 },
    { date: "27/09/2025", day: "MIÉRCOLES", time: "18:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Pumas", away: "Atlas", homeTeam: teamMapping['Pums'], awayTeam: teamMapping['Atlas'], homeId: 1946, awayId: 6577 },
    { date: "27/09/2025", day: "MIÉRCOLES", time: "19:00", stadium: "UNIVERSITARIO", home: "Querétaro", away: "Monterrey", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['Monterrey'], homeId: 1943, awayId: 8640 },
    { date: "27/09/2025", day: "MIÉRCOLES", time: "20:00", stadium: "NEMESIO DIEZ", home: "Toluca", away: "América", homeTeam: teamMapping['Toluca'], awayTeam: teamMapping['América'], homeId: 6618, awayId: 6576 },
    { date: "27/09/2025", day: "MIÉRCOLES", time: "21:00", stadium: "ALFONSO LASTRAS", home: "Atlético San Luis", away: "Santos Laguna", homeTeam: teamMapping['Atlético San Luis'], awayTeam: teamMapping['Santos Laguna'], homeId: 6358, awayId: 7857 },
    { date: "27/09/2025", day: "MIÉRCOLES", time: "21:00", stadium: "TSM CORONA", home: "Santos Laguna", away: "Cruz Azul", homeTeam: teamMapping['Santos Laguna'], awayTeam: teamMapping['Cruz Azul'], homeId: 7857, awayId: 6578 }
  ],
  Jornada12: [
    { date: "03/10/2025", day: "VIERNES", time: "19:00", stadium: "O. BENITO JUÁREZ", home: "FC Juárez", away: "Tijuana", homeTeam: teamMapping['FC Juárez'], awayTeam: teamMapping['Tijuana'], homeId: 649424, awayId: 162418 },
    { date: "03/10/2025", day: "VIERNES", time: "21:00", stadium: "CUAUHTÉMOC", home: "Puebla", away: "Pumas", homeTeam: teamMapping['Puebla'], awayTeam: teamMapping['Pumas'], homeId: 7847, awayId: 1946 },
    { date: "04/10/2025", day: "SÁBADO", time: "17:00", stadium: "HIDALGO", home: "Pachuca", away: "León", homeTeam: teamMapping['Pachuca'], awayTeam: teamMapping['León'], homeId: 7848, awayId: 1841 },
    { date: "04/10/2025", day: "SÁBADO", time: "17:00", stadium: "JALISCO", home: "Atlas", away: "Necaxa", homeTeam: teamMapping['Atlas'], awayTeam: teamMapping['Necaxa'], homeId: 6577, awayId: 1842 },
    { date: "04/10/2025", day: "SÁBADO", time: "19:00", stadium: "BBVA", home: "Monterrey", away: "Querétaro", homeTeam: teamMapping['Monterrey'], awayTeam: teamMapping['Querétaro'], homeId: 8640, awayId: 1943 },
    { date: "04/10/2025", day: "SÁBADO", time: "19:00", stadium: "NEMESIO DIEZ", home: "Toluca", away: "Chivas", homeTeam: teamMapping['Toluca'], awayTeam: teamMapping['Chivas'], homeId: 6618, awayId: 7807 },
    { date: "04/10/2025", day: "SÁBADO", time: "21:00", stadium: "CD. DE LOS DEPORTES", home: "América", away: "Atlético San Luis", homeTeam: teamMapping['América'], awayTeam: teamMapping['Atlético San Luis'], homeId: 6576, awayId: 6358 },
    { date: "05/10/2025", day: "DOMINGO", time: "17:00", stadium: "LA CORREGIDORA", home: "Querétaro", away: "Mazatlán", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['Mazatlán'], homeId: 1943, awayId: 1170234 },
    { date: "05/10/2025", day: "DOMINGO", time: "21:00 HC / 20:00 HL", stadium: "CALIENTE", home: "Tijuana", away: "Cruz Azul", homeTeam: teamMapping['Tijuana'], awayTeam: teamMapping['Cruz Azul'], homeId: 162418, awayId: 6578 }
  ],
  Jornada13: [
    { date: "17/10/2025", day: "VIERNES", time: "19:00", stadium: "O. BENITO JUÁREZ", home: "FC Juárez", away: "Pachuca", homeTeam: teamMapping['FC Juárez'], awayTeam: teamMapping['Pachuca'], homeId: 649424, awayId: 7848 },
    { date: "17/10/2025", day: "VIERNES", time: "21:00 HC / 20:00 HL", stadium: "EL ENCANTO", home: "Mazatlán", away: "Toluca", homeTeam: teamMapping['Mazatlán'], awayTeam: teamMapping['Toluca'], homeId: 1170234, awayId: 6618 },
    { date: "18/10/2025", day: "SÁBADO", time: "17:00", stadium: "UNIVERSITARIO", home: "Querétaro", away: "América", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['América'], homeId: 1943, awayId: 6576 },
    { date: "18/10/2025", day: "SÁBADO", time: "19:00", stadium: "NOU CAMP", home: "León", away: "Puebla", homeTeam: teamMapping['León'], awayTeam: teamMapping['Puebla'], homeId: 1841, awayId: 7847 },
    { date: "18/10/2025", day: "SÁBADO", time: "19:00", stadium: "NEMESIO DIEZ", home: "Toluca", away: "Santos Laguna", homeTeam: teamMapping['Toluca'], awayTeam: teamMapping['Santos Laguna'], homeId: 6618, awayId: 7857 },
    { date: "18/10/2025", day: "SÁBADO", time: "21:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Pumas", away: "Chivas", homeTeam: teamMapping['Pums'], awayTeam: teamMapping['Chivas'], homeId: 1946, awayId: 7807 },
    { date: "18/10/2025", day: "SÁBADO", time: "21:05", stadium: "AKRON", home: "Chivas", away: "Tigres", homeTeam: teamMapping['Chivas'], awayTeam: teamMapping['Tigres'], homeId: 7807, awayId: 8561 },
    { date: "19/10/2025", day: "DOMINGO", time: "17:00", stadium: "TSM CORONA", home: "Santos Laguna", away: "Atlético San Luis", homeTeam: teamMapping['Santos Laguna'], awayTeam: teamMapping['Atlético San Luis'], homeId: 7857, awayId: 6358 },
    { date: "19/10/2025", day: "DOMINGO", time: "19:00", stadium: "ALFONSO LASTRAS", home: "Atlético San Luis", away: "Cruz Azul", homeTeam: teamMapping['Atlético San Luis'], awayTeam: teamMapping['Cruz Azul'], homeId: 6358, awayId: 6578 }
  ],
  Jornada14: [
    { date: "21/10/2025", day: "VIERNES", time: "19:00", stadium: "CUAUHTÉMOC", home: "Puebla", away: "Tijuana", homeTeam: teamMapping['Puebla'], awayTeam: teamMapping['Tijuana'], homeId: 7847, awayId: 162418 },
    { date: "21/10/2025", day: "VIERNES", time: "21:00", stadium: "ALFONSO LASTRAS", home: "Atlético San Luis", away: "Pachuca", homeTeam: teamMapping['Atlético San Luis'], awayTeam: teamMapping['Pachuca'], homeId: 6358, awayId: 7848 },
    { date: "21/10/2025", day: "VIERNES", time: "21:00", stadium: "UNIVERSITARIO", home: "Querétaro", away: "León", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['León'], homeId: 1943, awayId: 1841 },
    { date: "22/10/2025", day: "SÁBADO", time: "17:00", stadium: "TSM CORONA", home: "Santos Laguna", away: "América", homeTeam: teamMapping['Santos Laguna'], awayTeam: teamMapping['América'], homeId: 7857, awayId: 6576 },
    { date: "22/10/2025", day: "SÁBADO", time: "17:00", stadium: "O. BENITO JUÁREZ", home: "FC Juárez", away: "Monterrey", homeTeam: teamMapping['FC Juárez'], awayTeam: teamMapping['Monterrey'], homeId: 649424, awayId: 8640 },
    { date: "22/10/2025", day: "SÁBADO", time: "19:00", stadium: "BBVA", home: "Monterrey", away: "Tigres", homeTeam: teamMapping['Monterrey'], awayTeam: teamMapping['Tigres'], homeId: 8640, awayId: 8561 },
    { date: "22/10/2025", day: "SÁBADO", time: "19:05", stadium: "AKRON", home: "Chivas", away: "Mazatlán", homeTeam: teamMapping['Chivas'], awayTeam: teamMapping['Mazatlán'], homeId: 7807, awayId: 1170234 },
    { date: "22/10/2025", day: "SÁBADO", time: "21:00", stadium: "NEMESIO DIEZ", home: "Toluca", away: "Atlas", homeTeam: teamMapping['Toluca'], awayTeam: teamMapping['Atlas'], homeId: 6618, awayId: 6577 },
    { date: "22/10/2025", day: "SÁBADO", time: "21:05", stadium: "OLÍMPICO UNIVERSITARIO", home: "Pumas", away: "Cruz Azul", homeTeam: teamMapping['Pums'], awayTeam: teamMapping['Cruz Azul'], homeId: 1946, awayId: 6578 }
  ],
  Jornada15: [
    { date: "24/10/2025", day: "MARTES", time: "19:00", stadium: "CD. DE LOS DEPORTES", home: "América", away: "Puebla", homeTeam: teamMapping['América'], awayTeam: teamMapping['Puebla'], homeId: 6576, awayId: 7847 },
    { date: "24/10/2025", day: "MARTES", time: "19:00", stadium: "VICTORIA", home: "Necaxa", away: "Toluca", homeTeam: teamMapping['Necaxa'], awayTeam: teamMapping['Toluca'], homeId: 1842, awayId: 6618 },
    { date: "24/10/2025", day: "MARTES", time: "21:00 HC / 20:00 HL", stadium: "EL ENCANTO", home: "Mazatlán", away: "Querétaro", homeTeam: teamMapping['Mazatlán'], awayTeam: teamMapping['Querétaro'], homeId: 1170234, awayId: 1943 },
    { date: "24/10/2025", day: "MARTES", time: "21:00", stadium: "BBVA", home: "Monterrey", away: "Santos Laguna", homeTeam: teamMapping['Monterrey'], awayTeam: teamMapping['Santos Laguna'], homeId: 8640, awayId: 7857 },
    { date: "25/10/2025", day: "MIÉRCOLES", time: "19:00", stadium: "LA CORREGIDORA", home: "Querétaro", away: "Tigres", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['Tigres'], homeId: 1943, awayId: 8561 },
    { date: "25/10/2025", day: "MIÉRCOLES", time: "19:00", stadium: "HIDALGO", home: "Pachuca", away: "Chivas", homeTeam: teamMapping['Pachuca'], awayTeam: teamMapping['Chivas'], homeId: 7848, awayId: 7807 },
    { date: "25/10/2025", day: "MIÉRCOLES", time: "21:00", stadium: "JALISCO", home: "Atlas", away: "Atlético San Luis", homeTeam: teamMapping['Atlas'], awayTeam: teamMapping['Atlético San Luis'], homeId: 6577, awayId: 6358 },
    { date: "25/10/2025", day: "MIÉRCOLES", time: "21:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Pumas", away: "León", homeTeam: teamMapping['Pums'], awayTeam: teamMapping['León'], homeId: 1946, awayId: 1841 },
    { date: "25/10/2025", day: "MIÉRCOLES", time: "21:00 HC / 20:00 HL", stadium: "CALIENTE", home: "Tijuana", away: "FC Juárez", homeTeam: teamMapping['Tijuana'], awayTeam: teamMapping['FC Juárez'], homeId: 162418, awayId: 649424 }
  ],
  Jornada16: [
    { date: "31/10/2025", day: "VIERNES", time: "19:00", stadium: "VICTORIA", home: "Necaxa", away: "América", homeTeam: teamMapping['Necaxa'], awayTeam: teamMapping['América'], homeId: 1842, awayId: 6576 },
    { date: "31/10/2025", day: "VIERNES", time: "21:00", stadium: "CUAUHTÉMOC", home: "Puebla", away: "Tigres", homeTeam: teamMapping['Puebla'], awayTeam: teamMapping['Tigres'], homeId: 7847, awayId: 8561 },
    { date: "31/10/2025", day: "VIERNES", time: "21:00", stadium: "ALFONSO LASTRAS", home: "Atlético San Luis", away: "Mazatlán", homeTeam: teamMapping['Atlético San Luis'], awayTeam: teamMapping['Mazatlán'], homeId: 6358, awayId: 1170234 },
    { date: "01/11/2025", day: "SÁBADO", time: "17:00", stadium: "JALISCO", home: "Atlas", away: "Cruz Azul", homeTeam: teamMapping['Atlas'], awayTeam: teamMapping['Cruz Azul'], homeId: 6577, awayId: 6578 },
    { date: "01/11/2025", day: "SÁBADO", time: "19:00", stadium: "BBVA", home: "Monterrey", away: "Pachuca", homeTeam: teamMapping['Monterrey'], awayTeam: teamMapping['Pachuca'], homeId: 8640, awayId: 7848 },
    { date: "02/11/2025", day: "DOMINGO", time: "12:00", stadium: "OLÍMPICO UNIVERSITARIO", home: "Pumas", away: "Santos Laguna", homeTeam: teamMapping['Pums'], awayTeam: teamMapping['Santos Laguna'], homeId: 1946, awayId: 7857 },
    { date: "02/11/2025", day: "DOMINGO", time: "17:00", stadium: "LA CORREGIDORA", home: "Querétaro", away: "Toluca", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['Toluca'], homeId: 1943, awayId: 6618 },
    { date: "02/11/2025", day: "DOMINGO", time: "19:00", stadium: "HIDALGO", home: "Pachuca", away: "FC Juárez", homeTeam: teamMapping['Pachuca'], awayTeam: teamMapping['FC Juárez'], homeId: 7848, awayId: 649424 }
  ],
  Jornada17: [
    { date: "07/11/2025", day: "VIERNES", time: "19:00 HC / 18:00 HL", stadium: "O. BENITO JUÁREZ", home: "FC Juárez", away: "Pumas", homeTeam: teamMapping['FC Juárez'], awayTeam: teamMapping['Pums'], homeId: 649424, awayId: 1946 },
    { date: "07/11/2025", day: "VIERNES", time: "21:00 HC / 19:00 HL", stadium: "CALIENTE", home: "Tijuana", away: "América", homeTeam: teamMapping['Tijuana'], awayTeam: teamMapping['América'], homeId: 162418, awayId: 6576 },
    { date: "08/11/2025", day: "SÁBADO", time: "21:00 HC / 20:00 HL", stadium: "EL ENCANTO", home: "Mazatlán", away: "Monterrey", homeTeam: teamMapping['Mazatlán'], awayTeam: teamMapping['Monterrey'], homeId: 1170234, awayId: 8640 },
    { date: "08/11/2025", day: "SÁBADO", time: "17:00", stadium: "UNIVERSITARIO", home: "Querétaro", away: "Cruz Azul", homeTeam: teamMapping['Querétaro'], awayTeam: teamMapping['Cruz Azul'], homeId: 1943, awayId: 6578 },
    { date: "08/11/2025", day: "SÁBADO", time: "17:05", stadium: "AKRON", home: "Chivas", away: "Santos Laguna", homeTeam: teamMapping['Chivas'], awayTeam: teamMapping['Santos Laguna'], homeId: 7807, awayId: 7857 },
    { date: "08/11/2025", day: "SÁBADO", time: "19:00", stadium: "NOU CAMP", home: "León", away: "Atlético San Luis", homeTeam: teamMapping['León'], awayTeam: teamMapping['Atlético San Luis'], homeId: 1841, awayId: 6358 },
    { date: "08/11/2025", day: "SÁBADO", time: "19:00", stadium: "NEMESIO DIEZ", home: "Toluca", away: "Tigres", homeTeam: teamMapping['Toluca'], awayTeam: teamMapping['Tigres'], homeId: 6618, awayId: 8561 },
    { date: "09/11/2025", day: "SÁBADO", time: "21:00", stadium: "TBD", home: "Puebla", away: "Necaxa", homeTeam: teamMapping['Puebla'], awayTeam: teamMapping['Necaxa'], homeId: 7847, awayId: 1842 },
    { date: "09/11/2025", day: "DOMINGO", time: "17:00", stadium: "TSM CORONA", home: "Santos Laguna", away: "Atlas", homeTeam: teamMapping['Santos Laguna'], awayTeam: teamMapping['Atlas'], homeId: 7857, awayId: 6577 }
  ]
};

export default ligaMXSchedule;