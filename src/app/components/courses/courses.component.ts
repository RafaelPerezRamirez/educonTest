import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

    courses:any = [
        {
            "image": "./assets/course1.jpg",
            "type": "Science",
            "title": "Computing and Arts",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            "image": "./assets/course2.jpg",
            "type": "Agrcultural, Science",
            "title": "Agricultural Management",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            "image": "./assets/course3.jpg",
            "type": "Science",
            "title": "Electrical Engineering",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            "image": "./assets/course2.jpg",
            "type": "Agrcultural, Science",
            "title": "Agricultural Management",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
            "image": "./assets/course1.jpg",
            "type": "Science",
            "title": "Computing and Arts",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        }
    ];
  constructor() { }

  ngOnInit() {
      $(document).ready(function(){
          $(".control-left, .control-right").on("click", function () {
                var este = $(this);
                var canvas = $('#carousel-content');
                var size = $('#carousel-content').width();
                var posicion = este.is('.control-left')
                    ? canvas.scrollLeft() - size
                    : canvas.scrollLeft() + size;
                canvas
                    .stop()
                    .animate({
                        'scrollLeft': posicion
                    }, 200);
          })
      });
  }
}
