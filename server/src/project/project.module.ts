import { Module } from "@nestjs/common";
import { ProjectModuleBase } from "./base/project.module.base";
import { ProjectService } from "./project.service";
import { ProjectResolver } from "./project.resolver";

@Module({
  imports: [ProjectModuleBase],
  providers: [ProjectService, ProjectResolver],
  exports: [ProjectService],
})
export class ProjectModule {}
