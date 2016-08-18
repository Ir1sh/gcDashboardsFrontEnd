import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class Data {
  constructor(public http: Http) {}
  getInitData() {
    return this.http.get('http://gcDashboardService:9000/leavingcertresults').map(res => res.json());
  }

    getGrades() {
        return [
            {id: 1, name: 'A1', points: 100, pointsPass: 55},
            {id: 2, name: 'A2', points: 90, pointsPass: 45},
            {id: 3, name: 'B1', points: 85, pointsPass: 40},
            {id: 4, name: 'B2', points: 80, pointsPass: 35},
            {id: 5, name: 'B3', points: 75, pointsPass: 30},
            {id: 6, name: 'C1', points: 65, pointsPass: 25},
            {id: 7, name: 'C2', points: 60, pointsPass: 20},
            {id: 8, name: 'C3', points: 55, pointsPass: 15},
            {id: 9, name: 'D1', points: 50, pointsPass: 10},
            {id: 10, name: 'D2', points: 45, pointsPass: 5},
            {id: 11, name: 'D3', points: 40, pointsPass: 0},
            {id: 12, name: 'E', points: 0, pointsPass: 0},
            {id: 13, name: 'F', points: 0, pointsPass: 0},
            {id: 14, name: 'NG', points: 0, pointsPass: 0},
        ];
    }

    getSubjects() {
        return [
            {id: 1, name: 'Irish', path: 'coreSubjects.irish'},
            {id: 2, name: 'English', path: 'coreSubjects.english'},
            {id: 3, name: 'Mathematics', path: 'coreSubjects.mathematics'},
            {id: 4, name: 'History', path: 'coreSubjects.history'},
            {id: 5, name: 'Geography', path: 'coreSubjects.geography'},
            {id: 6, name: 'Latin', path: 'languages.latin'},
            {id: 7, name: 'Classical Studies', path: 'artsAndHumanities.classicalstudies'},
            {id: 8, name: 'French', path: 'languages.french'},
            {id: 9, name: 'German', path: 'languages.german'},
            {id: 10, name: 'Spanish', path: 'languages.spanish'},
            {id: 11, name: 'Italian', path: 'languages.italian'},
            {id: 12, name: 'Art', path: 'artsAndHumanities.art'},
            {id: 13, name: 'Applied Mathematics', path: 'scienceAndTechnology.appliedmathematics'},
            {id: 14, name: 'Physics', path: 'scienceAndTechnology.physics'},
            {id: 15, name: 'Chemistry', path: 'scienceAndTechnology.chemistry'},
            {id: 16, name: 'Pysics and Chemistry', path: 'scienceAndTechnology.physicsandchemistry'},
            {id: 17, name: 'Agricultural Science', path: 'scienceAndTechnology.agriculturalscience'},
            {id: 18, name: 'Biology', path: 'scienceAndTechnology.biology'},
            {id: 19, name: 'Engineering', path: 'scienceAndTechnology.engineering'},
            {id: 20, name: 'Construction Studies', path: 'scienceAndTechnology.constructionstudies'},
            {id: 21, name: 'Accounting', path: 'business.accounting'},
            {id: 22, name: 'Business', path: 'business.business'},
            {id: 23, name: 'Economics', path: 'business.economics'},
            {id: 24, name: 'Japanese', path: 'languages.japanese'},
            {id: 25, name: 'Arabic', path: 'languages.arabic'},
            {id: 26, name: 'Technology', path: 'scienceAndTechnology.technology'},
            {id: 27, name: 'Music', path: 'artsAndHumanities.music'},
            {id: 28, name: 'Home Economics', path: 'artsAndHumanities.homeeconomics'},
            {id: 29, name: 'Russian', path: 'languages.russian'},
            {id: 30, name: 'Religious Education', path: 'artsAndHumanities.religiouseducation'},
            {id: 31, name: 'Design and Communication', path: 'artsAndHumanities.designandcommunication'},
        ];
    }
}
