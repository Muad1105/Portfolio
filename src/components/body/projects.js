import loginCountryList from "../images/login_country.png";
import userProfile from "../images/user_profiles.png";
import addContact from "../images/add_contact_list.png";
import subscription from "../images/subscription_page.png";

const projects = [
  {
    name: "Signin and display country List",
    url: "https://muad1105.github.io/login_country_list/",
    desc: "A user can login after registration, validations are present for inputs, Login after registration to view Country Lists",
    toolset: ["React Hooks", "Redux", "react-router-dom"],
    image: loginCountryList,
  },
  {
    name: "Profile Page for users from List of users",
    url: "https://muad1105.github.io/display_users/#/accounts",
    desc: "A list of users are being displayed, On selecting each users - the profile page is displayed, Chat component is present, Logout from user profile view",
    toolset: ["Redux-toolkit", "react-router-dom", "SCSS"],
    image: userProfile,
  },
  {
    name: "Add a list of contacts",
    url: "https://muad1105.github.io/contacts_add/",
    desc: "User can be added and the list of Users are displayed",
    toolset: [
      "Typescript",
      "react-router-dom",
      "ChartJS",
      "Redux",
      "Axios",
      "Tailwind",
    ],
    image: addContact,
  },
  {
    name: "Subscription Page",
    url: "https://muad1105.github.io/subscription-plan/",
    desc: "A user can choose a subscription plan and the payment including GST is been dispalayed to have payment option",
    toolset: ["React Hooks", "react-router-dom", "Redux", "SCSS"],
    image: subscription,
  },
];

export default projects;
