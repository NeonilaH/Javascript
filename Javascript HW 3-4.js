// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

const enterprises = [
    {
        id: 1,
        name: "Предприятие 1",
        departments: [
            {
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ]
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [
            {
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ]
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [
            {
                id: 10,
                name: "Отдел аналитики",
                employees_count: 0,
            },
        ]
    }
]

//  Задания:
/*1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
**Пример:**
Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)*/

const employeesCountHelper = function (number) {
    number = number.toString().split('').pop();
    if (number) {
        if (number == 1) return "сотрудник";
        else if (number > 1 && number < 5) return "сотрудника";
        else return "сотрудников";
    } else return "(нет сотрудников)";
}

const getDepartments = function (companies) {
    companies.forEach((company) => {
        let depts = [];
        let count = 0;
        depts.push(company.name);
        if (company.departments) {
            company.departments.forEach((dept) => {
                count += dept.employees_count;
                if (dept.employees_count) {
                    depts.push(`- ${dept.name} (${dept.employees_count} ${employeesCountHelper(dept.employees_count)})`)
                } else depts.push(`- ${dept.name} (нет сотрудников)`);
            });

            if (count) {
                depts[0] += ` (${count} ${employeesCountHelper(count)})`;
            } else depts[0] += ` (нет сотрудников)`;
        }
        console.log(depts.join(`\n `))
    });
};
getDepartments(enterprises)

for (let i = 0; i < enterprises.length; i++) {
    console.log(enterprises[i].name);
    let total = 0;
    for (let j = 0; j < enterprises[i].departments.length; j++) {
        console.log('-', enterprises[i].departments[j].name,
            '(' + enterprises[i].departments[j].employees_count,
            'сотрудников)'
        );
        total += enterprises[i].departments[j].employees_count;
    }
    if (total != 0) {
        console.log('Всего', total, 'сотрудников.');
    } else {
        console.log('Нет сотрудников.');
    }
}