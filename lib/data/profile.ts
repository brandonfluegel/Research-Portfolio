export const PROFILE = {
  name: "Brandon Allan Fluegel",
  credential: "Ph.D.",
  role: "Senior Human Factors Design Engineer",
  employer: "Intuitive Surgical",
} as const;

export const PROFILE_ROLE = `${PROFILE.role} at ${PROFILE.employer}`;
export const PROFILE_NAME = `${PROFILE.name}, ${PROFILE.credential}`;
