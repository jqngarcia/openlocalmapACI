// All the POIs shown in the map

var pois = {

    bar: {
	name: 'Bar',
	query: '[amenity=bar][member_of=ACI]',
	iconName: 'bar_coktail'
    },

    pub: {
	name: 'Pub',
	query: '[amenity=pub][member_of=ACI]',
	iconName: 'bar'
    },

    restaurant: {
	name: 'Restaurant',
	query: '[amenity=restaurant][member_of=ACI]',
	iconName: 'restaurant',
    },

//    cafe: {
//	name: 'Cafè',
//	query: '[amenity=cafe][member_of=ACI]',
//	iconName: 'coffee'
//    },

//    fast_food: {
//	name: 'Menjar ràpid',
//	query: '[amenity=fast_food]',
//	iconName: 'fastfood'
//    },

    caterer: {
	name: 'Menjar preparat',
	query: '[delivery=only][member_of=ACI]',
	iconName: 'takeaway'
    },

//    internet_access: {
//	name: 'Llocs amb WiFi',
//	query: '[internet_access][internet_access!=no]',
//	iconName: 'wifi'
//    },

    bank: {
	name: 'Banc',
	query: '[amenity=bank][member_of=ACI]',
	iconName: 'bank',
	tagParser: bank_parser
    },

//    atm: {
//	name: 'Caixer',
//	query: '[amenity=atm]',
//	iconName: 'atm-2'
//    },

//    post_office: {
//	name: 'Oficina de correus',
//	query: '[amenity=post_office]',
//	iconName: 'postal'
//    },

//    fuel: {
//	name: 'Estació de servei',
//	query: '[amenity=fuel]',
//	iconName: 'fillingstation',
//	tagParser: fuel_parser
//    },

    wheel_repair: {
	name: 'Recambis',
	query: '[shop=car_parts][member_of=ACI]',
	iconName: 'tires'
    },

    car_repair: {
	name: 'Mecànic',
	query: '[shop=car_repair][member_of=ACI]',
	iconName: 'repair'
    },

//    bus_stop: {
//	name: 'Parada de bus',
//	query: '[highway=bus_stop]',
//	iconName: 'busstop'
//    },

//    bus_station: {
//	name: 'Terminal d\'omnibus',
//	query: '[amenity=bus_station]',
//	iconName: 'bus'
//    },

    training: {
	name: 'Acadèmia',
	query: '[amenity=school][member_of=ACI]',
	iconName: 'school'
    },
	
    training_dance: {
	name: 'Acadèmia de Dansa',
	query: '[leisure=dance][member_of=ACI]',
	iconName: 'dance_class'
    },

    Playground: {
	name: 'Espais de lleure',
	query: '[leisure=playground][member_of=ACI]',
	iconName: 'playground'
    },
	
    Gambling: {
	name: 'Jocs i Apostes',
	query: '[amenity=gambling][member_of=ACI]',
	iconName: 'casino-2'
    },

    clinic: {
	name: 'Clínica',
	query: '[amenity=clinic][member_of=ACI]',
	iconName: 'medicine'
    },

//    hospital: {
//	name: 'Hospital',
//	query: '[amenity=hospital]',
//	iconName: 'hospital-building',
//	tagParser: hospital_parser
//    },

    pharmacy: {
	name: 'Farmàcia',
	query: '[amenity=pharmacy][member_of=ACI]',
	iconName: 'drugstore'
    },

    dentist: {
	name: 'Dentista',
	query: '[amenity=dentist][member_of=ACI]',
	iconName: 'dentist'
    },

    veterinary: {
	name: 'Veterinari',
	query: '[amenity=veterinary][member_of=ACI]',
	iconName: 'veterinary'
    },

//    physician: {
//	name: 'Fisioteràpia',
//	query: '[office=physician]',
//	iconName: 'massage'
//   },

    hairdresser: {
	name: 'Perruqueria',
	query: '[shop=hairdresser][member_of=ACI]',
	iconName: 'barber'
    },

    beauty: {
	name: 'Estètica',
	query: '[shop=beauty][member_of=ACI]',
	iconName: 'beautysalon'
    },

    supermarket: {
	name: 'Supermercat',
	query: '[shop=supermarket][member_of=ACI]',
	iconName: 'supermarket'
    },

//   convenience: {
//	name: 'Queviures',
//	query: '[shop=convenience]',
//	iconName: 'conveniencestore'
//    },

//    bakery: {
//	name: 'Forn',
//	query: '[shop=bakery]',
//	iconName: 'bakery'
//    },

    greengrocer: {
	name: 'Fruiteria',
	query: '[shop=greengrocer][member_of=ACI]',
	iconName: 'fruits'
    },

//    farm: {
//	name: 'Productes de granja',
//	query: '[shop=farm]',
//	iconName: 'farmstand'
//    },

    herbalist: {
	name: 'Herboristeria',
	query: '[shop=herbalist][member_of=ACI]',
	iconName: 'herbalist'
    },

    newsagent: {
	name: 'Diaris',
	query: '[office=newspaper][member_of=ACI]',
	iconName: 'newsagent'
    },

//   kiosk: {
//	name: 'Quiosc',
//	query: '[shop=kiosk]',
//	iconName: 'kiosk'
//    },

    pet: {
	name: 'Mascotes',
	query: '[shop=pet][member_of=ACI]',
	iconName: 'pets'
    },

//  video: {
//	name: 'Vídeoclub',
//	query: '[shop=video]',
//	iconName: 'movierental'
//    },

    jewelry: {
	name: 'Joieria',
	query: '[shop=jewelry][member_of=ACI]',
	iconName: 'jewelry'
    },

    fabric: {
	name: 'Merceria',
	query: '[shop=fabric][member_of=ACI]',
	iconName: 'lingerie'
    },

    it: {
	name: 'Informàtica',
	query: '[office=it][member_of=ACI]',
	iconName: 'computers'
    },

    butcher: {
	name: 'Carniceria',
	query: '[shop=butcher][member_of=ACI]',
	iconName: 'butcher-2'
    },

 //   doityourself: {
//	name: 'Ferreterìa',
//	query: '[shop=doityourself]',
//	iconName: 'hiretools'
//    },


    electrical_equipment: {
	name: 'Mat.elèctric',
	query: '[shop=electrical_equipment][member_of=ACI]',
	iconName: 'power'
    },

    reforms: {
	name: 'Construccions',
	query: '[craft=reforms][member_of=ACI]',
	iconName: 'plastering'
    },

    electrician: {
	name: 'Electricista',
	query: '[craft=electrician][member_of=ACI]',
	iconName: 'power'
    },

    window_construction: {
	name: 'Al·lumini',
	query: '[craft=window_construction][member_of=ACI]',
	iconName: 'glazer'
    },

    glaziery: {
	name: 'Cristalleria',
	query: '[shop=glaziery][member_of=ACI]',
	iconName: 'glazer'
    },

//   painter: {
//	name: 'Pintors',
//	query: '[craft=painter]',
//	iconName: 'paint'
//    },

    paint: {
	name: 'Pintures',
	query: '[shop=paint][member_of=ACI]',
	iconName: 'paint'
    },


    furniture: {
	name: 'Mobles',
	query: '[shop=furniture][member_of=ACI]',
	iconName: 'homecenter'
    },

//    carpenter: {
//	name: 'Fusteria',
//	query: '[craft=carpenter]',
//	iconName: 'homecenter'
//   },

//    garden_furniture: {
//	name: 'Productes de jardineria',
//	query: '[shop=garden_furniture]',
//	iconName: 'lawncareicon'
//    },

//    garden_centre: {
//	name: 'Jardineria i plantes',
//	query: '[shop=garden_centre]',
//	iconName: 'flowers'
//    },

//      swimming_pool: {
//  	name: 'Centre Esportiu',
//  	query: '[leisure=sports_center][member_of=ACI]',
//  	iconName: 'swimming2'
//      },

    estate_agent: {
	name: 'Immobiliària',
	query: '[office=estate_agent]',
	iconName: 'estateagent'
    },

//    gallery: {
//	name: 'Galeria d\'art',
//	query: '[tourism=gallery]',
//	iconName: 'museum_art'
//    },

//    museum: {
//	name: 'Museu',
//	query: '[tourism=museum]',
//	iconName: 'museum_crafts'
//    },

//    theatre: {
//	name: 'Teatre',
//	query: '[amenity=theatre]',
//	iconName: 'theater'
//    },
	
      NGO: {
	name: 'ONG i Fundacions',
	query: '[amenity=ngo]',
	iconName: 'communitycentre'
    },
	
	communitycentre

//    paintball: {
//	name: 'Paintball',
//	query: '[sport=shooting][shooting=paintball]',
//	iconName: 'paintball'
//    },

//    'camp_site': {
//	name: 'Camping',
//	query: '[tourism=camp_site]',
//	iconName: 'camping-2'
//    },

//    information: {
//	name: 'Informació turística',
//	query: '[tourism=information]',
//	iconName: 'information'
//    },

    hotel: {
	name: 'Hotel',
	query: '[amenitym=hotel][member_of=ACI]',
	iconName: 'hotel_0star',
},

//    hostel: {
//	name: 'Hostel',
//	query: '[tourism=hostel]',
//	iconName: 'youthhostel'
//    },


    sports_centre: {
	name: 'Club',
	query: '[leisure=sports_centre][member_of=ACI]',
	iconName: 'stadium'
 },

//    viewpoint: {
//	name: 'Mirador',
//	query: '[tourism=viewpoint]',
//	iconName: 'sight-2'
//    },

//    ruins: {
//	name: 'Runes (i cabanes)',
//	query: '[historic=ruins]',
//	iconName: 'ruins'
//    },

}
