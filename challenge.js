/*
Suppose that you're working in a small town administration,
and you're in charge of two town elements :
1. Parks
2.Streets 

Its a very small town, so right now there are only 3 parks
and 4 streets. All park and streets have a name and build year.


At an end-of-year meeting , your boss wants a final report with the following :

1. Tree density of each park in the town (formula:number of trees/park area)

2. Average age of each towns park in the town's park (formula:sum of all ages/number of parks)

3. The sum of the park that has more than 1000 trees

4. Total and average length of the town's streets 

5. Size classification  of all streets: tiny/small/normal/big/huge . If the size is unknown ,the default is normal

All the report data should be printed to the console .

HINT : Use the ES6 features : classes, subclasses , template strings ,default parameters ,maps,arrows function , destructuring etc.

*/


class TownElement {
    constructor(name, yearOfBuild) {
        this.name = name;
        this.yearOfBuild = yearOfBuild;
    }
}


class Park extends Element {
    constructor(name, yearOfBuild, area, numTrees) {
        super(name, yearOfBuild);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees /
            this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`)
    }
}