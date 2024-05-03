import createTask from "../createTask";

const SampleTasks = () => [
  createTask("Take out Trash", new Date("2024-05-25").toDateString(), false, [
    "nonurgent",
    "weekly",
    "home",
  ]),
  createTask("Finish HomeWork", new Date("2024-04-19").toDateString(), true, [
    "daily",
    "urgent",
    "school",
  ]),
  createTask("Final Exam", new Date("2024-12-02").toDateString(), false, []),
  createTask("Submit Assignment", new Date("2023-10-27").toDateString(), true, [
    "school",
    "urgent",
    "weekly",
  ]),
  createTask("Cook Food", new Date("2024-04-23").toDateString(), false, [
    "nonurgent",
    "daily",
    "home",
  ]),
  createTask("Eye Exam", new Date("2024-07-09").toDateString(), true, [
    "medical",
    "urgent",
    "personal",
  ]),
  createTask("Replace Filter", new Date("2025-01-01").toDateString(), false, [
    "repeating",
    "important",
    "home",
    "learn",
  ]),
  createTask(
    "Go Shopping for clothes",
    new Date("2024-05-02").toDateString(),
    true,
    ["personal", "nonurgent"]
  ),
  createTask("Take out Trash", new Date("2024-05-25").toDateString(), false, [
    "nonurgent",
    "weekly",
    "home",
  ]),
  createTask(
    "Finish HomeWork for chemistry there is a lot to do.",
    new Date("2024-04-19").toDateString(),
    true,
    []
  ),
  createTask("Final Exam", new Date("2024-12-02").toDateString(), false, [
    "urgent",
    "quarterly",
    "school",
  ]),
];

export default SampleTasks;
