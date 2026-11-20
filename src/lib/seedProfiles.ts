import { Profile } from '@/types';

export const INITIAL_PROFILES: Profile[] = [
  {
    id: 'prof-01',
    name: 'Ananya Sharma',
    age: 21,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Economics major surviving on iced Americanos and Taylor Swift bridge breakdowns. Probably running late, but with great playlist recommendations.',
    college: 'Lady Shri Ram College (LSR)',
    city: 'New Delhi',
    distanceKm: 3,
    interests: ['Indie Rock', 'Iced Coffee', 'Film Photography', 'Vinyl Records', 'Thrifting'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-02',
    name: 'Kabir Mehta',
    age: 22,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Building side projects no one asked for. Will challenge you to a tennis match and pretend I let you win. Big foodie, amateur pasta maker.',
    college: 'IIT Delhi',
    city: 'Hauz Khas, Delhi',
    distanceKm: 5,
    interests: ['Tennis', 'Startups', 'Italian Food', 'Sci-Fi Books', 'Podcasts'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-03',
    name: 'Rhea Sen',
    age: 20,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Literature student who romanticizes Delhi winters and bookstore dates. Tell me your comfort movie and let me overanalyze your personality.',
    college: 'St. Stephen\'s College',
    city: 'North Campus, Delhi',
    distanceKm: 8,
    interests: ['Bookstores', 'Poetry', 'Chai', 'Art Galleries', 'Museums'],
    hasLikedUser: false
  },
  {
    id: 'prof-04',
    name: 'Aarav Patel',
    age: 23,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Finance guy by day, guitar enthusiast by night. Always down for late-night drives to Murthal for parathas.',
    college: 'Shaheed Sukhdev (CBS)',
    city: 'Gurgaon',
    distanceKm: 12,
    interests: ['Acoustic Guitar', 'Late Night Drives', 'Stock Markets', 'Cycling', 'F1 Racing'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-05',
    name: 'Meera Nambiar',
    age: 21,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Architecture student passionate about urban sketching and cozy pottery cafes. Looking for someone to explore hidden monuments with.',
    college: 'School of Planning & Architecture (SPA)',
    city: 'Connaught Place, Delhi',
    distanceKm: 6,
    interests: ['Pottery', 'Sketching', 'Coffee Hopping', 'History Walks', 'Yoga'],
    hasLikedUser: false
  },
  {
    id: 'prof-06',
    name: 'Devansh Kulkarni',
    age: 22,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'CS student working on AI agents. When I am not debugging code, I am either playing badminton or brewing pour-over coffee.',
    college: 'IIIT Delhi',
    city: 'Okhla, Delhi',
    distanceKm: 9,
    interests: ['Badminton', 'AI Research', 'Specialty Coffee', 'Chess', 'Anime'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-07',
    name: 'Tara Mukherjee',
    age: 22,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Psychology student who can predict your red flags before you order appetizers. Sarcastic, dog lover, and 10/10 meme sender.',
    college: 'Miranda House',
    city: 'Civil Lines, Delhi',
    distanceKm: 7,
    interests: ['Psychology', 'Golden Retrievers', 'Standup Comedy', 'Sarcasm', 'Karaoke'],
    hasLikedUser: false
  },
  {
    id: 'prof-08',
    name: 'Rohan Varma',
    age: 23,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Product manager in making. Passionate about indie films, sourdough bread baking, and sunset runs at Lodhi Garden.',
    college: 'FMS Delhi',
    city: 'South Extension, Delhi',
    distanceKm: 4,
    interests: ['Indie Cinema', 'Running', 'Baking', 'Product Design', 'Rock Climbing'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-09',
    name: 'Zoya Qureshi',
    age: 21,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Fashion communication major at NIFT. Chronic over-dresser who treats grocery store runs like runway shows. Seeking aesthetic coffee dates.',
    college: 'NIFT Delhi',
    city: 'Hauz Khas Village, Delhi',
    distanceKm: 4,
    interests: ['Fashion', 'Styling', 'Matcha', 'Pop Culture', 'Vintage Cameras'],
    hasLikedUser: false
  },
  {
    id: 'prof-10',
    name: 'Aditya Chawla',
    age: 24,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Consultant on weekdays, EDM festival hopper on weekends. 200+ songs on my Spotify DJ queue. Will make you the best gin & tonic.',
    college: 'SRCC',
    city: 'Cyber Hub, Gurgaon',
    distanceKm: 14,
    interests: ['EDM', 'Cocktail Making', 'Gym', 'Travel', 'House Music'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-11',
    name: 'Simran Walia',
    age: 20,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Journalism student who will ask 50 questions on our first date. Big fan of street photography, spicy momos, and Fleabag.',
    college: 'KMC (Kirori Mal College)',
    city: 'North Campus, Delhi',
    distanceKm: 9,
    interests: ['Street Food', 'Journalism', 'Photography', 'Fleabag', 'Podcasts'],
    hasLikedUser: false
  },
  {
    id: 'prof-12',
    name: 'Armaan Singhania',
    age: 22,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Mechanical engineer building race cars for college Formula SAE. Looking for a co-pilot with great musical taste.',
    college: 'DTU (Delhi Technological University)',
    city: 'Rohini, Delhi',
    distanceKm: 15,
    interests: ['Motorsports', 'Mechanical Design', 'Classic Rock', 'Go-Karting', 'Gaming'],
    hasLikedUser: false
  },
  {
    id: 'prof-13',
    name: 'Kriti Kapoor',
    age: 21,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Studying mass media & cinema studies. Let us debate why 90s Bollywood music is unmatched while sharing cheese garlic bread.',
    college: 'Jesus & Mary College (JMC)',
    city: 'Chanakyapuri, Delhi',
    distanceKm: 5,
    interests: ['Bollywood Classics', 'Cinema', 'Garlic Bread', 'Blogging', 'Pilates'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-14',
    name: 'Vikramaditya Roy',
    age: 23,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'History enthusiast and debater. I can explain the fall of Constantinople or recommend the finest biryani spot in Old Delhi.',
    college: 'Hindu College',
    city: 'Civil Lines, Delhi',
    distanceKm: 8,
    interests: ['Debating', 'Historical Fiction', 'Biryani', 'Board Games', 'Jazz'],
    hasLikedUser: false
  },
  {
    id: 'prof-15',
    name: 'Avani Joshi',
    age: 22,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Environmental science student working on sustainable agriculture. Plant mom to 14 succulents. Tea over coffee any day!',
    college: 'TERI School of Advanced Studies',
    city: 'Vasant Kunj, Delhi',
    distanceKm: 6,
    interests: ['Plant Care', 'Sustainability', 'Hiking', 'Herbal Tea', 'Thrift Shopping'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-16',
    name: 'Ishaan Chopra',
    age: 21,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Design student obsessed with typography and minimalism. Fluent in sarcasm and Hindi punchlines. Looking for a thrifting partner.',
    college: 'UID (Unitedworld Institute of Design)',
    city: 'Saket, Delhi',
    distanceKm: 4,
    interests: ['Typography', 'Streetwear', 'Graphic Design', 'Hip Hop', 'Skateboarding'],
    hasLikedUser: false
  },
  {
    id: 'prof-17',
    name: 'Nisha Bhatia',
    age: 23,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Law student by daylight, baker on weekends. If we match, you automatically get fresh chocolate chip cookies on our second date.',
    college: 'Faculty of Law, DU',
    city: 'North Campus, Delhi',
    distanceKm: 8,
    interests: ['Baking', 'Legal Tech', 'True Crime', 'Cookies', 'Sunset Watching'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-18',
    name: 'Tanmay Saxena',
    age: 22,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Data scientist who loves mountain treks and campfire acoustic jams. Looking for someone who doesn’t mind silence and starry skies.',
    college: 'Ashoka University',
    city: 'Sonipat / Delhi NCR',
    distanceKm: 18,
    interests: ['Trekking', 'Campfires', 'Acoustic Songs', 'Astrophotography', 'Machine Learning'],
    hasLikedUser: false
  },
  {
    id: 'prof-19',
    name: 'Pooja Iyer',
    age: 21,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Classical Carnatic singer who also vibes to Drake. Samosas, good company, and long conversations about philosophy are my weakness.',
    college: 'Gargi College',
    city: 'Siri Fort, Delhi',
    distanceKm: 5,
    interests: ['Singing', 'Philosophy', 'Classical Music', 'Street Photography', 'Catan'],
    hasLikedUser: false
  },
  {
    id: 'prof-20',
    name: 'Dhruv Malhotra',
    age: 23,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Commercial pilot trainee. Will fly you to Goa if you can handle my dad jokes. Enthusiastic about scuba diving and retro anime.',
    college: 'Indira Gandhi Rashtriya Uran Akademi',
    city: 'Aerocity, Delhi',
    distanceKm: 10,
    interests: ['Aviation', 'Scuba Diving', 'Dad Jokes', 'Anime', 'Fitness'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-21',
    name: 'Sneha Rao',
    age: 22,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Biochem student exploring molecular gastronomy. Let us cook unusual recipes together or just order sushi when it inevitably fails.',
    college: 'Sri Venkateswara College (Venky)',
    city: 'South Campus, Delhi',
    distanceKm: 6,
    interests: ['Cooking Experiments', 'Sushi', 'Biohacking', 'Board Games', 'Tennis'],
    hasLikedUser: false
  },
  {
    id: 'prof-22',
    name: 'Sameer Sheikh',
    age: 24,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Brand strategist at an ad agency. I collect vinyl records, vintage posters, and useless trivia. Best coffee shop companion you will find.',
    college: 'MICA / Jamia Millia',
    city: 'Greater Kailash, Delhi',
    distanceKm: 4,
    interests: ['Advertising', 'Vinyl Records', 'Coffee Crawls', 'Trivia Nights', 'Bossa Nova'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-23',
    name: 'Diya Rastogi',
    age: 20,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Math honors student who loves solving cryptic crosswords and playing badminton on Sunday mornings. Easily bribed with waffles.',
    college: 'Hansraj College',
    city: 'Kamla Nagar, Delhi',
    distanceKm: 8,
    interests: ['Crosswords', 'Badminton', 'Belgian Waffles', 'Math Riddles', 'Watercolor'],
    hasLikedUser: false
  },
  {
    id: 'prof-24',
    name: 'Aryan Aggarwal',
    age: 22,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Fintech builder & crypto sceptic. Gym 5 days a week, street food the remaining 2. Seeking genuine connection and mutual banter.',
    college: 'BITS Pilani',
    city: 'Golf Course Road, Gurgaon',
    distanceKm: 13,
    interests: ['Fintech', 'Weightlifting', 'Banter', 'Sourdough', 'Spiritual Podcasts'],
    hasLikedUser: false
  },
  {
    id: 'prof-25',
    name: 'Natasha Fernandez',
    age: 21,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Goa native living in Delhi. Missing the ocean breeze, so I compensate by buying houseplants. Love indie pop concerts & sunsets.',
    college: 'Amity University',
    city: 'Noida / South Delhi',
    distanceKm: 11,
    interests: ['Live Concerts', 'Beaches', 'House Plants', 'Indie Pop', 'Baking'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-26',
    name: 'Raghav Khanna',
    age: 23,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Filmmaker and documentarian. Let us make an impromptu short film or drive to Humayun’s Tomb for golden hour photography.',
    college: 'AJK MCRC, Jamia',
    city: 'Friends Colony, Delhi',
    distanceKm: 7,
    interests: ['Cinematography', 'Golden Hour', 'Docuseries', 'Jazz Bars', 'Old Delhi'],
    hasLikedUser: false
  },
  {
    id: 'prof-27',
    name: 'Mallika Bose',
    age: 22,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Graphic novelist and coffee fanatic. I will draw doodles on your napkin while we talk about our favorite animated movies.',
    college: 'College of Art, Delhi',
    city: 'Mandi House, Delhi',
    distanceKm: 5,
    interests: ['Illustration', 'Graphic Novels', 'Espresso', 'Studio Ghibli', 'Thrifting'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-28',
    name: 'Kunal Singhal',
    age: 23,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Software engineer building web3 apps. Marathon runner, mechanical keyboard builder, and enthusiast of spicy street chaat.',
    college: 'NSUT (Netaji Subhas)',
    city: 'Dwarka, Delhi',
    distanceKm: 12,
    interests: ['Marathon', 'Keyboards', 'Chaat', 'Open Source', 'Cycling'],
    hasLikedUser: false
  },
  {
    id: 'prof-29',
    name: 'Anwita Deshmukh',
    age: 21,
    gender: 'female',
    photos: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Sociology student fascinated by human relationships and internet subcultures. Looking for great banter and someone who reads.',
    college: 'Delhi School of Economics (DSE)',
    city: 'North Campus, Delhi',
    distanceKm: 9,
    interests: ['Sociology', 'Internet Culture', 'Books', 'Chai Stalls', 'Museums'],
    hasLikedUser: true // Mutual match trigger
  },
  {
    id: 'prof-30',
    name: 'Siddharth Trivedi',
    age: 24,
    gender: 'male',
    photos: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80'
    ],
    bio: 'Corporate lawyer by day, stand-up comedy open-micer on weekends. Will test my latest 5-minute set on you. No refunds.',
    college: 'NLU Delhi',
    city: 'Sector 54, Gurgaon',
    distanceKm: 15,
    interests: ['Stand-Up Comedy', 'Improv', 'Law', 'Vinyls', 'Craft Beer'],
    hasLikedUser: true // Mutual match trigger
  }
];
