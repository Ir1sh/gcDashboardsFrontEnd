import {Component} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'
import {AppState} from '../app.service';
import {Data} from './data/data.service';

@Component({
  selector: 'dropout-rates',
  providers: [
    Data
  ],
  directives: [],
  pipes: [],
  styles: [],
  template: require('./dropout-rates.html')
})
export class DropoutRates {
  institutions;
    selectedInstitution;
    sectors;
    selectedSector;
    ranges;
    selectedRange;
    genders;
    selectedGender;
    constructor(public appState: AppState, private data: Data, private router: Router) {
  }
  ngOnInit() {
    console.log('hello this is dropoutrates: ');
    this.data.getInitData().subscribe(res => {
        this.institutions = res.institutions.filter(i => i.typeid !== 5);
        this.sectors = res.sectors;
        this.ranges = res.ranges;
        this.genders = res.genders;
        this.selectedInstitution = this.institutions[1].id
        this.selectedSector = this.sectors[1].id
        this.selectedRange = this.ranges[1].id
        this.selectedGender = this.genders[1].id
    });

  }
      onInstitutionSelected(institution) {
          this.selectedInstitution = institution;
          console.log("INSTITUTION SELECTED: ")
          console.log(this.selectedInstitution, this.selectedSector, this.selectedGender, this.selectedRange);
        let navigationExtras = {
                'institutionId': this.selectedInstitution,
                'sectorId': this.selectedSector,
                'genderId': this.selectedGender,
                'gradeId': this.selectedRange
        }
        this.router.navigate(['/dropout-rates/results', navigationExtras]);
    }
    onSectorSelected(sector) {
        console.log("SECTOR SELECTED: ")
        console.log(this.selectedInstitution, this.selectedSector, this.selectedGender, this.selectedRange);
        this.selectedSector = sector;
        let navigationExtras = {
                'institutionId': this.selectedInstitution,
                'sectorId': this.selectedSector,
                'genderId': this.selectedGender,
                'gradeId': this.selectedRange
        }
        this.router.navigate(['/dropout-rates/results', navigationExtras]);
    }
    onRangeSelected(range) {
        console.log("SCHOOL SELECTED: ")
        console.log(this.selectedInstitution, this.selectedSector, this.selectedGender, this.selectedRange);
        this.selectedRange = range;
        let navigationExtras = {
                'institutionId': this.selectedInstitution,
                'sectorId': this.selectedSector,
                'genderId': this.selectedGender,
                'gradeId': this.selectedRange
        }
        this.router.navigate(['/dropout-rates/results', navigationExtras]);
    }
    onGenderSelected(gender) {
        console.log("SCHOOL SELECTED: ")
        console.log(this.selectedInstitution, this.selectedSector, this.selectedGender, this.selectedRange);
        this.selectedGender = gender;
        let navigationExtras = {
                'institutionId': this.selectedInstitution,
                'sectorId': this.selectedSector,
                'genderId': this.selectedGender,
                'gradeId': this.selectedRange
        }
        this.router.navigate(['/dropout-rates/results', navigationExtras]);
    }
}
