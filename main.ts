class Detail {
constructor(public name: string, public width: number, public height: number, public weight: number) {}

calculateCost(): number {
return (this.width * this.height) / this.weight * 150;
}
}

class Project {
details: Detail[] = [];

constructor(public name: string) {}

addDetail(detail: Detail): void {
this.details.push(detail);
}

calculateBudget(): number {
return this.details.reduce((total, detail) => total + detail.calculateCost(), 0);
}
}

class Department {
projects: Project[] = [];

constructor(public name: string) {}

addProject(project: Project): void {
this.projects.push(project);
}

calculateDepartmentBudget(): number {
return this.projects.reduce((total, project) => total + project.calculateBudget(), 0);
}
}

const detail1 = new Detail('Detail1', 10, 20, 5);
const detail2 = new Detail('Detail2', 15, 25, 8);


const project1 = new Project('Project1');
project1.addDetail(detail1);

const project2 = new Project('Project2');
project2.addDetail(detail1);
project2.addDetail(detail2);


const techDepartment = new Department('tech - Технический');
techDepartment.addProject(project1);

const turboDepartment = new Department('turbo - Турбинный цех');
turboDepartment.addProject(project2);


console.log('Название проекта - Название детали - Стоимость детали - Общий бюджет на проект');
console.log('-------------------------------------------');

[project1, project2].forEach(project => {
console.log(`${project.name}`);
project.details.forEach(detail => {
const cost = detail.calculateCost();
console.log(`${detail.name} - ${cost}`);
});
console.log(`Общий бюджет на проект - ${project.calculateBudget()}`);
console.log('-------------------------------------------');
});


console.log('Название отдела - Бюджет на отдел');
console.log('-------------------------------------------');

const departments = [techDepartment, turboDepartment];
departments.forEach(department => {
console.log(`${department.name} - ${department.calculateDepartmentBudget()}`);
});

