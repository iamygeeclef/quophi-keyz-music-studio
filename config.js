/* ============================================================
   QUOPHI KEYZ MUSIC STUDIO - EDIT THIS FILE TO UPDATE THE SITE
   Keep the quotes "" and commas , exactly as they are.
   Save the file, refresh the browser, done.
   ============================================================ */
window.SITE = {
  name: "Quophi Keyz Music Studio",
  location: "Ablekuma Fanmilk, Accra, Ghana",
  whatsappNumber: "233577641281",   // international format, no + or spaces
  displayPhone: "0577641281",
  email: "",                        // OPTIONAL: leave empty until you have one
  openingHours: "",                 // OPTIONAL: e.g. "Mon-Sat, 10am - 8pm". Empty = "ask on WhatsApp"
  generalMessage: "Hello Quophi Keyz Music Studio, I would like to enquire about your music studio services. Please let me know your services, prices, and available session times.",
  showcaseMessage: "Hello Quophi Keyz Music Studio, I would like to submit my music for the Upcoming Artists Showcase. Please tell me how to participate.",

  social: {
    youtube:   { label: "YouTube - Ygee Clef",  url: "https://youtube.com/@ygeeclef7954" },
    tiktok:    { label: "TikTok - @iamygeeclef", url: "https://www.tiktok.com/@iamygeeclef" },
    instagram: { label: "Instagram - @iamygeeclef", url: "https://www.instagram.com/iamygeeclef/" }
  },

  // YouTube videos: paste only the ID (the part after v= in the video link). Empty = shows channel link.
  // Example: youtubeVideos: [ { id: "ABC123xyz00", title: "Studio session" } ],
  youtubeVideos: [],

  // PRICING PACKAGES (prices as confirmed by the studio)
  packages: [
    { name: "Standard Mixtape", price: "GH₵300",
      includes: ["A 30-minute recording session", "Artist uses their own beats"],
      button: "Book Standard Mixtape",
      message: "Hello Quophi Keyz Music Studio, I would like to book the Standard Mixtape package for GH₵300. Please confirm the session details and available times." },
    { name: "Master Mixtape", price: "GH₵670",
      includes: ["A 30-minute recording session", "Artist uses their own beats"],
      note: "Ask us on WhatsApp for the full package details.",
      button: "Book Master Mixtape",
      message: "Hello Quophi Keyz Music Studio, I would like to enquire about the Master Mixtape package for GH₵670. Please confirm the package details and available times." },
    { name: "Full Music Production", price: "GH₵2,000",
      includes: ["Beat production", "Mixing", "Mastering"],
      button: "Book Full Production",
      message: "Hello Quophi Keyz Music Studio, I am interested in Full Music Production for GH₵2,000, including beat production, mixing, and mastering. Please let me know how we can get started." }
  ],

  // SERVICES. price: "" shows "Get a Quote". Add/remove blocks freely.
  services: [
    { icon: "🥁", title: "Music Beat Production", description: "Custom beats and instrumentals shaped around your style and message." },
    { icon: "🎙️", title: "Vocal Recording", description: "Record your vocals with focus on clarity, performance and feel." },
    { icon: "🎚️", title: "Mixing and Mastering", description: "Balance, polish and prepare your song for streaming and sharing." },
    { icon: "🎹", title: "Full Music Production", price: "GH₵2,000", description: "Beat production, mixing and mastering - from idea to finished song.",
      message: "Hello Quophi Keyz Music Studio, I am interested in Full Music Production for GH₵2,000, including beat production, mixing, and mastering. Please let me know how we can get started." },
    { icon: "🎤", title: "Voice Training", description: "Build confidence, control and technique as a singer or performer." },
    { icon: "📣", title: "Jingles and Advertising Audio", description: "Catchy audio for brands, events, businesses and campaigns." },
    { icon: "🗣️", title: "Voiceovers", description: "Clear voice recordings for ads, videos, announcements and more." },
    { icon: "🎼", title: "Overdubs", description: "Add extra layers and parts to strengthen your recording." },
    { icon: "🎶", title: "Backing Vocals and Harmonies", description: "Rich harmonies and backing vocals to lift your songs." },
    { icon: "✨", title: "Ad-libs", description: "Add energy and personality with well-placed ad-libs." },
    { icon: "➕", title: "Other Audio Services", description: "Have another audio need? Tell us about it and we will advise." }
  ],

  // MUSIC PLAYER. Put files in the /audio folder, then add a block like the example.
  // Example: { title: "My Beat", artist: "Artist Name", file: "audio/my-beat.mp3", link: "" },
  beats: [],
  songs: [],

  // FEATURED ARTISTS. Put photos in /images. Example:
  // { name: "Stage Name", genre: "Gospel", photo: "images/stage-name.jpg", music: "https://...", social: "https://..." },
  artists: []
};
