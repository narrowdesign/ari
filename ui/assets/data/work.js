/*  POSSIBLE CAMPAIGN CONTENT TYPES
    title
    text
    title_and_text
    image
    video
*/
var work = [
  {
    clientName: "Elmhurst",
    folderName: "elmhurst", // Note: formatted like this so I can use it to reference file and folder names with this name
    campaigns: [{
      poster: "elmhurst_poster.jpg",
      awards: [
        "2018 One show pencil",
        "2018 AICP winner",
      ],
      services: [
        "Brand Messaging",
        "Script Writing",
      ],
      content: [
        {
          type: "video",
          src: "https://player.vimeo.com/video/402200729",
        },
        {
          type: "title_and_text",
          title: "Say Something Nobody Else Can",
          text: "A culture of sustainability and dietary consciousness has brought plant-based diets and products into the spotlight. Elmhurst didn’t have a big budget or the marketing machine of its competitors. Then again, they didn’t have other things too. Like gums, oils and additives. It was time for this quiet little company to establish a voice and show plant-based fans why simpler is actually better."
        },
        {
          type: "video",
          src: "https://player.vimeo.com/video/402204658",
        },
        {
          type: "video",
          src: "https://player.vimeo.com/video/405134581",
        },
        {
          type: "image",
          src: "elmhurst_poster.jpg",
        },
      ],
    }]
  },
]