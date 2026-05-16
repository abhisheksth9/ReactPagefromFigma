import thinking from "../assets/Illustrations/Thinking.svg";
import writing from "../assets/Illustrations/Writing.svg";
import listening from "../assets/Illustrations/Listening.svg";
import typing from "../assets/Illustrations/Typing.svg";

const svgShadow = `
    drop-shadow(0px 20px 40px rgba(16, 24, 40, 0.10))
    drop-shadow(0px 20px 40px rgba(16, 24, 40, 0.05))
`;

export const features = [
    {
        id: 1,
        title: "Start with Clarity",
        subtitle: "Step into a better learning path.",
        description:
        "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
        bgColor: "#f45b5b",
        image: thinking,
        imagePosition: "left",

        imageStyle: {
            position: "absolute",
            width: "257.39px",
            height: "338.59px",
            top: "22px",
            left: "-49px",
            opacity: 1,
            transform: "rotate(0deg)",
            filter: svgShadow,
            pointerEvents: "none",
        },
    },

    {
        id: 2,
        title: "Learn by Doing",
        subtitle: "Practical skills, real projects",
        description:
            "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
        bgColor: "#5492a0",
        image: writing,
        imagePosition: "right",

        imageStyle: {
            position: "absolute",
            width: "180.35px",
            height: "367px",
            top: "14px",
            left: "380px",
            opacity: 1,
            transform: "rotate(0deg)",
            filter: svgShadow,
            pointerEvents: "none",
        },
    },

    {
        id: 3,
        title: "Get Mentored & Supported",
        subtitle: "You are not learning alone.",
        description:
            "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
        bgColor: "#6c64a8",
        image: listening,
        imagePosition: "left",

        imageStyle: {
            position: "absolute",
            width: "307.03px",
            height: "249.96px",
            top: "106px",
            left: "-48.92px",
            opacity: 1,
            transform: "rotate(0deg)",
            filter: svgShadow,
            pointerEvents: "none",
        },
    },

    {
        id: 4,
        title: "Achieve & Showcase",
        subtitle: "Build your portfolio, get job-ready.",
        description:
            "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
        bgColor: "#a88964",
        image: typing,
        imagePosition: "right",

        imageStyle: {
            position: "absolute",
            width: "280.03px",
            height: "310.76px",
            top: "53.56px",
            left: "317.66px",
            opacity: 1,
            transform: "rotate(-6.05deg)",
            filter: svgShadow,
            pointerEvents: "none",
        },
    },
];