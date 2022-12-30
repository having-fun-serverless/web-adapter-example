import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  startDate?: DateTimeFilter;
};
