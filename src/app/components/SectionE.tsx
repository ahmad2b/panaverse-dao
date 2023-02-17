"use client";
import React from "react";
import CoreConcepts from "./CourseSection/CoreConcepts";
import Sepecialization from "./CourseSection/Specialization";
import EditorLayout from "./EditorLayout";

export default function AccordQuaters() {
  return (
    <>
      <EditorLayout>
        <CoreConcepts />
      </EditorLayout>
      <EditorLayout>
        <Sepecialization />
      </EditorLayout>
    </>
  );
}
