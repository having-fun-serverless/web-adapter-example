import { Project as TProject } from "../api/project/Project";

export const PROJECT_TITLE_FIELD = "name";

export const ProjectTitle = (record: TProject): string => {
  return record.name || record.id;
};
