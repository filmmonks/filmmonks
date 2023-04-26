import React from "react";
import Headline from "../../TextComponents/Headline";
import Content from "../../TextComponents/Content";

const Production = () => {
  return (
    <div id="production">
      <Headline content="Production Proces" lastWord="s" />
      <Content content="Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit sapien ornare morbin dd we  can understand the fact po of film  " />
      <div style={{ height: "313px" }} className="bg-[#F45656]"></div>

      <div className="grid grid-cols-4 mx-28 mb-64">
        {productionData.map((data) => (
          <div style={{ marginTop: "-240px" }} className="ml-4">
            {" "}
            <div className="card">
              <img src={data?.img} alt="" />
              <p className="text-center my-4 capitalize">{data?.title}</p>

              <div>
                {data.list.slice(0, 3).map((l) => (
                  <div
                    style={{
                      width: "185px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    className="flex items-center "
                  >
                    <img
                      className="mr-3"
                      src="https://i.ibb.co/rb2nHDR/Exclude.png"
                      alt=""
                      srcset=""
                    />
                    <div>
                      {l.description.length > 15 ? (
                        <p
                          title={l.description}
                          className="hover:cursor-pointer"
                        >
                          {l.description.slice(0, 15) + "..."}{" "}
                        </p>
                      ) : (
                        <p
                          title={l.description}
                          className="hover:cursor-pointer"
                        >
                          {l.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                <img
                  className="bg-[#F45656] ml-auto w-[20px]"
                  src="https://i.ibb.co/m04ghjk/211688-forward-arrow-icon-1.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const productionData = [
  {
    id: 1,
    title: "research",
    img: "https://i.ibb.co/BnhsYjr/Research.jpg",
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
    img: "https://i.ibb.co/tJ3NppM/Pre-production.jpg",

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
    img: "https://i.ibb.co/r7PzXWL/Production.png",
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
    img: "https://i.ibb.co/JCY2GZ0/Post-Production.png",
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
