/*  POSSIBLE CAMPAIGN CONTENT TYPES
    title
    text
    title_and_text
    image
    video
*/
const projects = [
  {
    clientName: "Firefly",
    saySomething: "Equitable", 
    description: "The Firefly approach to care is more personalized, more convenient and, ultimately, far more effective than the care most of us are used to. We said, “Sounds like your patients get the same treatment rich folks do.” Within one week of running our campaign, sign ups skyrocketed beyond anything seen in the company's history.",
    folderName: "firefly",
    hero: "",
    metaFooter: [
      "Strategy",
      "Advertising",
      "Creative Development",
      "Video Production",
    ],
    awards: [],
    content: [
      {
        title: "Rich Jerk",
        type: "video",
        src: "https://player.vimeo.com/video/811068704",
      },
      {
        type: "image",
        src: "firefly_ooh_1.jpg",
      },
      {
        title: "Privilege",
        type: "video",
        src: "https://player.vimeo.com/video/811091134",
      },
      {
        type: "image",
        src: "firefly_transit_1.jpg",
      },
      {
        title: "High Society",
        type: "video",
        src: "https://player.vimeo.com/video/811077476",
      },
      {
        type: "image",
        src: [
          "firefly_square_ad_1.jpg",
          "firefly_iphone_1.jpg",
        ]
      },
      {
        title: "Rockstar",
        type: "video",
        src: "https://player.vimeo.com/video/811068519",
      },  
      {
        type: "image",
        src: "firefly_ooh_2.jpg",
      },
    ],
  },
  {
    clientName: "The Big Plan",
    saySomething: "Brainy",
    description: "It’s a new AI platform promising to serve up the ideal health insurance plan in just minutes, based on realtime marketplace data. In other words, a solution to the biggest headaches in health insurance. It was our job to give this remarkable company the brand name, identity and messaging it deserved. We said, “A big change requires a big plan.” Funding goals were met quickly. Very, very quickly.",
    folderName: "thebigplan",
    hero: "",
    metaFooter: [
      "Strategy",
      "Positioning",
      "Logo",
      "ID System",
      "Brand Messaging",
      "UX",
      "Website Servces",
      "Copywriting",
      "Interim CMO Services",
    ],
    awards: [],
    content: [
      {
        type: "video",
        autoplay: true,
        title: "web",
        src: "https://player.vimeo.com/video/745540735",
      },
      {
        type: "image",
        src: "header_image.jpg",
      },
      {
        type: "image",
        src: ["mobile_animation.gif","squirrel_headgear.gif"],
      },
      {
        type: "image",
        src: "headline_3.jpg",
      },
      {
        type: "image",
        src: ["illustrations.gif","tshirt.jpg"],
      },
      {
        type: "image",
        src: "businesscards.jpg",
      },
      {
        type: "image",
        src: ["instagram_headline_3.gif","headline_2.jpg"],
      },
    ],
  },
  {
    clientName: "Quil",
    saySomething: "Liberating",
    description: "For seniors who value privacy and freedom, home monitoring can be tough to swallow. To launch Quil, we flipped the script and put seniors in control. Their message to caregivers was clear. “Look after us without being on top of us.” “Stay in our lives and out of our hair.” Quit hoverin’ and start Quillin’. Our goals were reached 2X faster than expected and 60% under cost benchmarks.",
    folderName: "quil",
    hero: "pool_lady.jpg",
    metaFooter: [
      "Strategy",
      "Positioning",
      "ID System Design",
      "Brand Messaging",
      "Package Design",
      "Interim CMO",
      "Creative Development",
      "Web Design & Development",
      "Social Media",
      "Film Direction",
      "Video Production",
      "Social Media",
      "Email Campaigns",
      "Performance Marketing",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "quil_newspaper.png",
      },
      {
        title: "Hoverin",
        type: "video",
        src: "https://player.vimeo.com/video/653972055",
      },
      {
        type: "image",
        src: [
          "quil_social_2.jpg",
          "quil_social_12.jpg",
          "quil_social_1.jpg",
        ]
      },
      {
        type: "image",
        src: [
          "quil_social_10.jpg",
          "quil_social_3.jpg",
          "quil_social_11.jpg",
        ]
      },  
      {
        title: "Wine",
        type: "video",
        src: "https://player.vimeo.com/video/653971016",
      },
      {
        title: "Meds",
        type: "video",
        src: "https://player.vimeo.com/video/653972188",
      },
      {
        type: "image",
        src: "laptop_image.jpg",
      },
      {
        type: "image",
        src: [
          "quil_social_9.jpg",
          "quil_social_7.jpg",
          "quil_social_8.jpg",
        ]
      },
      {
        type: "image",
        src: [
          "quil_social_4.jpg",
          "quil_social_6.jpg",
          "quil_social_5.jpg",
        ]
      },
      {
        title: "Product",
        type: "video",
        src: "https://player.vimeo.com/video/729327499",
      },
    ],
  },
  {
    clientName: "Face The Music",
    saySomething: "Heartbreaking",
    description: "WARNING: “I Got This” isn’t easy viewing. The video was created to raise awareness for Face The Music, a non-profit that provides recovery program scholarships for those in need. Before any media dollars were spent, “I Got This” got this: An article in Billboard, Adweek, Adage, Shots, Shoot and the Fix. It was a Creativity Editor’s Pick and was shared by Maroon 5, Flo-Rida, Ink and Richie Sambora. “I Got This” also scored awards from AICP and One Show.",
    folderName: "face_the_music",
    hero: "",
    metaFooter: [
      "Brand Messaging","Script Writing","Production And Post Production","Digital & Media Strategy",
    ],
    awards: [
      "2018 One Show pencil",
      "2018 AICP winner",
      "2018 Webby Award",
    ],
    content: [
      {
        title: "I got this",
        type: "video",
        src: "https://player.vimeo.com/video/236263407",
      },
    ],
  },
  {
    clientName: "MeWe",
    saySomething: "Do-Gooder",
    description: "Can one product save millions abroad while serving the unique needs of people here at home? Our friend, Navyn Salem, was determined to find out. We created MeWe, the non-profit brand of nut butter that’s good for me and good for we. MeWe quickly secured major retail distribution and began a successful partnership with Chobani within just months of launch.",
    folderName: "mewe",
    hero: "pattern_1.jpg",
    metaFooter: [
      "Strategy",
      "Positioning",
      "Naming",
      "Logo",
      "Id System",
      "Brand Messaging",
      "Package Design",
      "Creative Development",
      "E-Commerce Website",
      "Direct Mail",
      "PR Kit",
      "Social Content",
      "Investor Materials",
      "Trade Show Booths",
    ],
    awards: [],
    content: [
      {
        type: "slideshow",
        src: [
          "logo_2.jpg",
          "logo_3.jpg",
          "logo_4.jpg",
          "logo_5.jpg",
          "logo_6.jpg",
          "logo_7.jpg",
        ]
      },
      {
        type: "image",
        src: [
          "package_1.jpg",
          "package_2.jpg",
          "package_3.jpg",
        ]
      },
      {
        type: "image",
        src: [
          "package_4.jpg",
          "package_5.jpg",
          "package_6.jpg",
        ]
      },
      {
        type: "image",
        src: "print_1.jpg"
      },
      {
        type: "image",
        src: [
          "instagram_1.jpg",
          "instagram_2.jpg",
          "instagram_3.jpg",
        ],
      },
      {
        type: "image",
        src: [
          "instagram_4.jpg",
          "instagram_5.jpg",
          "instagram_6.jpg",
        ]
      },
      {
        type: "image",
        src: [
          "instagram_7.jpg",
          "instagram_8.jpg",
          "instagram_9.jpg",
        ]
      }, 
    ],
  },
  {
    clientName: "Binx",
    saySomething: "Provocative",
    description: "For most college student, STI testing is a regret and fear based ritual. Something done after sex. We saw an opportunity to change that. With STIs at an all time high on campuses, we positioned Binx as a pre-sex, hygiene ritual. An at-home test to help you put a little clean in your dirty.",
    folderName: "binx",
    hero: "bus_shelter_1.jpg",
    metaFooter: [
      "Strategy & Positioning",
      "Brand Messaging",
      "Id System Design",
      "Campaign Development",
      "Video & Post Production",
      "Directing",
      "Out Of Home",
      "Social Content",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "wild_postings_1.jpg",
      },
      {
        type: "image",
        src: ["poster_1.jpg","poster_2.jpg"],
      },
      {
        type: "image",
        src: "bus_shelter_2.jpg",
      },
      {
        type: "image",
        src: ["sock_front_1.jpg","sock_back_1.jpg"],
      },
      {
        type: "image",
        src: "instagram_grid_1.png",
      },
    ],
  },
  {
    clientName: "DocGo",
    saySomething: "On-the-Go",
    description: "As the COVID-19 pandemic raged on, one company was quickly mobilizing to bring testing and vaccines to the masses. This would be the first time people knew the name DocGo. We wanted to make sure itwouldn’t be the last. We set out to make the brand instantly recognizable by giving the company the brand awareness it so richly deserved.",
    folderName: "docgo",
    hero: "",
    metaFooter: [
      "Strategy",
      "Positioning",
      "Logo",
      "ID System",
      "Brand Messaging",
      "Vehicle Design",
      "Web Design & Development",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "docgo_header.jpg",
      },
      {
        type: "image",
        src: "docgo_logo_2.jpg ",
      },
      {
        type: "image",
        src: ["docgo_image_1.jpg","docgo_logo_1.jpg"],
      },
      {
        type: "image",
        src: ["docgo_animation_3.gif","docgo_tag.jpg"],
      },
      {
        type: "image",
        src: "docgo_web_1.jpg",
      },
      {
        type: "image",
        src: "docgo_animation_4.gif",
      },
      {
        type: "image",
        src: ["docgo_web_2.jpg","docgo_animation_1.gif"],
      },
      {
        type: "image",
        src: ["docgo_image_3.jpg","docgo_image_2.jpg"],
      },
      {
        type: "image",
        src: "docgo_van.jpg",
      },
    ],
  },
  {
    clientName: "Metlife",
    saySomething: "Everybody's",
    description: "For a spot on the big game, MetLife gave us four days to concept, four weeks for production and sixty seconds to win America’s heart. Pre-launched on Mashable, “Anthem” was shared 92K times in under 48 hours. The NY Times called it, “charming,” Business Insider called it, “Everything that’s good about America,” and the incumbent agency called it, a violation of our non-compete ; ).",
    folderName: "metlife_2",
    hero: "",
    metaFooter: [
      "Brand Messaging",
      "Creative Development",
      "Production And Post Production",
    ],
    awards: [],
    content: [
      {
        title: "Superbowl Anthem:",
        type: "video",
        src: "https://player.vimeo.com/video/96031163",
      },
    ],
  },
  {
    clientName: "Elmhurst",
    saySomething: "Competitive",
    description: "At nearly seven bucks a carton, Elmhurst didn’t have the price advantages of its competitors. Then again, the product didn’t have other things either, like gums, oils and additives. In a culture of sustainability, transparency and dietary consciousness, it was time people knew why simpler truly was better. During our campaign’s run, the company saw a 70% lift in sales.",
    folderName: "elmhurst",
    hero: "ooh_1.jpg",
    metaFooter: [
      "Strategy",
      "Positioning",
      "Brand Messaging",
      "Creative Development",
      "Video & Post Production"
    ],
    awards: [],
    content: [
      {
        title: "Wow",
        type: "video",
        src: "https://player.vimeo.com/video/402200729",
      },
      {
        title: "1925",
        type: "video",
        src: "https://player.vimeo.com/video/402204658",
      },
      {
        title: "Nuts",
        type: "video",
        src: "https://player.vimeo.com/video/405134581",
      },
      {
        type: "image",
        src: "ooh_2.jpg",
      },
      {
        type: "image",
        src: [
          "poster_1.jpg",
          "poster_2.jpg",
        ]
      },
      {
        type: "image",
        src: "ooh_3.jpg",
      },
      {
        type: "image",
        src: "bus_shelter_1.jpg",
      },
    ],
  },
  {
    clientName: "Athenahealth",
    saySomething: "Cynical",
    description: "Electronic health records (EHRs) aren’t exactly user friendly. While Athenahealth was helping to solve for that, they understood that a little empathy meant more to frustrated physicians than empty promises. We created “Let doctors be doctors.” An activism campaign that was heralded as a major leap forward for healthcare marketing and led to amazing growth in brand health, awareness and favorability.",
    folderName: "athenahealth",
    hero: "",
    metaFooter: [
      "Strategy",
      "Positioning",
      "Id System Design",
      "Brand Messaging",
      "Creative Development",
      "Websites",
      "Direct Mail",
      "Film Direction",
      "Video & Post Production",
      "Trade Show Booth",
      "Content Creation",
    ],
    awards: [],
    content: [
      {
        title: "Surgery",
        type: "video",
        src: "https://player.vimeo.com/video/141049242",
      },
      {
        title: "Cafeteria",
        type: "video",
        src: "https://player.vimeo.com/video/143286300",
      },
      {
        title: "Communication",
        type: "video",
        src: "https://player.vimeo.com/video/156785219",
      },
      {
        title: "Testimonial",
        type: "video",
        src: "https://player.vimeo.com/video/156785218",
      },
      {
        title: "Computer",
        type: "video",
        src: "https://player.vimeo.com/video/141048854",
      },
      {
        title: "Dr. Strings “Intro”",
        type: "video",
        src: "https://player.vimeo.com/video/156785227",
      },
      {
        title: "Dr. Strings “Exam”",
        type: "video",
        src: "https://player.vimeo.com/video/157173208",
      },
      {
        title: "Dr. Strings “Charts”",
        type: "video",
        src: "https://player.vimeo.com/video/156785230",
      },
      {
        title: "Case study",
        type: "video",
        src: "https://player.vimeo.com/video/166037492",
      },
    ],
  },
  {
    clientName: "Together Labs",
    saySomething: "Virtual",
    description: "With the promise of the Metaverse, crypto and NFTs looming large, the wildly popular avatar platform, IMVU, was looking to expand its horizons with an umbrella company called Together Labs. We created the identity, messaging and, given that Together Labs just made Time’s “100 Most Influential Companies”, quite possibly a monster.",
    folderName: "together",
    hero: "",
    metaFooter: [
      "Logo",
      "ID System",
      "Web Design",
      "Video & Post Production",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "together_header.jpg",
      },
      {
        type: "image",
        src: "together_logo.jpg",
      },
      {
        type: "image",
        src: "together_animation_1.gif",
      },
      {
        type: "image",
        src: ["together_pattern.jpg","together_withme.jpg"],
      },
      {
        type: "image",
        src: ["together_imvu1.jpg","together_animation_2.gif"],
      },
      {
        type: "image",
        src: ["together_tag.jpg","together_imvu2.jpg"],
      },
      {
        title: "Escape",
        type: "video",
        src: "https://player.vimeo.com/video/523408070",
      },
    ],
  },
  {
    clientName: "Nickel",
    saySomething: "Patriotic",
    description: "Our client came to us with an idea to make healthcare attainable by making it affordable. We named them Nickel. Our branding idea was simple. Put people ahead of profits. No greed. No confusion. No Americans paying the price for an industry that’s lost its way. We introduced healthcare that costs what healthcare should cost. Not a nickel more.",
    folderName: "nickel",
    hero: "ooh_1.jpg",
    metaFooter: [
      "Strategy",
      "Naming",
      "Positioning",
      "Brand Platform",
      "Logo & Brand Id",
      "Creative Development",
      "Social Content",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "logos_1.jpg",
      },
      {
        type: "image",
        src: "duratrans_1.jpg",
      },
      {
        type: "image",
        src: ["poster_2.jpg","poster_1.jpg"],
      },
      {
        type: "image",
        src: "ooh_2.jpg",
      },
      {
        type: "image",
        src: "business_cards_1.jpg",
      },
    ],
  },
  {
    clientName: "Say & Company",
    saySomething: "Outspoken",
    description: "With client business largely on hold during the COVID-19 crisis, we took the chance to create a business of our own: Say & Company, a utility apparel brand designed to spread messages that are important to us all. We aimed to do that with clarity, sincerity, cool hats and a simple mission to improve life on earth. It began with the 6ft Away shirt, an anti-social fashion statement for the whole family.",
    folderName: "say",
    hero: "say_hero.jpg",
    metaFooter: [
      "Naming","Logo","Id System Design","Brand Messaging","Go To Market Strategy","Creative Development","<nobr>E-Commerce</nobr> Website","Social Media Management",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "say_1.jpg",
      },
      {
        type: "image",
        src: ["say_2.jpg","say_3.jpg","say_4.jpg"],
      },
      {
        type: "image",
        src: ["say_5.jpg","say_6.jpg","say_7.jpg"],
      },
      {
        type: "image",
        src: "say_8.jpg",
      },
      {
        type: "image",
        src: ["say_9.jpg","say_10.jpg","say_11.jpg"],
      },
      {
        type: "image",
        src: ["say_12.jpg","say_13.jpg","say_14.jpg"],
      },
      {
        type: "image",
        src: "say_15.jpg",
      },
    ],
  },
  {
    clientName: "Superblue",
    saySomething: "Inclusive",
    description: "It was a revolutionary idea from Pace Galleries. An art exhibit so immersive, you could sell tickets. Our job was to help people people see they were more than just guests. They were collaborators – helping to redefine the way artwork can work. We said, “Welcome to Superblue, the art movement that moves you.”",
    folderName: "superblue",
    hero: "",
    metaFooter: [
      "Strategy",
      "Positioning",
      "Brand Messaging",
      "Creative Development",
      "Film Direction",
      "Video & Post Production",
      "Print Production",
      "Web Design & Development",
    ],
    awards: [],
    content: [
      {
        title: "Teaser",
        type: "video",
        src: "https://player.vimeo.com/video/515972251",
      },
      {
        type: "image",
        src: "teaser_1.jpg",
      },
      {
        type: "image",
        src: "superblue_ooh_1.jpg",
      },
      {
        type: "image",
        src: "superblue_ooh_2.jpg",
      },
      {
        title: "Sizzle",
        type: "video",
        src: "https://player.vimeo.com/video/465207471",
      },
    ],
  },
  {
    clientName: "Hanes | 360i",
    saySomething: "Chill",
    folderName: "hanes",
    hero: "",
    description: "We jumped at the chance to direct this ambitious interactive mobile experience for Hanes and 360i. The choose-your-adventure game let you walk in Michael’s sizable shoes – earning points for being as chill as the legend himself. The effort was featured in Creativity, USA Today, SmartBrief and Printwear.",
    metaFooter: [
      "Film Direction",
    ],
    content: [ 
      {
        type: "video",
        title: "Hanes Interactive Film",
        src: "https://player.vimeo.com/video/251409418",
      }
    ]
  },
  {
    clientName: "Wishclouds",
    saySomething: "Enviable",
    description: "Our friend at Wishclouds said, “We need to go viral.” He was right. With sale alert sites hitting their peak, the pressure was on for the Wishclouds app to break through with a small budget. “Jane” quickly racked up 2.5M views on Youtube, appearing in Campaign, Adage, Shots, Archive, Creativity, Best Ads on TV and countless blogs. Hmm… maybe there was something right about Jane.",
    folderName: "wishclouds",
    hero: "",
    metaFooter: [
      "Creative Development",
      "Film Direction",
      "Video & Post Production",
      "Influencer Content",
    ],
    awards: [],
    content: [
      {
        title: "Jane:",
        type: "video",
        src: "https://player.vimeo.com/video/340950970",
      },
    ],
  },
  {
    clientName: "Tripadvisor",
    saySomething: "Trustworthy",
    description: "We had two questions to answer. One, what do reviews on TripAdvisor really mean? And two, why even do a brand campaign? We started by declaring TripAdvisor the people’s travel site. Our campaign theme, “Every experience counts,” quickly became a company trademark as the campaign far exceeded expectations – leading to more production and global media spending.",
    folderName: "tripadvisor",
    hero: "",
    metaFooter: [
      "Strategy","Positioning","Brand Messaging","Creative Development","Video & Post Production",
    ],
    awards: [],
    content: [
      {
        title: "Vacation",
        type: "video",
        src: "https://player.vimeo.com/video/175623924",
      },
      {
        title: "Toothpaste",
        type: "video",
        src: "https://player.vimeo.com/video/175634719",
      },
      {
        title: "Pool",
        type: "video",
        src: "https://player.vimeo.com/video/175623922",
      },
    ],
  },
  {
    clientName: "Big Oil Big Lies",
    saySomething: "Dishonest",
    description: "With so much misinformation out there, it’s harder than ever to know who to trust when it comes to climate change. So we decided to bring a little bullshit of our own and, in doing so, helped course correct the narrative. We started with a few words from Meryl Streep, Leonardo DiCaprio and The Rock. Kind of.",
    folderName: "bigoilbiglies",
    hero: "",
    metaFooter: [
      "Brand Messaging",
      "Creative Development",
      "Video & Post Production",
    ],
    awards: [],
    content: [
      {
        title: "Dwayne",
        type: "video",
        src: "https://player.vimeo.com/video/539171279",
      },
      {
        title: "Meryl",
        type: "video",
        src: "https://player.vimeo.com/video/539171640",
      },
      {
        title: "Leo",
        type: "video",
        src: "https://player.vimeo.com/video/539171430",
      },
    ],
  },
  {
    clientName: "Well",
    saySomething: "Healthy",
    description: "There’s nothing more important than your health, right? Seems somebody forgot to tell that to the American healthcare industry, where today’s systems are more focused on process than patients. Along comes Well. A dynamic platform to provide personalized guidance and keep every member well motivated, well organized and well cared for. Well, well, well.",
    folderName: "well",
    hero: "",
    metaFooter: [
      "Strategy",
      "Positioning",
      "ID System",
      "Brand Messaging",
      "UX",
      "Web Design & Development",
      "Copywriting",
    ],
    awards: [],
    content: [
      {
        type: "video",
        autoplay: true,
        title: "web",
        src: "https://player.vimeo.com/video/744437510",
      },
      {
        type: "image",
        src: ["wellmobile3.jpg","wellmobile2.jpg"],
      },
      {
        type: "image",
        src: ["wellmobile1.jpg","wellmobile4.jpg"],
      },
    ],
  },  
  {
    clientName: "Propshop",
    saySomething: "Betting",
    description: "They say the house always wins, but don’t be so sure about that. Propshop is the sports betting app that advantages you, the user. It’s more immersive, more social and way more fun than those larger sports betting platforms. How do we know? For starters, we had a ton of fun working on it. Full experience launching soon.",
    folderName: "propshop",
    hero: "",
    metaFooter: [
      "Strategy",
      "Positioning",
      "Logo",
      "ID System",
      "Brand Messaging",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "big_logo.jpg",
      },
      {
        type: "image",
        src: ["logo_animation.gif","phone.jpg"],
      },
      {
        type: "image",
        src: "onestopshop.jpg",
      },
      {
        type: "image",
        src: "business_cards_1.jpg",
      },
      {
        type: "image",
        src: ["cup.jpg","tshirt_animation_1.gif"],
      },
      {
        type: "image",
        src: ["seewhatpropsup.jpg","foamfinger.jpg"],
      },
    ],
  },
  {
    clientName: "Modivcare",
    saySomething: "Reliable",
    description: "The nearly 30,000 person company had just gone through a rebranding only six month earlier. As our first order of business, we were asked to create a new logo, ID system and brand platform that showed the strength and stability of a company committed to doing genuine good in the world. We decided to relaunch Modivcare with a bang instead of a whisper.",
    folderName: "modivcare",
    hero: "",
    metaFooter: [
      "Strategy",
      "Postioning",
      "Logo",
      "ID System",
      "Brand Messaging",
      "Creative Development",
      "Web Design",
      "Collateral Design",
      "Social Media",
      "Video Production",
      "Content Creation",
    ],
    awards: [],
    content: [
      {
        title: "ItsTime",
        type: "video",
        src: "https://player.vimeo.com/video/622742093",
      },
      {
        type: "image",
        src: "modivcare_logo.jpg",
      },
      {
        type: "image",
        src: ["modivcare_roadlogo.jpg","modivcare_pattern_1.jpg"],
      },
      {
        type: "image",
        src: ["modivcare_tag.jpg","modivcare_animation_3.gif"],
      },
      {
        type: "image",
        src: "modivcare_pattern_2.jpg",
      },
      {
        type: "image",
        src: ["modivcare_animation_1.gif","modivcare_pencils.jpg"],
      },
      {
        type: "image",
        src: "modivcare_web.jpg",
      },
    ],
  },
  {
    clientName: "Recovery Unplugged",
    saySomething: "Musical",
    description: "Our dear friend, Recovery Unplugged CEO Andew Sossin said, “We want to create a national chain of rehab centers that will help save thousands of lives each year through the power of music.” The idea seemed a little crazy at first. That’s why we liked it. Turns out, music can save your mortal soul. So we asked a simple question of those coping with the complicated issues of addiction: What track are you on?",
    folderName: "recovery_unplugged",
    hero: "recovery_unplugged_busshelter_1.jpg",
    metaFooter: [
      "Strategy",
      "Positioning",
      "Id System Design",
      "Brand Messaging",
      "Creative Development",
      "Website",
      "Investor Materials",
      "Content Creation",
      "Video & Post Production",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "recovery_unplugged_spread_1.jpg",
      },
      {
        type: "image",
        src: "recovery_unplugged_spread_3.jpg",
      },
      {
        type: "image",
        src: "recovery_unplugged_magazine_1.jpg",
      },
      {
        type: "image",
        src: ["recovery_unplugged_print_1.jpg","recovery_unplugged_print_2.jpg"],
      },
      {
        type: "image",
        src: "recovery_unplugged_spread_2.jpg",
      },
      {
        type: "image",
        src: ["recovery_unplugged_print_3.jpg","recovery_unplugged_print_4.jpg"],
      },
      {
        type: "image",
        src: "recovery_unplugged_mug_1.jpg",
      },
      {
        type: "image",
        src: ["recovery_unplugged_logo_1.jpg","recovery_unplugged_logo_2.jpg"],
      },
    ],
  },
  {
    clientName: "Buoy",
    saySomething: "Instructive",
    description: "Buoy is a thoughtful company filled with energetic, brilliant people. Yet for those headed back to work, the name Buoy was nothing more than a mandatory daily online COVID test nobody wanted to take. Our campaign aimed to give Buoy a more likable voice in the workplace – offering advice in case of contact with objects, food or the dude at the adjacent urinal who just tinkled on your leg.",
    folderName: "buoy",
    hero: "copy_room_1.jpg",
    metaFooter: [
      "Strategy",
      "Creative Development",
      "Video, Post & Print Production",
      "Social Content",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: ["poster_1.jpg","poster_2.jpg"],
      },
      {
        type: "image",
        src: "doorhanger_1.jpg",
      },
      {
        type: "image",
        src: ["poster_3.jpg","poster_4.jpg"],
      },
      {
        type: "image",
        src: "urinals_1.jpg",
      },
      {
        type: "image",
        src: ["poster_5.jpg","poster_6.jpg"],
      },
    ],
  },
  {
    clientName: "Thindown",
    saySomething: "Fashionable",
    description: "Thin is in, and the demand for down has never been greater. Yet the process of working with down is as complicated as ever. Thindown had a better idea. Sustainable. Efficient. Easy to use. A way to make down as form-fitting as nature intended. It was time to put the age-old inefficiencies to rest. We introduced the world’s first down fabric. Since the, Thindown been used by countless high end fashion brands you know.",
    folderName: "thindown",
    hero: "header_1.jpg",
    metaFooter: [
      "Strategy",
      "Positioning",
      "Id System Design",
      "Brand Messaging",
      "Creative Development",
      "Website",
      "Video & Post Production",
      "Investor Materials",
      "Content Production",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "logos_1.jpg",
      },
      {
        type: "video",
        autoplay: true,
        title: "man",
        src: "https://player.vimeo.com/video/448925255",
      },
      {
        type: "image",
        src: ["hangtag_1.jpg", "headline_1.jpg"],
      },
      {
        type: "image",
        src: ["fluff_1.jpg", "model_1.jpg"],
      },
      {
        type: "image",
        src: ["headline_2.jpg", "hanger_1.jpg"],
      },
      {
        type: "image",
        src: ["model_2.jpg", "thindown_1.jpg"],
      },
    ],
  },  
  {
    clientName: "Amwell + Google",
    saySomething: "Appreciative",
    description: "Our campaign was a love letter to celebrate the determination and resilience of healthcare providers in the time of COVID. While so many deserve praise, our campaign focused on a doctor’s willingness to drop everything for their patients. Even when it’s inconvenient, even when it’s life threatening, even when all seems lost, nothing stops a doctor. Our message was heard and widely shared.",
    folderName: "amwell",
    hero: "",
    metaFooter: [
      "Strategy",
      "Positioning",
      "Brand Messaging",
      "Creative Development",
      "Film Direction",  
      "Video & Post Production",
    ],
    awards: [],
    content: [
      {
        title: "Nothing Stops a Doctor",
        type: "video",
        src: "https://player.vimeo.com/video/526948128",
      },
    ],
  },
  {
    clientName: "Kmart",
    saySomething: "Buzzworthy",
    description: "There was buzz swirling around Adam Levine’s fashion line. We aimed to package it, add to it, and amplify it through social media. We created “222”, a web series which included experiential events, promotions and BTS stories. The campaign got millions of views, jacked up sales and drew over 250MM impressions after being featured by Access Hollywood, People, USA Today, Refinery 29 and LA Times.",
    folderName: "kmart",
    hero: "",
    metaFooter: [
      "Strategy",
      "Positioning",
      "Id System Design",
      "Brand Messaging",
      "Social Media Creative Development",
      "Experiential Marketing",
      "Event Marketing",
      "Video & Post Production",
      "Film Direction",
    ],
    awards: [],
    content: [
      {
        title: "The Rear",
        type: "video",
        src: "https://player.vimeo.com/video/96916429",
      },
      {
        title: "The Band",
        type: "video",
        src: "https://player.vimeo.com/video/96915494",
      },
    ],
  },
  {
    clientName: "Past Hits",
    saySomething: "Old",
    description: "They may be well past their first run dates, but these ideas have aged gracefully. There’s Truth “Body Bags”, one of Adge’s top 15 campaigns of the century. There’s Ikea “Lamp“, a spot featured on virtually all best ads of all time lists. There’s Officemax’s “Elf Yourself”, a viral phenomenon that has endured for nearly 20 years. And there’s way too many people to thank for it all. Perhaps the agencies listed below are a good start.",
    folderName: "classics",
    hero: "header_1.jpg",
    metaFooter: [
      "Grace & Rothschild",
      "CP+B",
      "Fallon NY",
      "TOY NY",
    ],
    content: [ 
      {
        type: "image",
        src: "elf_2.jpg",
      },
      {
        type: "video",
        title: "elf",
        aspect: "3_4",
        src: "https://player.vimeo.com/video/444890779",
      },
      {
        title: "IKEA Lamp",
        type: "video",
        src: "https://player.vimeo.com/video/83556671",
      },
      {
        title: "Body Bags",
        type: "video",
        src: "https://player.vimeo.com/video/79751978",
      },
      {
        type: "image",
        src: "gt_1.jpg",
      },
      {
        type: "image",
        src: "gt_2.jpg",
      },
      {
        type: "image",
        src: "gt_3.jpg",
      },
      {
        type: "image",
        src: "mini_6.jpg",
      },
      {
        type: "image",
        src: "mini_8.jpg",
      },
      {
        type: "image",
        src: ["mini_4.jpg", "mini_7.jpg"],
      },
      {
        type: "image",
        src: "mini_5.jpg",
      },
      {
        type: "image",
        src: "mini_1.jpg",
      },
      {
        type: "image",
        layout: "2_1",
        src: ["mini_2.jpg", "mini_3.jpg"],
      },
      {
        type: "video",
        title: "Glen",
        aspect: "3_4",
        src: "https://player.vimeo.com/video/79852065",
      },
      {
        type: "image",
        src: "time_3.jpg",
      },
      {
        type: "image",
        src: "time_1.jpg",
      },
      {
        type: "image",
        src: "time_2.jpg",
      },
      {
        title: "Everyone",
        type: "video",
        src: "https://player.vimeo.com/video/75739839",
      },
      {
        title: "Wolverine",
        type: "video",
        src: "https://player.vimeo.com/video/79699295",
      },
      {
        type: "video",
        title: "Matt",
        src: "https://player.vimeo.com/video/80571914",
      },
      {
        type: "video",
        title: "Carl",
        src: "https://player.vimeo.com/video/80571743",
      },
      {
        type: "video",
        title: "Santa",
        src: "https://player.vimeo.com/video/79742643",
      },
      {
        type: "video",
        title: "Headphones",
        src: "https://player.vimeo.com/video/79752228",
      },
      {
        type: "image",
        src: "j&r_2.jpg",
      },
      {
        type: "image",
        src: ["j&r_6.jpg", "j&r_9.jpg"],
      },
      {
        type: "image",
        src: "j&r_3.jpg",
      },
      {
        type: "image",
        src: "j&r_1.jpg",
      },
      {
        type: "video",
        title: "So Relaxed",
        src: "https://player.vimeo.com/video/80569390",
      },
      {
        type: "image",
        src: "bell_1.jpg",
      },
      {
        type: "image",
        src: "bell_2.jpg",
      },
      {
        type: "image",
        src: "bell_5.jpg",
      },
      {
        type: "image",
        src: "landrover_3.jpg",
      },
      {
        type: "image",
        src: "landrover_1.jpg",
      },
      {
        type: "image",
        src: "landrover_2.jpg",
      },
      {
        type: "image",
        src: ["stamps_2.jpg", "stamps_1.jpg"],
      },
      {
        type: "image",
        src: ["stamps_3.jpg", "stamps_4.jpg"],
      },
    ]
  },  
  // {
  //   clientName: "PDFK",
  //   saySomething: "Instructive",
  //   description: "It was a simple observation about parents and kids. We’re all the same age. We listen to the same music. We watch the same shows. We even shop at the same clothing stores our kids do. So when our friends at PDFK were looking for a campaign to help parents respond to a culture of acceptance around marijuana use, we brought our observation to life in a way that seemed to truly resonate. DRUG FREE AMERICA",
  //   folderName: "pdfk",
  //   hero: "",
  //   meta: [
  //     "Ari Merkin",
  //     "Co-Founder, CCO TOY NY",
  //   ],
  //   content: [
  //     {
  //       type: "video",
  //       title: "Closet",
  //       src: "https://player.vimeo.com/video/397969499",
  //     },
  //     {
  //       type: "video",
  //       title: "Couch",
  //       src: "https://player.vimeo.com/video/397969756",
  //     },
  //   ]
  
  // },
  // {
  //   clientName: "Past hits",
  //   title: "Say something",
  //   description: "",
  //   folderName: "past_hits",
  //   hero: "",
  //   metaFooter: [
  //     "Ari Merkin",
  //     "ECD, Fallon NY",
  //   ],
  //   content: [ 
  //     {
  //       type: "video",
  //       title: "Snowflakes",
  //       src: "https://player.vimeo.com/video/79851634",
  //     },
  //     {
  //       type: "title",
  //       title: "Ringtone Campaign"
  //     },
  //     {
  //       type: "video",
  //       title: "Thing",
  //       src: "https://player.vimeo.com/video/79787614",
  //     },
  //     {
  //       type: "video",
  //       title: "Shower",
  //       src: "https://player.vimeo.com/video/79786775",
  //     },
  //     {
  //       type: "title",
  //       title: "Paygoism:"
  //     }, 
  //     {
  //       type: "video",
  //       title: "House of Paygoism",
  //       src: "https://player.vimeo.com/video/226252030",
  //     },
  //     {
  //       type: "video",
  //       title: "Subway",
  //       src: "https://player.vimeo.com/video/226251995",
  //     },
  //     {
  //       type: "video",
  //       title: "Cactus",
  //       src: "https://player.vimeo.com/video/226251950",
  //     },
  //   ],
  // },
]
