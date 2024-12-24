import React from "react";
import Avatar from "react-avatar";

const Spaces = () => {
  const spaces = [
    {
      name: "The Programmers' Cafe",
      description: "The space to share ideas via Coding",
      avatar: "https://img.freepik.com/vecteurs-premium/cute-coffee-with-code-illustration-cafe-and-restaurant-menu-cafe-logo-programmer-freelancer-developer-flat-cartoon-style-suitable-for-web-landing-page-banner-flyer-sticker-card-background_1033579-100342.jpg",
    },
    {
      name: "Programming Algorithms",
      description: "All about programming, data structures and algorithms. Let's learn!",
      avatar: "https://thumbs.dreamstime.com/b/algorithm-programming-concept-64816777.jpg",
    },
    {
      name: "Python and ML Basics",
      description: "Basics concepts of Python and Machine Learning for Beginners.",
      avatar: "https://editor.analyticsvidhya.com/uploads/13765Python%20on%20frontend-%20Brython.png",
    },
    {
      name: "Data Analytics Basics 📈",
      description: "Business-Statistics | Statistical-Modelling | Analytics-Tools",
      avatar: "https://th.bing.com/th/id/OIP.1SKxC3-7RLRgjCbx81-HsQHaGx?rs=1&pid=ImgDetMain",
    },
    {
      name: "VLSI Beginners",
      description: "📙 Discuss & Share Ideas, Jobs, Career Tips for VLSI Beginners.",
      avatar: "https://th.bing.com/th/id/OIP.TGD_WhCCcRQbEmsTKr7LxwHaEM?rs=1&pid=ImgDetMain",
    },
    {
      name: "The Internships Club",
      description: "Join this space to get daily updates & info on Internship's Advice",
      avatar: "https://th.bing.com/th/id/OIP.5bKpdxIbpDkhAGCl2sGlawHaH_?rs=1&pid=ImgDetMain",
    },
    {
      name: "Programmer's Heaven",
      description: "It's all about Computer Programming.",
      avatar: "https://d3of8ou1mslcoj.cloudfront.net/content/uploads/2017/02/heaven-hell-computer-keys-showing-choice-between-good-and-evil-online_G1aCTQDu.jpg",
    },
    {
      name: "Artificial Intelligence - Cybersecurity - Hacking",
      description: "Bringing Humans closer to Machines",
      avatar: "https://ik.imagekit.io/edtechdigit/usaii/content/images/use-of-ai-technologies-to-bring-down-cybersecurity-attacks.jpg",
    },
  ];

  return (
    <>
      <h2 className="text-lg font-semibold p-2">Spaces to follow</h2>
      <ul className="space-y-4">
        {spaces.map((space, index) => (
          <li
            key={index}
            className="flex items-start space-x-4 p-2 border-t-2 transform transition-transform hover:scale-105 hover:shadow-lg hover:rounded-lg hover:mx-3"
          >
            <Avatar
              src={space.avatar}
              name={space.name}
              size="40"
              round
              className="flex-shrink-0"
            />
            <div>
              <h3 className="text-sm font-medium">{space.name}</h3>
              <p className="text-sm text-gray-500">{space.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Spaces;
