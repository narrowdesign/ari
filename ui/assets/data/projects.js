/*  POSSIBLE CAMPAIGN CONTENT TYPES
    title
    text
    title_and_text
    image
    video
*/
const projects = [
  {
    clientName: "Bouy",
    title: "Say Something Endearing",
    description: "Buoy is a thoughtful company filled with energetic, brilliant people. Yet for those headed back to work, the name Buoy was nothing more than a mandatory daily online COVID test nobody wanted to take. Our campaign aimed to give Buoy a more likable voice in the workplace – offering advice in case of contact with objects, food or the dude at the adjacent urinal who just tinkled on your leg.",
    folderName: "bouy",
    hero: "header_1.jpg",
    services: [
      "STRATEGY",
      "CREATIVE DEVELOPMENT",
      "VIDEO AND PRINT PRODUCTION",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "logos_1.jpg",
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
      {
        type: "image",
        src: "video.jpg",
      },
    ],
  },
  {
    clientName: "MeWe Nut Butter",
    title: "Say Something Purposeful",
    description: "Can one product save millions from malnutrition while serving the unique needs of people here at home? Our friend Navyn Salem was determined to find out. We helped by creating MeWe, the nonprofit CPG brand that’s good for me and good for we. Launched in March of 2019, MeWe quickly secured major retail distribution and was chosen to join Chobani’s prestigious incubator program.",
    folderName: "mewe",
    hero: "pattern_1.jpg",
    services: [
      "STRATEGY",
      "POSITIONING",
      "NAMING",
      "LOGO",
      "ID SYSTEM DESIGN",
      "BRAND MESSAGING",
      "PACKAGE DESIGN",
      "CREATIVE DEVELOPMENT",
      "E-COMMERCE WEBSITE",
      "DIRECT MAIL",
      "PR KIT",
      "SOCIAL CONTENT",
      "INVESTOR MATERIALS",
      "TRADE SHOW BOOTH",
    ],
    awards: [],
    content: [
      {
        type: "image_row",
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
      {
        type: "image",
        src: "logo_2.jpg"
      },
      {
        type: "image",
        src: "logo_3.jpg"
      },
      {
        type: "image",
        src: "logo_4.jpg"
      },
      {
        type: "image",
        src: "logo_5.jpg"
      },
      {
        type: "image",
        src: "logo_6.jpg"
      },
      {
        type: "image",
        src: "logo_7.jpg"
      },
      {
        type: "image",
        size: "small",
        src: "package_1.jpg",
      },
      {
        type: "image",
        size: "small",
        src: "package_2.jpg",
      },
      {
        type: "image",
        size: "small",
        src: [
          "package_1.jpg",
          "package_2.jpg",
          "package_3.jpg",
        ]
      },
      {
        type: "image",
        size: "small",
        src: [
          "package_4.jpg",
          "package_5.jpg",
          "package_6.jpg",
        ]
      },
      {
        type: "image",
        src: "pattern_1.jpg"
      },
      {
        type: "image",
        src: "print_1.jpg"
      },  
    ],
  },
  {
    clientName: "Elmhurst",
    title: "Say Something Competitive",
    description: "Our friends at Elmhurst didn’t have the budget of their competitors. Then again, they didn’t have other things too, like gums, oils and additives. With a culture of sustainability and dietary consciousness in the spotlight, it was time for this quiet little company to establish a voice of its own. One that could show plant-based fans what its outspoken CEO had known all along: simpler is better.",
    folderName: "elmhurst",
    hero: "",
    services: [
      "STRATEGY",
    "POSITIONING",
    "BRAND MESSAGING",
    "CREATIVE DEVELOPMENT",
    "VIDEO PRODUCTION"
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
    ],
  },
  {
    clientName: "Binx “Stay Sexy”",
    title: "Say Something Provocative",
    description: "Sexually transmitted diseases on college campuses are spreading in record numbers. So how do you keep infections from happening? You keep them from spreading in the first place. We positioned the Binx easy, at-home test as a personal hygiene product – encouraging young men and women to check themselves even before they (sex metaphor here).",
    folderName: "binx",
    hero: "bus_shelter_1.jpg",
    services: [
      "STRATEGY & POSITIONING",
      "BRAND MESSAGING",
      "ID SYSTEM DESIGN",
      "CAMPAIGN DEVELOPMENT",
      "VIDEO & POST PRODUCTION",
      "DIRECTING",
      "OUT OF HOME",
      "SOCIAL CONTENT",
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
    clientName: "Nickel",
    title: "Say Something Revolutionary",
    description: "Our client came to us with an idea to make healthcare attainable by making it affordable. We gave them Nickel. Our branding approach was simple: it was about putting people ahead of profits. No more greed. No more confusion. No more Americans paying the price for an industry that’s lost its way. Healthcare that costs what healthcare should cost. And not a nickel more.",
    folderName: "nickel",
    hero: "logos_1.jpg",
    services: [
      "STRATEGY",
      "NAMING",
      "POSITIONING",
      "BRAND PLATFORM",
      "LOGO & BRAND ID",
      "CREATIVE DEVELOPMENT",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "ooh_1.jpg",
      },
      {
        type: "image",
        src: ["poster_1.jpg","poster_2.jpg"],
      },
      {
        type: "image",
        src: "ooh_2.jpg",
      },
      {
        type: "image",
        src: "business_cards_1.jpg",
      },
      {
        type: "image",
        src: "duratrans_1.jpg",
      },
    ],
  },
  {
    clientName: "Face The Music",
    title: "Say Something Heartbreaking",
    description: "This video was created for those who suffer from addiction and those looking for a way to help others through theirs. Even before any media dollars were spent, “I got this” got this: an article in Billboard, Adweek, Adage, Shots, Shoot and the Fix. The video was a Creativity Editor's Pick and was shared on the Facebook pages of Maroon 5, Flo-Rida, Ink, Richie Sambora and many, many others.",
    folderName: "face_the_music",
    hero: "header_1.jpg",
    services: [
      "BRAND MESSAGING","SCRIPT WRITING","PRODUCTION AND POST PRODUCTION","DIGITAL & MEDIA STRATEGY",
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
    clientName: "Metlife",
    title: "Say Something Unifying",
    description: "Our friends at MetLife gave us four days for ideas, four weeks for production and sixty seconds to win America’s hearts. Pre-launched on Mashable, “Anthem” was shared 92K times in under 48 hours. The NY Times called it, “charming,” Business Insider called it, “Everything that’s good about America,” and the incumbent agency called it a violation of Ari’s non-compete (kidding).",
    folderName: "metlife_2",
    hero: "",
    services: [
      "BRAND MESSAGING",
      "CREATIVE DEVELOPMENT",
      "VIDEO PRODUCTION AND POST PRODUCTION",
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
    clientName: "Thindown",
    title: "Say Something Game Changing",
    description: "Thin was in and the demand for down had never been greater. Yet the process of using down was as complicated as ever. Our friends at Thindown had a new approach. Advanced. Efficient. Easy to use. A way to make down as form-fitting as nature intended. It was time to put the age-old inefficiencies to rest. Time to give voice to the world’s first and only fully seamless down fabric.",
    folderName: "thindown",
    hero: "header_1.jpg",
    services: [
      "STRATEGY",
      "POSITIONING",
      "LOGO",
      "ID SYSTEM DESIGN",
      "BRAND MESSAGING",
      "CREATIVE DEVELOPMENT",
      "WEBSITE",
      "VIDEO & POST PRODUCTION",
      "INVESTOR MATERIAL",
      "CONTENT PRODUCTION",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "logos_1.jpg",
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
      {
        type: "image",
        src: "video.jpg",
      },
    ],
  },
  {
    clientName: "Athenahealth",
    title: "Say Something Honest",
    description: "EMRs aren’t exactly what you’d call user friendly. While Athenahealth’s CEO was helping to solve that, he also understood that empathy would mean more to providers than empty promises. We created “Let doctors be doctors.“ The purpose driven campaign was heralded as a major leap forward for healthcare and led to amazing growth in brand health, awareness and favorability.",
    folderName: "athenahealth",
    hero: "",
    services: [
      "STRATEGY",
      "POSITIONING",
      "ID SYSTEM DESIGN",
      "BRAND MESSAGING",
      "CREATIVE DEVELOPMENT",
      "WEBSITES",
      "DIRECT MAIL",
      "FILM DIRECTION",
      "VIDEO PRODUCTION",
      "VIDEO DIRECTION",
      "TRADE SHOW BOOTH",
      "CONTENT CREATION",
    ],
    awards: [],
    content: [
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
        title: "Surgery",
        type: "video",
        src: "https://player.vimeo.com/video/141049242",
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
    clientName: "Recovery Unplugged",
    title: "Say Something Empowering",
    description: "Our dear friend, Recovery Unplugged CEO, Andew Sossin said, “We want to create a national chain of rehab centers that will help save thousands of lives each year through the power of music.” The idea seemed a little crazy at first. That’s why we liked it. Turns out, music can save your mortal soul. So we created a simple mantra for those coping with this complicated problem: What track are you on?",
    folderName: "recovery_unplugged",
    hero: "header_1.jpg",
    services: [
      "STRATEGY",
      "POSITIONING",
      "LOGO",
      "ID SYSTEM DESIGN",
      "BRAND MESSAGING",
      "CREATIVE DEVELOPMENT",
      "WEBSITE",
      "INVESTOR MATERIALS",
      "CONTENT CREATION",
      "VIDEO & POST PRODUCTION",
    ],
    awards: [],
    content: [
      {
        title: "Save Life",
        type: "video",
        src: "https://player.vimeo.com/video/258109894",
      },
      {
        title: "Long Live",
        type: "video",
        src: "https://player.vimeo.com/video/283702044",
      },
      {
        title: "Overdose",
        type: "video",
        src: "https://player.vimeo.com/video/258112863",
      },
      {
        title: "Heroin",
        type: "video",
        src: "https://player.vimeo.com/video/283702444",
      },
      {
        title: "The 4th of July Independence",
        type: "video",
        src: "https://player.vimeo.com/video/277212759",
      },
    ],
  },
  {
    clientName: "Wishclouds",
    title: "Say Something Entertaining",
    description: "Our friend at Wishclouds said, “We need to go viral.” He was right. With sale alert sites hitting their peak, the pressure was on to launch the Wishclouds app with a fresh voice. “Jane” quickly racked up 2.5M views on Youtube, appearing in Campaign, Adage, Shots, Archive, Creativity, Best Ads on TV and countless blogs. Hmm… maybe there was something right about Jane.",
    folderName: "wishclouds",
    hero: "",
    services: [
      "CREATIVE DEVELOPMENT",
      "FILM DIRECTION",
      "VIDEO & POST PRODUCTION",
      "INFLUENCER CONTENT",
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
    clientName: "Say & Company",
    title: "Say Something Necessary",
    description: "With client business largely on hold during the COVID-19 crisis, we took the chance to create a business of our own, Say & Company, a utility apparel brand designed to spread messages that are important to us all. We aimed to do that with clarity, sincerity, cool hats and a simple mission to improve life on earth. It began with the 6ft Away shirt, an anti-social fashion statement for the whole family.",
    folderName: "say",
    hero: "header_1.jpg",
    services: [
      "NAMING","LOGO","ID SYSTEM DESIGN","BRAND MESSAGING","GO TO MARKET STRATEGY","CREATIVE DEVELOPMENT","E-COMMERCE WEBSITE","SOCIAL MEDIA MANAGEMENT",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "logos_1.jpg",
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
      {
        type: "image",
        src: "video.jpg",
      },
    ],
  },
  {
    clientName: "Virgin Mobile",
    title: "Say Something Non-Corporate",
    description: "No matter how good the plan, cell phone companies are getting the better end of the deal. So it’s no wonder audiences were numb to the endless barrage of incentives. This was the insight that drove our Virgin Mobile campaign centered around real, honest to goodness benefits. We said: Most cell phones take advantage of customers. At Virgin Mobile we let you take advantage of us.",
    folderName: "virgin_mobile",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "Co-Founder, CCO TOY NY",
    ],
    content: [
      {
        type: "video",
        title: "Matt",
        src: "https://player.vimeo.com/video/80571914",
      },
      {
        type: "video",
        title: "Janice",
        src: "https://player.vimeo.com/video/80571812",
      },
      {
        type: "video",
        title: "Carl",
        src: "https://player.vimeo.com/video/80571743",
      },
      {
        type: "video",
        title: "Steve",
        src: "https://player.vimeo.com/video/80572269",
      },
    ]
  },
  {
    clientName: "MetLife",
    title: "Say Something Inclusive",
    description: "For over 150 years, MetLife had been working to make sure everyone had access to health insurance. Yet the company was known more for Charles Schultz’s Peanuts characters than its own historic and powerful intentions. It was time to widen the cartoon universe and give the company the voice it deserved. For the first time in its history, MetLife was headed to the Superbowl.",
    folderName: "metlife_1",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin, Writer, ECD",
      "CP+B",
    ],
    awards: [],
    content: [
      {
        title: "Everyone",
        type: "video",
        src: "https://player.vimeo.com/video/75739839",
      },
      {
        title: "Five cents",
        type: "video",
        src: "https://player.vimeo.com/video/79645423",
      },
    ],
  },
  {
    clientName: "Kmart",
    title: "Say Something Buzz Worthy",
    description: "Our friends at Kmart wanted to build buzz around Adam Levine’s new fashion line. We created the web series, “222”, which included experiential events, promotions and BTS stories. The series got millions of views – boosting sales for the six months it was posted. “The Rack” drew over 250MM impressions and was featured by Access Hollywood, People, USA Today, Refinery 29 and LA Times.",
    folderName: "kmart",
    hero: "",
    services: [
      "STRATEGY",
      "POSITIONING",
      "ID SYSTEM DESIGN",
      "BRAND MESSAGING",
      "SOCIAL MEDIA CREATIVE DEVELOPMENT",
      "EXPERIENTIAL MARKETING",
      "EVENT MARKETING",
      "VIDEO PRODUCTION & POST",
      "VIDEO DIRECTION",
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
    clientName: "Tripadvisor",
    title: "Say Something Reassuring",
    description: "What do those reviews really mean? That was the question to answer for TripAdvisor’s first global brand campaign. Our theme, “Every experience counts”, became a company trademark. The campaign far exceeded expectations – leading to more video production, mass media spending and an exclusive CMO performance of “Rapper’s Delight” during a six-hour car ride from Croatia to Slovenia.",
    folderName: "tripadvisor",
    hero: "header_1.jpg",
    services: [
      "STRATEGY","POSITIONING","BRAND MESSAGING","CREATIVE DEVELOPMENT","VIDEO & POST PRODUCTION",
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
    clientName: "Innovaccer",
    title: "Say Something Powerful",
    description: "“Righting the wrongs of healthcare technology.” This was Innovaccer’s bold claim, and one they could back up with confidence. The founders knew the only way to fix the problem was to put to use every piece of data providers have been working so hard to collect. For us, that meant no beating around the bush. It was time to claim a new era in health tech. Out with the old. In with Innovaccer.",
    folderName: "innovaccer",
    hero: "header_1.jpg",
    services: [
      "STRATEGY",
      "POSITIONING",
      "LOGO",
      "ID SYSTEM DESIGN",
      "BRAND MESSAGING",
      "CREATIVE DEVELOPMENT",
      "WEBSITE",
      "VIDEO",
      "CONTENT PRODUCTION",
      "TRADE SHOW BOOTH",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "logos_1.jpg",
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
      {
        type: "image",
        src: "video.jpg",
      },
    ],
  },
  {
    clientName: "Truth",
    title: "Say Something Rebellious",
    description: "As the seven-foot sacks piled up by the hundreds outside Phillip Morris, a horrified woman approached and asked what was going on. We shared with her the idea behind ‘Truth’ and she stared at us blankly. She said, “My sister died of lung cancer. Do you mind if I carry one of those bags?” For many, ‘Truth’ was life changing. Especially those of us who had the privilege of working on this campaign.",
    folderName: "truth",
    hero: "header_1.jpg",
    services: [
      "WRITER, CP+B",
      "AdAge Magazine’s 15 Best Campaigns of the 21st Century",
    ],
    awards: [],
    content: [
      {
        title: "Body Bags",
        type: "video",
        src: "https://player.vimeo.com/video/79751978",
      },
    ],
  },
  {
    clientName: "OfficeMax",
    title: "Say Something Jolly",
    description: `“Holiday gifts at an office supply store?” From the start, we knew OfficeMax needed more than a traditional ad campaign. They needed to make a real and lasting connection with holiday shoppers. In 2005, our team at Toy created not one, but 20 holiday-themed websites. Elf Yourself became a phenomenon and has been a cornerstone of the OfficeMax holiday effort ever since. 

    “Best Ever Social Media Campaigns” - Forbes, 2010 
    
    “Arguably the Most Successful Viral Campaign in History.” - The Age, 2013`,
    folderName: "officemax",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "Co-Founder, CCO TOY NY",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "logos_1.jpg",
      },
    ],
  },
  {
    clientName: "Ikea",
    title: "Say Something Crazy",
    description: "Suggesting that people have an unnatural attachment to their furniture takes guts, especially when it’s the first ad announcing the U.S. arrival of Ikea. Lamp may well be “the best rug-pull in advertising history” (Adweek, 2017). It’s also a shining example of what can happen when everything goes right from strategy through production. And if you disagree, that is because you’re, well, y’know.",
    folderName: "ikea",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "Writer, CP+B",
      "Winner of the Cannes Grand Prix and Grand Clio",
    ],
    awards: [],
    content: [
      {
        title: "IKEA Lamp",
        type: "video",
        src: "https://player.vimeo.com/video/83556671",
      },
    ],
  },
  {
    clientName: "MINI",
    title: "Say Something Big",
    description: `“Why does the exhaust pipe look like a can?” Once the first full scale clay model of the MINI was complete, the team had a few beers to celebrate. As they stood, admiring their work, they noticed the missing exhaust pipe and quickly stuck an empty beer can in its place. Sometimes, the biggest ideas are born of a series of small, inspired moments. Never was this more true than the U.S. launch of the MINI.`,
    folderName: "mini",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "Writer, CP+B",
      "One Show Best of Show",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "logos_1.jpg",
      },
    ],
  },
  {
    clientName: "Activision’s “Wolverine”",
    title: "Say Something Surprising",
    description: "Video games based on movies that are based on comic books tend to, well, suck. Our friends at Activision challenged us to convince cynical gamers that the first person gameplay of “Wolverine” would exceed their expectations. Shot in a Mexican prison, this film showcases the realistic, rated M for mature, violent nature of the game – featuring in-camera action sequences in the POV of its title character.",
    folderName: "activision",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "Co-Founder, CCO TOY NY",
    ],
    content: [
      {
        title: "Wolverine",
        src: "https://player.vimeo.com/video/79699295",
      },
    ],
  },
  {
    clientName: "J&R",
    title: "Say Something Authentic",
    description: "When it comes to capturing the voice of a brand, nothing is more powerful than authenticity. What excited us most about working on this iconic NYC brand was its complete lack of big box retail polish. LPs sitting in old milk crates. Ripped commercial carpeting. Water stained ceilings. The passion and attitude of its oh-so-New-York-salesstaff. J&R was a branding goldmine and will remain forever in our hearts.",
    folderName: "j_and_r",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "Co-Founder, CCO TOY NY",
    ],  
    content: [
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
        type: "video",
        title: "Wall St.",
        src: "https://player.vimeo.com/video/79750519",
      },
      {
        type: "video",
        title: "Air Guitar",
        src: "https://player.vimeo.com/video/79741074",
      },
    ],
  },
  {
    clientName: "LAND ROVER",
    title: "Say Something Self-Effacing",
    description: "When going downhill in a mudslide, you are told to genty accelerate your Land Rover, even when every bone in your body is telling you to brake. It’s counterintuitive. And so were the concepts in this long running ad campaign. A vehicle covered in mud? Pelted with snowballs? In an industry that glamorizes sheet metal, this campaign dared to focus on the most glamorous thing a product can be. Honest.",
    folderName: "land_rover",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "Writer",
      "Grace and Rothschild",
      "Comm Arts and One Show",
    ],
  },
  {
    clientName: "5TH AVE STAMP GALLERY",
    title: "Say Something Funny",
    description: "Great headline writing can involve a single, powerful thought. A flip on the usual. A word play or turn of phrase. For our friends at the 5th Avenue Stamp Gallery, a great headline was the funniest thing that could possibly be said at the intersection of celebrity and stamp. The result was a sales boost for our client. And thanks to its multi-year winning streak at the One Show, an ego boost for us.",
    folderName: "stamps",
    hero: "header_1.jpg",
    services: [
      "One Show Gold",
    ],
  },
  {
    clientName: "TIME",
    title: "Say Something Bi-Partisan",
    description: "While doing our watch on the legendary Time red border campaign, we decided to take it to the streets – bringing Time’s social commentary literally everywhere. Storefronts. Building sides. Construction sites. Yet it was this piece that got people talking, including David Letterman who complained about the traffic on the West Side Highway saying, “Every commuter slows to look at this blasted billboard.”",
    folderName: "time",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "ECD, Fallon NY",
      "Cannes Gold Lion",
    ],
  },
  {
    clientName: "PDFK",
    title: "Say Something Instructive",
    description: "It was a simple observation about parents and kids. We’re all the same age. We listen to the same music. We watch the same shows. We even shop at the same clothing stores our kids do. So when our friends at PDFK were looking for a campaign to help parents respond to a culture of acceptance around marijuana use, we brought our observation to life in a way that seemed to truly resonate. DRUG FREE AMERICA",
    folderName: "pdfk",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "Co-Founder, CCO TOY NY",
    ],
    content: [
      {
        type: "video",
        title: "Closet",
        src: "https://player.vimeo.com/video/397969499",
      },
      {
        type: "video",
        title: "Couch",
        src: "https://player.vimeo.com/video/397969756",
      },
    ]
  
  },
  {
    clientName: "Past hits",
    title: "Say something",
    description: "",
    folderName: "past_hits",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "ECD, Fallon NY",
    ],
    content: [ 
      {
        type: "video",
        title: "Snowflakes",
        src: "https://player.vimeo.com/video/79851634",
      },
      {
        type: "title",
        title: "Ringtone Campaign"
      },
      {
        type: "video",
        title: "Thing",
        src: "https://player.vimeo.com/video/79787614",
      },
      {
        type: "video",
        title: "Shower",
        src: "https://player.vimeo.com/video/79786775",
      },
      {
        type: "title",
        title: "Paygoism:"
      }, 
      {
        type: "video",
        title: "House of Paygoism",
        src: "https://player.vimeo.com/video/226252030",
      },
      {
        type: "video",
        title: "Subway",
        src: "https://player.vimeo.com/video/226251995",
      },
      {
        type: "video",
        title: "Cactus",
        src: "https://player.vimeo.com/video/226251950",
      },
    ],
  },
  {
    clientName: "Extended Stay Hotels",
    title: "Say Something Outrageous",
    description: "“What benefit does Extended Stay Hotels enjoy by positioning itself as Your Hindquarters Headquarters?” asked Adage’s Bob Garfield, in an otherwise scathing review. ”Well, actually, a fair amount. Operating in a crowded category, burdened with a generic brand name, Extended Stay will, for the first time in its history, stand out in the crowd… as the old expression goes: Now you're cookin' with gas.”",
    folderName: "extended_stay_hotels",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "Co-Founder, CCO TOY NY",
    ],
    content: [ 
      {
        type: "video",
        title: "So Relaxed",
        src: "https://player.vimeo.com/video/80569390",
      }
    ]
  },
  {
    clientName: "Hanes & 360i",
    title: "Say Something Chill",
    folderName: "hanes",
    hero: "header_1.jpg",
    description: "Michael Jordan is one of the most famous athletes of all time. Yet for some reason, we were just as excited to work with Facebook Canvas. When we were approached to direct this interactive mobile experience for Hanes and 360i, we jumped at the chance. The choose-your-adventure game let you walk in Michael’s sizable shoes – earning points for being as chill as the legend himself.",
    services: [
      "FILM DIRECTION",
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
    clientName: "Starbucks",
    title: "Say Something Motivational",
    description: "“Glen” was presented standing on a conference table at Pepsi (Starbucks distributor). We had a good feeling the ad would be a hit. But when it premiered at 7am for 800 people attending a Vegas bottlers convention, we worried the early time slot might bring more headaches than smiles. “Glen” was met with a rousing standing ovation and went on to become one of the most popular ads of the year.",
    folderName: "starbucks",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "ECD, Fallon NY",
      "Creativity’s Spot of the Year",
    ],
    content: [ 
      {
        type: "video",
        title: "Glen",
        src: "https://player.vimeo.com/video/79852065",
      }
    ]
  },
  {
    clientName: "Bell",
    title: "Say Something Historical",
    description: "Unlike its new crop of sexy competitors, Bell had been around for 66 years. Painstakingly handcrafted from metal type cast on an old timey letterpress, our campaign aimed to tell the company’s story – listing its deep generational roots as America’s most trusted helmet. After all, with that kind of staying power, the folks at Bell obviously know a thing or two about survival.",
    folderName: "bell",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "Writer, CP+B",
      "One Show Gold",
    ],
  },
  {
    clientName: "GT",
    title: "Say Something Self-centered",
    description: "There’s a school of thought that says advertising has to be all about the customer, all the time. Nah, that’s silly. Product benefits can easily be expressed with a powerful statement about what your company stands for. So go ahead and beat your chest. Prattle on. Make it all about you. Just do it in a way that people want to hear. Nothing engages like an authentic brand voice.",
    folderName: "gt",
    hero: "header_1.jpg",
    services: [
      "Ari Merkin",
      "Writer, CP+B",
      "Cannes Gold",
    ],
  },
]
