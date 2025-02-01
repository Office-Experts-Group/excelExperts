export const metadata = {
  title:
    "PowerPoint Training & Expert Assistance Services | Professional Support",
  description:
    "Expert PowerPoint training and assistance services. Remote or onsite support, custom training sessions, troubleshooting, and professional guidance. Contact us at 1300 102 810",

  openGraph: {
    title:
      "PowerPoint Training & Expert Assistance Services | Professional Support",
    description:
      "Expert PowerPoint training and assistance services. Remote or onsite support, custom training sessions, troubleshooting, and professional guidance.",
    url: "https://www.excelexperts.com.au/services/microsoft-powerpoint/powerpoint-user-training-and-assistance/",
  },

  keywords: [
    "powerpoint training services",
    "powerpoint expert assistance",
    // "remote powerpoint support",
    // "onsite powerpoint training",
    // "powerpoint troubleshooting help",
    // "presentation skills training",
    // "powerpoint consultancy services",
    // "custom powerpoint training",
    // "group powerpoint training",
    // "individual powerpoint coaching",
    // "powerpoint upgrade assistance",
    // "presentation conversion help",
    // "powerpoint how-to videos",
    // "professional powerpoint guidance",
    // "powerpoint training australia",
  ],

  metadataBase: new URL("https://www.excelexperts.com.au"),
  alternates: {
    canonical:
      "/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
    languages: {
      "en-AU":
        "/services/microsoft-powerpoint/powerpoint-user-training-and-assistance",
    },
  },
};

export default function PowerPointTrainingLayout({ children }) {
  return <main>{children}</main>;
}
