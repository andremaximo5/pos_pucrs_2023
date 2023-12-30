const carro = ['Onix','Prisma','Omega','Monza']
const motor = [1.4,1.0,3.2,2.0]

const modeloMotor = [carro,motor]

function cadastroCarro(modelCar){
    if(modeloMotor[0].includes(modelCar)){
        console.log(modelCar + ' - Já Cadastrado')
    }else{
        carro.push(modelCar)
        console.log(carro)
    } 
}

cadastroCarro('Onix')
//----------------------------------------------------------------------------------------------

function carroArray(){
    console.log(carro);
    carro.forEach(element => {
        console.log(element)
    })
}

carroArray()

//----------------------------------------------------------------------------------------------

const carroUpperCase = ['Monza', 'Fusca', 'sx4', 'Tempra']

function fixNameCar(){


    const fixNameCar = carroUpperCase.map(nomeFix=>{
        return nomeFix.toUpperCase()
    })
    console.log(fixNameCar)
}

fixNameCar()