import { Component, Input } from "@angular/core";
import { ISportTeam } from "../../../interfaces";

@Component({
  selector: "app-sport-team-list",
  standalone: true,
  templateUrl: "./sport-team-list.component.html",
  styleUrls: ["./sport-team-list.component.scss"]
})
export class SportTeamListComponent {
  @Input() pTeamList: ISportTeam[] = [];
}