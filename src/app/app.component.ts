import {
  Component,
  OnInit,
  TemplateRef,
  VERSION,
  ViewChild
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  @ViewChild("tmpl1", { static: true }) editTmpl: TemplateRef<any>;

  test = {};

  ngOnInit(): void {
    console.log(this.editTmpl);
    this.test = {
      cellTemplate: this.editTmpl
    };
  }
}
