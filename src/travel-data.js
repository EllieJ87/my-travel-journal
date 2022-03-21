const travelData = [
    {
        id: 1,
        location: "Iceland",
        googleMapsUrl: "https://goo.gl/maps/K6KDRFwJ2uar25nG7",
        place: "Reykjavik",
        dates: {
            startDate: "13th March, 2015",
            endDate: "15th March, 2015"
        },
        desciption: "Reykjavik, on the coast of Iceland, is the country's capital and largest city. It's home to the National and Saga museums, tracing Iceland's Viking history. The striking concrete Hallgrimskirkja church and rotating Perlan glass dome offer sweeping views of the sea and nearby hills. Exemplifying the island's volcanic activity is the geothermal Blue Lagoon spa, near the village of Grindavik.",
        imageUrl: "iceland.jpg"
    },
    {
        id: 2,
        location: "Croatia",
        googleMapsUrl: "https://goo.gl/maps/UE31A9EzMnoU8LRD8",
        place: "Dubrovnik",
        dates: {
            startDate: "18th Sept, 2015",
            endDate: "27th Sept, 2015"
        },
        desciption: "Dubrovnik is a city in southern Croatia fronting the Adriatic Sea. It's known for its distinctive Old Town, encircled with massive stone walls completed in the 16th century. Its well-preserved buildings range from baroque St. Blaise Church to Renaissance Sponza Palace and Gothic Rector's Palace, now a history museum. Paved with limestone, the pedestrianized Stradun (or Placa) is lined with shops and restaurants.",
        imageUrl: "croatia.jpg"
    },
    {
        id: 3,
        location: "Holland",
        googleMapsUrl: "https://goo.gl/maps/5HRmFn8eZA7i4jkY6",
        place: "Amsterdam",
        dates: {
            startDate: "23rd March, 2016",
            endDate: "27th March, 2016"
        },
        desciption: "Amsterdam is the Netherlands' capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city's 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city's character, and there are numerous bike paths.",
        imageUrl: "amsterdam.jpg"
    },
    {
        id: 4,
        location: "Hungary",
        googleMapsUrl: "https://goo.gl/maps/eT2AmFw2TwKGQbCD9",
        place: "Budapest",
        dates: {
            startDate: "1st July, 2016",
            endDate: "3rd July, 2016"
        },
        desciption: "Budapest, Hungary's capital, is bisected by the River Danube. Its 19th-century Chain Bridge connects the hilly Buda district with flat Pest. A funicular runs up Castle Hill to Buda's Old Town, where the Budapest History Museum traces city life from Roman times onward. Trinity Square is home to 13th-century Matthias Church and the turrets of the Fishermen's Bastion, which offer sweeping views.",
        imageUrl: "budapest.jpg"
    },
    {
        id: 5,
        location: "Hong Kong",
        googleMapsUrl: "https://goo.gl/maps/hh6pRWgwyviZ8F5UA",
        place: "Kowloon",
        dates: {
            startDate: "26th Nov, 2016",
            endDate: "3rd Nov, 2016"
        },
        desciption: "Kowloon encompasses the northern part of Hong Kong, on the mainland across Victoria Harbour. Once a separate city, it was acquired by Britain in 1860 and returned to China with the rest of the colony in 1997. It's now a shopping, arts and entertainment district. Stores line Nathan Road, while traditional markets offer goods from flowers and goldfish to clothes and jade.",
        imageUrl: "hong-kong-2016.jpg"
    },
    {
        id: 6,
        location: "Estonia",
        googleMapsUrl: "https://goo.gl/maps/5fEhq2ee51Hrr3876",
        place: "Tallinn",
        dates: {
            startDate: "9th Dec, 2016",
            endDate: "11th Dec, 2016"
        },
        desciption: "Tallinn, Estonia's capital on the Baltic Sea, is the country's cultural hub. It retains its walled, cobblestoned Old Town, home to cafes and shops, as well as Kiek in de Kök, a 15th-century defensive tower. Its Gothic Town Hall, built in the 13th century and with a 64m-high tower, sits in historic Tallinn's main square. St. Nicholas Church is a 13th-century landmark exhibiting ecclesiastical art.",
        imageUrl: "tallinn.jpg"
    },
    {
        id: 7,
        location: "Turkey",
        googleMapsUrl: "https://goo.gl/maps/PsnFDHFfKULNQykq9",
        place: "Istanbul",
        dates: {
            startDate: "5th Feb, 2017",
            endDate: "12th Feb, 2017"
        },
        desciption: "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races, and Egyptian obelisks also remain. The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare Christian mosaics.",
        imageUrl: "turkey.jpg"
    },
    {
        id: 8,
        location: "Hong Kong",
        googleMapsUrl: "https://goo.gl/maps/GvPsWt1iVA9LUKRo6",
        place: "Kowloon",
        dates: {
            startDate: "30th Jul, 2017",
            endDate: "5th Jul, 2017"
        },
        desciption: "Scenic lookout point offers sweeping views of the skyline, harbor & mountains beyond.",
        imageUrl: "hong-kong-2017.jpg"
    },
    {
        id: 9,
        location: "Poland",
        googleMapsUrl: "https://goo.gl/maps/auU9Lurhe4JTst2F8",
        place: "Warsaw",
        dates: {
            startDate: "28th Mar, 2018",
            endDate: "1st Apr, 2018"
        },
        desciption: "Warsaw, officially the Capital City of Warsaw, is the capital and largest city of Poland. The metropolis stands on the River Vistula in east-central Poland.",
        imageUrl: "poland.jpg"
    },
    {
        id: 10,
        location: "China",
        googleMapsUrl: "https://goo.gl/maps/HH4WbtJMcTWk6LaM8",
        place: "Hangzhou",
        dates: {
            startDate: "7th Apr, 2018",
            endDate: "14th Apr, 2018"
        },
        desciption: "Hangzhou, the capital of China's Zhejiang province, is the southern terminus of the ancient Grand Canal waterway, which originates in Beijing. Its West Lake, celebrated by poets and artists since the 9th century, encompasses islands (reachable by boat), temples, pavilions, gardens and arched bridges. On its south bank is 5-story Leifeng Pagoda, a modern reconstruction of a structure built in 975 A.D.",
        imageUrl: "hangzhou.jpg"
    },
    {
        id: 11,
        location: "Caribbean",
        googleMapsUrl: "https://goo.gl/maps/RBn8gbdHa67W6nyv6",
        place: "St Vincent and the Grenadines",
        dates: {
            startDate: "24th May, 2018",
            endDate: "29th May, 2018"
        },
        desciption: "St. Vincent and the Grenadines is a southern Caribbean nation comprising a main island, St. Vincent, and a chain of smaller islands. With yacht-filled harbors, chic private isles and volcanic landscapes, it's known for its major sailing destinations such as reef-lined Bequia Island off Admiralty Bay, bordered by white-sand beaches like Princess Margaret. The main island is home to the capital, Kingstown.",
        imageUrl: "st-vincent.jpg"
    },
    {
        id: 12,
        location: "Spain",
        googleMapsUrl: "https://goo.gl/maps/rH2cXrZrJtLzfT599",
        place: "Tenerife",
        dates: {
            startDate: "20th Jul, 2018",
            endDate: "5th Aug, 2018"
        },
        desciption: "Striking, volcanic island & the biggest of the Canaries known for its beaches, resorts & nightlife.",
        imageUrl: "tenerife.jpg"
    },
    {
        id: 13,
        location: "Sweden",
        googleMapsUrl: "https://goo.gl/maps/TiJqmC7AGa5MhNfJ6",
        place: "Stockholm",
        dates: {
            startDate: "19th Oct, 2018",
            endDate: "21st Oct, 2018"
        },
        desciption: "Stockholm, the capital of Sweden, encompasses 14 islands and more than 50 bridges on an extensive Baltic Sea archipelago. The cobblestone streets and ochre-colored buildings of Gamla Stan (the old town) are home to the 13th-century Storkyrkan Cathedral, the Kungliga Slottet Royal Palace and the Nobel Museum, which focuses on the Nobel Prize. Ferries and sightseeing boats shuttle passengers between the islands.",
        imageUrl: "stockholm.jpg"
    },
    {
        id: 14,
        location: "Belgium",
        googleMapsUrl: "https://goo.gl/maps/TpvxAmhyhKHVBQPS8",
        place: "Brussels",
        dates: {
            startDate: "14th Dec, 2018",
            endDate: "16th Dec, 2018"
        },
        desciption: "The City of Brussels is the largest municipality and historical centre of the Brussels-Capital Region, as well as the capital of Belgium. It is also the administrative centre of the European Union, and is thus often dubbed, along with the region, the EU's capital city.",
        imageUrl: "brussels.jpg"
    },
    {
        id: 15,
        location: "Norway",
        googleMapsUrl: "https://goo.gl/maps/3svsBhrG3CA6jf5x6",
        place: "Oslo",
        dates: {
            startDate: "1st Feb, 2019",
            endDate: "3rd Feb, 2019"
        },
        desciption: "Oslo, the capital of Norway, sits on the country's southern coast at the head of the Oslofjord. It's known for its green spaces and museums. Many of these are on the Bygdøy Peninsula, including the waterside Norwegian Maritime Museum and the Viking Ship Museum, with Viking ships from the 9th century. The Holmenkollbakken is a ski-jumping hill with panoramic views of the fjord. It also has a ski museum",
        imageUrl: "oslo.jpg"
    },
    {
        id: 16,
        location: "Denmark",
        googleMapsUrl: "https://goo.gl/maps/EXCCz3zyr2vPLNri8",
        place: "Copenhagen",
        dates: {
            startDate: "12th Oct, 2019",
            endDate: "14th Oct, 2019"
        },
        desciption: "Copenhagen, Denmark's capital, sits on the coastal islands of Zealand and Amager. It's linked to Malmo in southern Sweden by the Öresund Bridge. Indre By, the city's historic center, contains Frederiksstaden, an 18th-century rococo district, home to the royal family's Amalienborg Palace. Nearby is Christiansborg Palace and the Renaissance-era Rosenborg Castle, surrounded by gardens and home to the crown jewels.",
        imageUrl: "copenhagen.jpg"
    },
    {
        id: 17,
        location: "Sweden",
        googleMapsUrl: "https://goo.gl/maps/QmjxMiUy3dih7Vwt7",
        place: "Gothenburg",
        dates: {
            startDate: "14th Oct, 2019",
            endDate: "20th Oct, 2019"
        },
        desciption: "Gothenburg, a major city in Sweden, is situated off the Göta älv river on the country's west coast. An important seaport, it's known for its Dutch-style canals and leafy boulevards like the Avenyn, the city's main thoroughfare, lined with many cafes and shops. Liseberg is a popular amusement park with themed rides, performance venues and a landscaped sculpture garden.",
        imageUrl: "gothenburg.jpg"
    },
    {
        id: 18,
        location: "Germany",
        googleMapsUrl: "https://goo.gl/maps/vsjp5UhZ9Zy9MdFT8",
        place: "Nuremberg",
        dates: {
            startDate: "29th Nov, 2019",
            endDate: "30th Nov, 2019"
        },
        desciption: "Nuremberg is the second-largest city of the German state of Bavaria after its capital Munich, and its 518,370 inhabitants make it the 14th-largest city in Germany.",
        imageUrl: "nuremberg.jpg"
    },
]

export default travelData;