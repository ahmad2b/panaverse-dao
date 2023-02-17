import React from "react";
import JobList from "@/(resources)/JobList";
import EditorLayout from "./EditorLayout";
import HighLightText from "./HighLightText";

export default function SectionB() {
  return (
    <>
      <EditorLayout>
        <h3
          style={{
            fontWeight: "bold",
            fontSize: "1.5em", // sets the font size to 2em
            padding: "16px 0", // sets the top and bottom margins to 20px and the left and right margins to 0
          }}
        >
          The Outcome for Participants of the Program
        </h3>
        <p>
          The graduates of this program will own products (Full-Stack App
          Templates, AR and VR Experiences, and APIs) that are marketed globally
          by the Panaverse DAO and, if they like, will also be able to start off
          by offering services at a rate of $50 per hour ($96,000 per year).
        </p>
        <p>
          This would give Pakistani professionals and students a fantastic
          opportunity to better their financial situation while also giving the
          economy a much-needed boost by expanding software exports.
        </p>
        <HighLightText>
          Top 5 'Metaverse' jobs that will rule the future of tech industry
        </HighLightText>
        <JobList />
      </EditorLayout>
    </>
  );
}
