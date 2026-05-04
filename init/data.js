const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Wake up to the sound of crashing waves in this charming beachfront cottage in Malibu. Features 2 cozy bedrooms, a wrap-around porch with ocean views, fireplace, and direct private beach access. Enjoy California sunsets, tide pools, and the laid-back coastal lifestyle. Perfect for a romantic getaway or peaceful beach retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {filename: "malibu-gallery-1", url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "malibu-gallery-2", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "malibu-gallery-3", url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "malibu-gallery-4", url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "malibu-gallery-5", url: "https://images.unsplash.com/photo-1502793038519-3172cba999e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "malibu-gallery-6", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"}
    ],
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of vibrant Manhattan in this stylish modern loft with soaring ceilings and floor-to-ceiling windows. Features exposed brick, contemporary furnishings, stainless steel kitchen, and balcony overlooking Times Square. Walk to world-class restaurants, Broadway theaters, museums, and iconic NYC landmarks. Perfect for urban explorers seeking authentic New York energy.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {filename: "nyc-gallery-1", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "nyc-gallery-2", url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "nyc-gallery-3", url: "https://images.unsplash.com/photo-1533090161692-a9ed275067e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "nyc-gallery-4", url: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "nyc-gallery-5", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "nyc-gallery-6", url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"}
    ],
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this luxurious mountain cabin perched high in the Aspen peaks. Features stone fireplaces, picture windows overlooking pristine wilderness, hot tub on the deck, and 3 spacious bedrooms with mountain views. Perfect for hiking in summer, skiing in winter, stargazing, and immersing yourself in pristine nature. True mountain paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {filename: "aspen-gallery-1", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "aspen-gallery-2", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "aspen-gallery-3", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "aspen-gallery-4", url: "https://images.unsplash.com/photo-1542401886-65d27afda266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "aspen-gallery-5", url: "https://images.unsplash.com/photo-1495559411668-caf628c5e366?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"}
    ],
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the timeless charm of Tuscany in this beautifully restored Renaissance villa. Featuring 5 spacious bedrooms, original terracotta floors, and stunning views of rolling hills dotted with cypress trees and vineyards. Perfect for a romantic getaway or family retreat with access to wine tastings and olive oil farms.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "tuscany-gallery-1",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "tuscany-gallery-2",
        url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "tuscany-gallery-3",
        url: "https://images.unsplash.com/photo-1537422176867-fac16a1c4a2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "tuscany-gallery-4",
        url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "tuscany-gallery-5",
        url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "tuscany-gallery-6",
        url: "https://images.unsplash.com/photo-1523821741446-edb429f67d82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique and whimsical treehouse retreat in Portland's lush forest. Features a rope bridge entrance, panoramic forest views, skylights for stargazing, and natural wood finishes. Immerse yourself in nature with bird watching, hiking trails, and complete tranquility. The perfect escape for adventurous souls seeking a truly unforgettable experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {filename: "portland-gallery-1", url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "portland-gallery-2", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "portland-gallery-3", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "portland-gallery-4", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "portland-gallery-5", url: "https://images.unsplash.com/photo-1502793038519-3172cba999e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "portland-gallery-6", url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"}
    ],
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step directly onto pristine white-sand beaches from this luxurious beachfront condo in Cancun. Features a private terrace with ocean views, modern amenities, and direct beach access. Enjoy turquoise Caribbean waters, water sports, and vibrant nightlife. Perfect for beach lovers seeking ultimate tropical relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "cancun-gallery-1",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "cancun-gallery-2",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "cancun-gallery-3",
        url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "cancun-gallery-4",
        url: "https://images.unsplash.com/photo-1551632440-da87d87e5e7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "cancun-gallery-5",
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "cancun-gallery-6",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing, kayaking, and relaxing on the pristine shores of Lake Tahoe in this charming rustic cabin. Features a stone fireplace, wraparound porch with lake views, boat dock access, and 3 bedrooms. Perfect for water sports, hiking alpine trails, or simply enjoying stunning alpine scenery and crisp mountain air year-round.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {filename: "tahoe-gallery-1", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "tahoe-gallery-2", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "tahoe-gallery-3", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "tahoe-gallery-4", url: "https://images.unsplash.com/photo-1542401886-65d27afda266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "tahoe-gallery-5", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "tahoe-gallery-6", url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"}
    ],
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in ultimate luxury in this stunning penthouse overlooking Los Angeles and the Hollywood Hills. Features floor-to-ceiling windows, infinity pool on rooftop terrace, state-of-the-art smart home, wine cellar, and helipad. Panoramic views of downtown LA, mountains, and Pacific Ocean. The pinnacle of LA sophisticated living with access to exclusive shopping and fine dining.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {filename: "la-gallery-1", url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "la-gallery-2", url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "la-gallery-3", url: "https://images.unsplash.com/photo-1533090161692-a9ed275067e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "la-gallery-4", url: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "la-gallery-5", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"}
    ],
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this luxurious ski-in/ski-out chalet in the Swiss Alps. Features cozy fireplaces, 4 bedrooms, a sauna, and a hot tub overlooking snow-capped peaks. World-class skiing, apres-ski dining, and breathtaking alpine scenery. Your ultimate winter mountain paradise awaits.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "verbier-gallery-1",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "verbier-gallery-2",
        url: "https://images.unsplash.com/photo-1551632440-da87d87e5e7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "verbier-gallery-3",
        url: "https://images.unsplash.com/photo-1533622735-9b6c8f39be28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "verbier-gallery-4",
        url: "https://images.unsplash.com/photo-1605616826944-6a7e58b71cfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "verbier-gallery-5",
        url: "https://images.unsplash.com/photo-1552821206-87d5f8b44e47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the ultimate African adventure at our luxury safari lodge in Serengeti National Park. Witness the Great Migration up close, encounter incredible wildlife including lions, elephants, and zebras. Features spacious suites with private terraces, gourmet dining, and guided game drives. An unforgettable journey into the heart of the African wilderness.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "serengeti-gallery-1",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "serengeti-gallery-2",
        url: "https://images.unsplash.com/photo-1516426122078-dd23ec0c8767?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "serengeti-gallery-3",
        url: "https://images.unsplash.com/photo-1531706066143-3267737556da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "serengeti-gallery-4",
        url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "serengeti-gallery-5",
        url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "serengeti-gallery-6",
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a beautifully preserved 17th-century canal house in Amsterdam's charming historic district. Features original wooden beams, large windows overlooking the scenic canal, 3 cozy bedrooms, and authentic Dutch architecture. Explore world-class museums, bike through scenic routes, and immerse yourself in Amsterdam's rich cultural heritage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "amsterdam-gallery-1",
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "amsterdam-gallery-2",
        url: "https://images.unsplash.com/photo-1537431326754-30df3d3e95e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "amsterdam-gallery-3",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "amsterdam-gallery-4",
        url: "https://images.unsplash.com/photo-1576374873900-1b8faa4a3c35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "amsterdam-gallery-5",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "amsterdam-gallery-6",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire private island to yourself for a truly exclusive and unforgettable experience in Fiji. Features a luxurious beachfront villa, pristine white-sand beaches, crystal-clear waters, and world-class snorkeling. Complete privacy, personalized service, and access to water sports. The ultimate tropical paradise for discerning travelers seeking ultimate seclusion.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "fiji-gallery-1",
        url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "fiji-gallery-2",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "fiji-gallery-3",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "fiji-gallery-4",
        url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "fiji-gallery-5",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a traditional thatched roof and honey-colored stone walls. Features 3 cozy bedrooms, a fireplace, and a private garden with countryside views. Explore charming villages, local pubs, rolling green hills, and experience quintessential English country living at its finest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "cotswolds-gallery-1",
        url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "cotswolds-gallery-2",
        url: "https://images.unsplash.com/photo-1585399781033-38841b28a801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "cotswolds-gallery-3",
        url: "https://images.unsplash.com/photo-1527004760902-337556481bca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "cotswolds-gallery-4",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "cotswolds-gallery-5",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "cotswolds-gallery-6",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone in Boston's charming Beacon Hill neighborhood. Features original hardwood floors, ornate fireplaces, exposed brick, and period architectural details. 4 spacious bedrooms with high ceilings and arched windows. Walk to the Freedom Trail, historic sites, and world-class museums. Experience authentic New England charm and history.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {filename: "boston-gallery-1", url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "boston-gallery-2", url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "boston-gallery-3", url: "https://images.unsplash.com/photo-1533090161692-a9ed275067e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "boston-gallery-4", url: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "boston-gallery-5", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "boston-gallery-6", url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"}
    ],
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the golden sandy shores of Bali in this beautiful beachfront bungalow with a private heated pool overlooking the ocean. Features tropical gardens, open-air bedroom, traditional Balinese architecture, and direct beach access. Enjoy stunning sunsets, spa treatments, water sports, and the vibrant Balinese culture. Your tropical paradise awaits.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "bali-gallery-1",
        url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "bali-gallery-2",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "bali-gallery-3",
        url: "https://images.unsplash.com/photo-1502793038519-3172cba999e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "bali-gallery-4",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "bali-gallery-5",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "bali-gallery-6",
        url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy log cabin in the heart of the Canadian Rockies near Banff National Park. Features 3 spacious bedrooms, a stone fireplace, a hot tub on the deck, and floor-to-ceiling windows framing stunning peaks. Perfect for hiking, wildlife viewing, and experiencing pristine alpine wilderness with world-class natural scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "banff-gallery-1",
        url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "banff-gallery-2",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "banff-gallery-3",
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "banff-gallery-4",
        url: "https://images.unsplash.com/photo-1542401886-65d27afda266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "banff-gallery-5",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamorous 1920s era in this beautifully restored Art Deco apartment in vibrant South Beach. Features original terrazzo floors, geometric tilework, neon signage, and pastel color palette. Direct beach access, ocean view balcony, rooftop bar access, and 2 spacious bedrooms. Walk to trendy restaurants, nightlife, and iconic Art Deco Historic District. Miami's golden era lives here.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {filename: "miami-gallery-1", url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "miami-gallery-2", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "miami-gallery-3", url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "miami-gallery-4", url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "miami-gallery-5", url: "https://images.unsplash.com/photo-1502793038519-3172cba999e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "miami-gallery-6", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"}
    ],
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool overlooking the Andaman Sea in Phuket. Features 4 lavish bedrooms, modern design, lush tropical gardens, and a private beach cove. Enjoy world-class spas, water sports, island-hopping adventures, and vibrant nightlife. The ultimate Southeast Asian luxury retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "phuket-gallery-1",
        url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "phuket-gallery-2",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "phuket-gallery-3",
        url: "https://images.unsplash.com/photo-1502793038519-3172cba999e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "phuket-gallery-4",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"      },
      {
        filename: "phuket-gallery-5",
        url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "phuket-gallery-6",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"      }
    ],
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this authentic historic castle in the Scottish Highlands, a magnificent 18th-century estate. Features 12 spacious rooms, grand ballrooms, a library, and stunning views of the rugged landscape. Explore ancient ruins, misty glens, and windswept moors. Experience true Scottish heritage and hospitality in this architectural masterpiece.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "scotland-gallery-1",
        url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "scotland-gallery-2",
        url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "scotland-gallery-3",
        url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "scotland-gallery-4",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "scotland-gallery-5",
        url: "https://images.unsplash.com/photo-1495562569060-2b5fde996017?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience opulent luxury in the heart of the Arabian Desert with this stunning oasis villa in Dubai. Features a private infinity pool, marble finishes, floor-to-ceiling windows, and breath-taking desert views. Enjoy world-class shopping, fine dining, water sports, and the cosmopolitan lifestyle Dubai is famous for. Luxury living at its finest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "dubai-gallery-1",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "dubai-gallery-2",
        url: "https://images.unsplash.com/photo-1551632440-da87d87e5e7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "dubai-gallery-3",
        url: "https://images.unsplash.com/photo-1511890519173-36b58f19d3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "dubai-gallery-4",
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "dubai-gallery-5",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this authentic log cabin nestled in Montana's pristine wilderness. Features hand-hewn logs, river-stone fireplace, wrap-around deck with mountain views, 3 bedrooms, and full kitchen. Perfect for fishing, hiking, wildlife viewing, and connecting with nature. Experience true frontier living with modern comfort in one of America's most beautiful states.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {filename: "montana-gallery-1", url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "montana-gallery-2", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "montana-gallery-3", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "montana-gallery-4", url: "https://images.unsplash.com/photo-1542401886-65d27afda266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "montana-gallery-5", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "montana-gallery-6", url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"}
    ],
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Immerse yourself in Mediterranean luxury in this stunning beachfront villa on the stunning island of Mykonos. Features direct beach access, infinity pool overlooking the Aegean Sea, traditional white and blue architecture, and 4 spacious bedrooms. Enjoy Greek island charm, vibrant nightlife, traditional taverns, and unforgettable sunsets over the sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "greece-gallery-1",
        url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "greece-gallery-2",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "greece-gallery-3",
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "greece-gallery-4",
        url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "greece-gallery-5",
        url: "https://images.unsplash.com/photo-1502793038519-3172cba999e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "greece-gallery-6",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in a sustainable eco-friendly treehouse nestled in the lush rainforest of Costa Rica, the perfect escape for nature lovers and eco-conscious travelers. Features solar power, natural materials, wildlife viewing platforms, and immersion in nature. Experience zip-lining, hiking, exotic wildlife, and pristine rainforest ecosystems while minimizing environmental impact.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "costarica-gallery-1",
        url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "costarica-gallery-2",
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "costarica-gallery-3",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "costarica-gallery-4",
        url: "https://images.unsplash.com/photo-1542401886-65d27afda266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "costarica-gallery-5",
        url: "https://images.unsplash.com/photo-1502793038519-3172cba999e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "costarica-gallery-6",
        url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      }
    ],
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience Southern charm and rich history in this beautifully restored 19th-century cottage in Charleston's historic district. Features original heart-pine floors, crown molding, working fireplaces, lush courtyard garden, and period-appropriate furnishings. 3 bedrooms with period charm. Walk to historic squares, waterfront, fine dining, and galleries showcasing Lowcountry heritage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {filename: "charleston-gallery-1", url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "charleston-gallery-2", url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "charleston-gallery-3", url: "https://images.unsplash.com/photo-1533090161692-a9ed275067e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "charleston-gallery-4", url: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "charleston-gallery-5", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "charleston-gallery-6", url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"}
    ],
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant, bustling city of Tokyo from this ultra-modern and centrally located apartment in the heart of Shibuya. Features contemporary design, high-speed internet, smart home technology, and panoramic city views. Experience cutting-edge Japanese culture, world-class dining, shopping, and entertainment while enjoying comfort and convenience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {
        filename: "tokyo-gallery-1",
        url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "tokyo-gallery-2",
        url: "https://images.unsplash.com/photo-1540959375944-7049f642e9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "tokyo-gallery-3",
        url: "https://images.unsplash.com/photo-1549144611-11653fac7a78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "tokyo-gallery-4",
        url: "https://images.unsplash.com/photo-1524634126288-bc4d9a4fed4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"      },
      {
        filename: "tokyo-gallery-5",
        url: "https://images.unsplash.com/photo-1522383150022-6f3ee90c336e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
      },
      {
        filename: "tokyo-gallery-6",
        url: "https://images.unsplash.com/photo-1537038221569-835657f07913?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"      }
    ],
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the serene lake in this cozy cabin nestled in New Hampshire's scenic White Mountains. Features 3 bedrooms, lake-view porch, stone fireplace, and direct sandy beach access. Perfect for swimming, boating, hiking alpine trails, and seasonal activities. Experience New England natural beauty with fall foliage, winter snow, and peaceful lakeside tranquility year-round.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {filename: "nh-gallery-1", url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "nh-gallery-2", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "nh-gallery-3", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "nh-gallery-4", url: "https://images.unsplash.com/photo-1542401886-65d27afda266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "nh-gallery-5", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "nh-gallery-6", url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"}
    ],
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in ultimate tropical luxury in this exclusive overwater villa in the Maldives. Features a private infinity pool, direct ocean access via glass floor panels for viewing tropical fish, open-air spa, and panoramic views of the Indian Ocean and coral reefs. 2 spacious suites with outdoor showers, gourmet dining, and butler service. The definition of paradise on earth.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    gallery: [
      {filename: "maldives-gallery-1", url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "maldives-gallery-2", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "maldives-gallery-3", url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "maldives-gallery-4", url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"},
      {filename: "maldives-gallery-5", url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"}
    ],
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };