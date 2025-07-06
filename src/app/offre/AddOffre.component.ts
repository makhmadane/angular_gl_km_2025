import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OffreService } from '../services/offre.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Offre } from '../models/offre';

@Component({
  selector: 'app-add-offre',
  templateUrl: './addOffre.component.html',
  styleUrl: './offre.component.css'
})
export class AddOffreComponent implements OnInit {
  id!: number;
  submitted = false;
  offreForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    date: new FormControl('', [Validators.required]),
    lieu: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private offreService: OffreService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {

    if (this.route.snapshot.paramMap.get('id')) {
      this.id = this.route.snapshot.params["id"];
      this.getById(this.id)
    }
  }


  getById(id: number) {
    this.offreService.getById(this.id).subscribe(
      (data: Offre) => {
        console.log(data)
        this.offreForm.patchValue(data);

      },
      (error) => {
        console.log(error)
      }
    )
  }

  get f2() {
    return this.offreForm.controls;
  }

  onSubmit() {
    this.submitted = true
    if (this.offreForm.valid) {
      if (this.id) {
        this.offreService.updateOffre(this.offreForm.value, this.id).subscribe(
          () => {
            console.log("success")
            this.router.navigateByUrl('offre');
          },
          (error) => {
            console.log(error);
          }
        )


      } else {
        this.offreService.addOffre(this.offreForm.value).subscribe(
          () => {
            console.log("success")
            this.router.navigateByUrl('offre');
          },
          (error) => {
            console.log(error);
          }
        )

      }
    }


  }




}
