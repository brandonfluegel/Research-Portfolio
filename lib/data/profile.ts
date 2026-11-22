export const PROFILE = {
  name: "Brandon Allan Fluegel",
  credential: "Ph.D.",
  role: "Senior Human Factors Design Engineer",
  employer: "Intuitive Surgical",
} as const;

export const PROFILE_ROLE = `${PROFILE.role} at ${PROFILE.employer}`;
export const PROFILE_NAME = `${PROFILE.name}, ${PROFILE.credential}`;
export const PROFILE_SUMMARY =
  `${PROFILE_NAME}, is a ${PROFILE_ROLE}. His work focuses on human factors for surgical robotics. He earned his Ph.D. in Human Factors Psychology at Old Dominion University. His portfolio documents prior research and engineering projects at Amazon Devices, NASA, and Mercedes-Benz. He authored a human-AI trust audit framework and is a co-inventor of a U.S. patent.`;
export const PROFILE_SEARCH_DESCRIPTION =
  `${PROFILE_ROLE}, focused on surgical robotics. Prior work at Amazon; Ph.D. internships at NASA and Mercedes-Benz.`;
