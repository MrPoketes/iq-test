import React from "react";
import { List } from "../List/List";

export const Terms: React.FC = () => (
  <>
    <h1 className="text-center text-xl font-medium">Terms of Participation</h1>
    <List
      items={[
        "Aim of this project is to create an online IQ test",
        "The results of the test will be stored, however it will be anonymous",
        "Test results will be used to improve the test and validate the test",
        "The generated result may not be entirely accurate and should be used for entertainment purposes only",
        "Any questions or suggestions can be sent to az778@york.ac.uk",
        "Before starting the test, make sure you are in a place that allows you to concentrate on!",
        "The test consists of 20 questions, gradually increasing in difficulty. Maximum test duration is 18 minutes",
        "Before each test section or sub-section you will be presented with instructions, how to answer the questions",
        "Evaluate questions from top to down. Choose the appropriate answer (A, B, C, D)",
        "Please do not use any reference materials or the help of anyone else in solving these problems!",
      ]}
    />
  </>
);
