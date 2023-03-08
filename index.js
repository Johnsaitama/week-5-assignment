

class Guitar {
    constructor(wood, color){
        this.wood = wood;
        this.color = color;
    }
    describe(){
    return `${this.wood} "play's " ${this.color}`
}}

class carvingdesign {
    constructor (electriG){
        this.electriG = electriG;
        this.guitarbody = []
    }
    addGuitar (guitar){
        if (guitar instanceof Guitar){
            this.guitarbody.push(guitar)
        }else{
            throw new error (`You can only add and instance of Guitar. Argument is not an Guitar: " ${guitar}`);
        }
     describe() ;{
        return `${this.electriG} has ${this.guitarbody.length} guitarist.`;
     }
}}

class Menu {
    constructor(){

        this.guitarist = []
        this.selectedGuitar = null
    }

    start (){
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch(selection){
                case "1":
                    this.createGuitar();
                    break;
                case "2":
                this.viewGuitar();
                break;
                case "3":
                this.deleteGuitar();
                break;
                case "4":
                this.displayGuitar();
                break;
                default:
                    selection = 0
            }
            selection = this.showMainMenuOptions()
        }
        alert("bye!");
    } 

    showMainMenuOptions(){
        return prompt(`
            1.) Create New Guitar
            2.) View Guitar
            3.) Delete Guitar
            4.) Display All Guitars
            5.) Exit
    `);
    }
    showGuitarMenuOptions(guitarInfo){
        return prompt(`
        1.) Create Guitar
        2.) Delete Guitar
        3.) Back
        -------------------------
        ${guitarInfo};
        `);
    }

    displayGuitar(){
        let guitarString = ''
        for(let i= 0; i<this.bestguitar.length; i++){
            guitarString += i + ') ' + this.bestguitar[i].name + '\n';
        }
        alert (guitarString);
    }
    deleteGuitar(){
        let index = prompt("Enter guitar u wish to shred: ")
        if(index > -1 && index < this.guitarist.length){
            this.guitarist.splice(index, 1)
        }
    }

    createGuitar(){
        let name = prompt("enter new matirial");
        this.guitarist.push(new carvingdesign(name));
        console.log(this.guitarist)
    }
    
    viewGuitar(){
        let index = prompt("Enter the index of guitar matirial u wish to add ")
        if (index > -1 && index < this.guitarist.length){
            this.selectedGuitar = this.guitarist[index];
            let description = "Guitar wood: " + this.selectedGuitar.wood + '\n';
            console.log(this.guitarist)
            for(let i = 0; i < this.selectedGuitar.guitarbody.length; i++){
                console.log(i)
                description += i + ') '+ this.selectedGuitar.guitarbody[i].wood + ' - ' +
                this.selectedGuitar.guitarbody[i].string + '\n';
                console.log(this.guitarbody)
            }

            let selection = this.showGuitarMenuOptions(description)
            switch(selection){
                case '1': 
                this.createGuitar();
                break;

                case '2':
                    this.deleteGuitar();

            }

        }
    }

        createGuitarist(){
            let wood = prompt("Enter name of new guitar: ")
            let color = prompt("Enter   new color: ")
            this.selectedGuitar.guitarist.push(new Guitar(wood, color))
        }

    deleteGuitarist(){
        let index = prompt("Enter name of guitar you wish to delete: ")
        if( index > -1 && index < this.selectedGuitar.guitarist.lenght)
        this.selectedGuitar.guitarist.splice(index, 1);

        }
    }


let menu = new Menu ();
menu.start();

