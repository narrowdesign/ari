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
      "Naming",  
      "Positioning",
      "Logo",
      "ID System",
      "Brand Messaging",
      "UX",
      "Website",
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
    saySomething: "Unifying",
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
    description: "At nearly seven bucks a carton, Elmhurst didn’t have the price advantages of its competitors. Then again, the product didn’t have other things either, like gums, oils and additives. In a culture of sustainability, transparency and dietary consciousness, it was time people knew why simpler truly is better. During our campaign’s run, the company saw a 70% lift in sales.",
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
    clientName: "Say & Company",
    saySomething: "Outspoken",
    description: "In the early days of COVID, some saw the idea of social distancing as, well, let’s just say, an option. Which made life pretty stressful around the South Florida headquarters of Ari&Friends. To help people stay safe, we created The Official 6ft Away Shirt, and what began as a local effort quickly went national. And with countless customers sharing their shirt pics, viral.",
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
    description: "Our campaign aimed to give Buoy a more likable voice in the workplace – quelling confusion and offering much needed advice in case of contact with office objects, food items or the dude at the adjacent urinal who just tinkled on your leg.",
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
    clientName: "Virgin Mobile",
    saySomething: "Gullible",
    description: "No matter how good the plan, cell phone companies are getting the better end of the deal. So it’s no wonder audiences were numb to the endless barrage of incentives. This was the insight that drove our Virgin Mobile campaign centered around real, honest to goodness benefits. We said: Most cell phones take advantage of customers. At Virgin Mobile we let you take advantage of us.",
    folderName: "virgin_mobile",
    hero: "",
    meta: [
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
    saySomething: "Everyone's",
    description: "For over 150 years, MetLife had been working to make sure everyone had access to health insurance. Yet the company was known more for Charles Schultz’s Peanuts characters than its own historic and powerful intentions. It was time to widen the cartoon universe and give the company the voice it deserved. For the first time in its history, MetLife was headed to the Superbowl.",
    folderName: "metlife_1",
    hero: "",
    meta: [
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
    clientName: "Activision",
    saySomething: "Violent",
    description: "Video games based on movies that are based on comic books tend to, well, suck. Our friends at Activision challenged us to convince cynical gamers that the first person gameplay of “Wolverine” would exceed their expectations. Shot in a Mexican prison, this film showcases the realistic, rated M for mature, violent nature of the game – featuring in-camera action sequences in the POV of its title character.",
    folderName: "activision",
    hero: "",
    meta: [
      "Ari Merkin",
      "Co-Founder, CCO TOY NY",
    ],
    content: [
      {
        title: "Wolverine",
        type: "video",
        src: "https://player.vimeo.com/video/79699295",
      },
    ],
  },
  {
    clientName: "OfficeMax",
    saySomething: "Cheerful",
    description: `“Holiday gifts at an office supply store?” From the start, we knew OfficeMax needed more than a traditional ad campaign. They needed to make a real and lasting connection with holiday shoppers. In 2005, our team at Toy created not one, but 20 holiday-themed websites. Elf Yourself became a phenomenon and has been a cornerstone of the OfficeMax holiday effort ever since.`,
    folderName: "officemax",
    hero: "elf_1.jpg",
    meta: [
      "Ari Merkin",
      "Co-Founder, CCO TOY NY",
    ],
    metaFooter: [
      `“Best Ever Social Media Campaigns” - Forbes, 2010<br>“Arguably the Most Successful Viral Campaign in History.” - The Age, 2013`
    ],
    awards: [],
    content: [
      {
        type: "video",
        title: "elf",
        aspect: "3_4",
        src: "https://player.vimeo.com/video/444890779",
      },
      {
        type: "image",
        src: "elf_2.jpg",
      },
      {
        type: "image",
        src: ["elf_3.png", "elf_4.png", "elf_5.png"],
      },
      {
        type: "image",
        src: ["elf_6.png", "elf_7.png", "elf_5.png"],
      },
      {
        type: "image",
        src: ["elf_9.png", "elf_10.png", "elf_11.png"],
      },
      {
        type: "image",
        src: ["elf_12.png", "elf_13.png", "elf_15.png"],
      },
      {
        type: "image",
        src: ["elf_8.png", "elf_16.png", "elf_17.png"],
      },
    ],
  },
  {
    clientName: "Starbucks",
    saySomething: "Upbeat",
    description: "We had a good feeling the ad would be a hit. But when it premiered at 7am for 800 people attending a Vegas bottlers’ convention, we worried the early time slot might bring more headaches than smiles. “Glen” was met with a rousing standing ovation and went on to become one of the most popular ads of the year.",
    folderName: "starbucks",
    hero: "",
    meta: [
      "Ari Merkin",
      "ECD, Fallon NY",
      "Creativity’s Spot of the Year",
    ],
    content: [ 
      {
        type: "video",
        title: "Glen",
        aspect: "3_4",
        src: "https://player.vimeo.com/video/79852065",
      }
    ]
  },
  {
    clientName: "J&R",
    saySomething: "New Yorker",
    description: "When it comes to capturing the voice of a brand, nothing is more powerful than authenticity. What excited us most about working on this iconic NYC brand was its complete lack of big box retail polish. LPs sitting in old milk crates. Ripped commercial carpeting. Water stained ceilings. The passion and attitude of its oh-so-New-York-salesstaff. J&R was a branding goldmine and will remain forever in our hearts.",
    folderName: "j_and_r",
    hero: "j_and_r_5.jpg",
    meta: [
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
      {
        type: "image",
        src: "j_and_r_7.jpg",
      },
      {
        type: "image",
        src: "j_and_r_6.jpg",
      },
      {
        type: "image",
        src: ["j_and_r_8.jpg", "j_and_r_9.jpg"],
      },
      {
        type: "image",
        src: "j_and_r_4.jpg",
      },
    ],
  },
  {
    clientName: "TIME",
    saySomething: "Vigilant",
    description: "While doing our watch on the legendary Time red border campaign, we decided to take it to the streets – bringing Time’s social commentary literally everywhere. Storefronts. Building sides. Construction sites. Yet it was this piece that got people talking, including David Letterman who complained about the traffic on the West Side Highway saying, “Every commuter slows to look at this blasted billboard.”",
    folderName: "time",
    hero: "time_3.jpg",
    meta: [
      "Ari Merkin",
      "ECD, Fallon NY",
      "Cannes Gold Lion",
    ],
    content: [
      {
        type: "image",
        src: "time_1.jpg",
      },
      {
        type: "image",
        src: "time_2.jpg",
      },
    ],
  },
  {
    clientName: "MINI",
    saySomething: "Little",
    description: `“Why does the exhaust pipe look like a can?” Once the first full scale clay model of the MINI was complete, the team had a few beers to celebrate. As they stood, admiring their work, they noticed the missing exhaust pipe and quickly stuck an empty beer can in its place. Sometimes, the biggest ideas are born of a series of small, inspired moments. Never was this more true than the US launch of the MINI.`,
    folderName: "mini",
    hero: "mini_2.jpg",
    meta: [
      "Ari Merkin",
      "Writer, CP+B",
      "One Show Best of Show",
    ],
    awards: [],
    content: [
      {
        type: "image",
        src: "mini_14.jpg",
      },
      {
        type: "image",
        src: "mini_13.jpg",
      },
      {
        type: "image",
        src: "mini_15.jpg",
      },
      {
        type: "image",
        src: ["mini_10.jpg", "mini_8.jpg"],
      },
      {
        type: "image",
        src: "mini_1.jpg",
      },
      {
        type: "image",
        src: "mini_16.jpg",
      },
      {
        type: "image",
        src: "mini_3.jpg",
      },
      {
        type: "image",
        layout: "2_1",
        src: ["mini_4.jpg", "mini_7.jpg"],
      },
    ],
  },
  {
    clientName: "Bell",
    saySomething: "Proven",
    description: "Unlike its new crop of sexy competitors, Bell had been around for 66 years. Painstakingly handcrafted from metal-type cast on an old timey letterpress, our campaign aimed to tell the company’s story – listing its deep generational roots as America’s most trusted helmet. After all, with that kind of staying power, the folks at Bell obviously know a thing or two about survival.",
    folderName: "bell",
    hero: "bell_3.jpg",
    meta: [
      "Ari Merkin",
      "Writer, CP+B",
      "One Show Gold",
    ],
    content: [
      {
        type: "image",
        src: ["bell_1.jpg", "bell_2.jpg"],
      },
      {
        type: "image",
        src: "bell_4.jpg",
      },
      {
        type: "image",
        src: "bell_5.jpg",
      },
    ]
  },
{
    clientName: "Ikea",
    saySomething: "Rational",
    description: "Suggesting that people have an unnatural attachment to their furniture takes guts, especially when it’s the first ad announcing the US arrival of Ikea. Lamp may well be “the best rug-pull in advertising history” (Adweek, 2017). It’s also a shining example of what can happen when everything goes right from strategy through production. And if you disagree, that is because you’re, well, y’know.",
    folderName: "ikea",
    hero: "",
    meta: [
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
    clientName: "Truth",
    saySomething: "Activist",
    description: "As the seven-foot sacks piled up by the hundreds outside Phillip Morris, a horrified woman approached and asked what was going on. We shared with her the idea behind ‘Truth’, and she stared at us blankly. She said, “My sister died of lung cancer. Do you mind if I carry one of those bags?” For many, ‘Truth’ was life changing. Especially those of us who had the privilege of working on this campaign.",
    folderName: "truth",
    hero: "truth_4.jpg",
    meta: [
      "Writer, CP+B",
      "AdAge Magazine’s 15 Best Campaigns of the 21st Century",
    ],
    awards: [],
    content: [
      {
        title: "Body Bags",
        type: "video",
        src: "https://player.vimeo.com/video/79751978",
      },
      {
        type: "image",
        src: "truth_1.jpg",
      },
      {
        type: "image",
        src: "truth_2.jpg",
      },
      {
        type: "image",
        src: "truth_3.jpg",
      },
    ],
  },
  {
    clientName: "GT",
    saySomething: "Fast",
    description: "There’s a school of thought that says advertising has to be all about the customer, all the time. Nah, that’s silly. Product benefits can easily be expressed with a powerful statement about what your company stands for. So go ahead and beat your chest. Prattle on. Make it all about you. Just do it in a way that people want to hear.",
    folderName: "gt",
    hero: "gt_4.jpg",
    meta: [
      "Ari Merkin",
      "Writer, CP+B",
      "Cannes Gold",
    ],
    content: [
      {
        type: "image",
        src: "gt_5.jpg",
      },
      {
        type: "image",
        src: "gt_1.jpg",
      },
      {
        type: "image",
        src: "gt_7.jpg",
      },
      {
        type: "image",
        src: "gt_6.jpg",
      },
      {
        type: "image",
        src: "gt_3.jpg",
      },
    ]
  },
  {
    clientName: "Land Rover",
    saySomething: "British",
    description: "When going downhill in a mudslide, you are told to genty accelerate your Land Rover, even when every bone in your body is telling you to brake. It’s counterintuitive. And so were the concepts in this long running ad campaign. A vehicle covered in mud? Pelted with snowballs? In an industry that glamorizes sheet metal, this campaign dared to focus on the most glamorous thing a product can be. Honest.",
    folderName: "land_rover",
    hero: "landrover_3.jpg",
    meta: [
      "Ari Merkin",
      "Writer",
      "Grace and Rothschild",
      "Comm Arts and One Show",
    ],
    content: [
      {
        type: "image",
        src: "landrover_1.jpg",
      },
      {
        type: "image",
        src: "landrover_2.jpg",
      },
    ]
  },
  {
    clientName: "5th Ave Stamp Gallery",
    saySomething: "Clever",
    description: "Great headline writing can involve a single, powerful thought. A flip on the usual. A word play or turn of phrase. For our friends at the 5th Avenue Stamp Gallery, a great headline was the funniest thing that could possibly be said at the intersection of celebrity and stamp. The result was a sales boost for our client. And thanks to its multi-year winning streak at the One Show, an ego boost for us.",
    folderName: "stamps",
    hero: "stamps_7.jpg",
    meta: [
      "One Show Gold",
    ],
    content: [
      {
        type: "image",
        src: ["stamps_6.jpg","stamps_4.jpg"],
      },
      {
        type: "image",
        src: ["stamps_1.jpg","stamps_5.jpg"],
      },
      {
        type: "image",
        src: ["stamps_3.jpg","stamps_2.jpg"],
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
