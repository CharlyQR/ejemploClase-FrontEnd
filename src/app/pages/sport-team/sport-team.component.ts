import { Component, inject } from "@angular/core";
import { ISportTeam } from "../../interfaces";
import { SportTeamFormComponent } from "../../components/sport-team/sport-team-form/sport-team-form.component";
import { SportTeamListComponent } from "../../components/sport-team/sport-team-list/sport-team-list.component";
import { TeamService } from "../../services/team.service";


@Component({
  selector: "app-sport-team",
  standalone: true,
  imports: [SportTeamFormComponent, SportTeamListComponent],
  templateUrl: "./sport-team.component.html",
  styleUrls: ["./sport-team.component.scss"]
})
export class SportTeamComponent {
  public teamList: ISportTeam[] = []
  public teamService: TeamService = inject(TeamService);

  constructor() {
    this.teamService.getAll();
  }
}