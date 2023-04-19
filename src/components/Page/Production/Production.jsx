import React from "react";
import Headline from "../../TextComponents/Headline";
import Content from "../../TextComponents/Content";

const Production = () => {
  return (
    <div>
      <Headline content="Complete Film Productio" lastWord="n" />
      <Content content="Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit sapien ornare morbin dd we  can understand the fact po of film  " />
      <div style={{ height: "313px" }} className="bg-[#F45656]"></div>
      <div
        style={{
          marginTop: "-240px",
          marginBottom: "200px",
        }}
        className="flex justify-evenly flex-wrap"
      >
        {" "}
        <div className="card">
          <img src="https://i.ibb.co/FsQ7cvt/Rectangle-194.png" alt="" />
          <p className="text-center my-4">title</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit
            sapien ornare morbin dd we can understand the fact po of{" "}
          </p>
        </div>
        ;
      </div>
      {productionData.map((data) => {
          
        })}
      <div className="flex justify-between mb-8">
        {" "}
        <div className="border border-[#F35659] mb-3 w-[40%]"></div>
        <div className="border border-[#F35659] mb-3 w-[40%]"></div>
      </div>
    </div>
  );
};
const productionData = [
  {
    id: 1,
    title: "research",
    list: [
      {
        id: 1,
        description: "Reference Findings",
      },
      {
        id: 2,
        description: "Analyses",
      },
      {
        id: 3,
        description: " Research File",
      },
    ],
  },
  {
    id: 2,
    title: "Pre Production",

    list: [
      {
        id: 1,
        description: " Finalizing the script",
      },
      {
        id: 2,
        description: "Budget",
      },
      {
        id: 3,
        description: "Script Breakdown",
      },
      {
        id: 4,
        description: "Selection of the Casts and Crews",
      },
      {
        id: 5,
        description: "Finding Locations",
      },
      {
        id: 6,
        description: "Crew Orientation and Briefing",
      },
      {
        id: 7,
        description: "1st Pre Production Meeting(PPM)",
      },

      {
        id: 8,
        description: "Location Recce",
      },
      {
        id: 9,
        description: "Finalizing Costumes",
      },
      {
        id: 10,
        description: "Finalizing Props & Set Design",
      },
      {
        id: 11,
        description: "Finalizing department based decisions",
      },
      {
        id: 12,
        description: "Permission and Insurance",
      },
      {
        id: 13,
        description: "2nd PPM",
      },
      {
        id: 14,
        description: "Shot Division",
      },
      {
        id: 15,
        description: "Storyboard",
      },
      {
        id: 16,
        description: "Rehearsal",
      },
      {
        id: 17,
        description: "3rd PPM",
      },
    ],
  },
  {
    id: 3,
    title: "Production",
    list: [
      {
        id: 1,
        description: "Shoot days",
      },
    ],
  },
  {
    id: 4,
    title: "Post Production",
    list: [
      {
        id: 1,
        description: " Music",
      },
      {
        id: 2,
        description: "Sound Mixing",
      },
      {
        id: 3,
        description: "First Cut",
      },
      {
        id: 4,
        description: "Color Grading",
      },
      {
        id: 5,
        description: "Visual effects",
      },
      {
        id: 6,
        description: "insertion",
      },
      {
        id: 7,
        description: "Supervising",
      },

      {
        id: 8,
        description: "Final Editing",
      },
      {
        id: 9,
        description: "Project Submission",
      },
    ],
  },
];
export default Production;
