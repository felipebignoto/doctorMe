import {PrismaClient} from "@prisma/client"
import {faker} from "@faker-js/faker"

const prisma = new PrismaClient()

const speccialities = [
    'Cardiologista',
    'Endocrinologistas',
    'Clinico Geral',
    'Pediatra',
    'Urologistas'
]


function createDoctor(){

    const speciality = speccialities[Math.floor(Math.random() * speccialities.length)]
    const experience = `${Math.floor(Math.random() * 5)} anos de experiências`
    
    const doctor = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      speciality: speciality,
      picture: `photo-${Math.floor(Math.random() * 9)}.jpg`,
      price: Number(faker.commerce.price({min: 100, max: 500})),
      availability: 'Segunda à sexta das 10:00 às 16:00',
      experience: experience,
      attendances: Math.floor(Math.random() * 10),
      city: faker.location.city(),
      state: faker.location.state(),
      bio: `Dr. formado em ${speciality} com ${experience} `,
      address: faker.location.streetAddress(),
    }

    return doctor
}


function generateAgenda(quantity){
    const dates = [
      "2024-06-03 19:00:00",
      "2024-06-04 20:00:00",
      "2024-06-05 13:00:00",
      "2024-06-06 14:00:00",
      "2024-06-07 10:00:00",
    ];

    return dates.splice(0,quantity)
}

async function main(){
    console.log("Seed está iniciando")

    const ROWS_QUANTITY = 10

    for(let index = 0; index < ROWS_QUANTITY; index++) {
        const ITEMS_AGENDA = Math.floor(Math.random() * 5)
        const doctor = createDoctor()
        const agenda = generateAgenda(ITEMS_AGENDA)

        await prisma.doctor.create({
            data: {
                ...doctor,
                agenda: {
                    createMany: {
                        data: agenda.map((item) => ({
                            date: new Date(item).toISOString()
                        }))
                    }
                }
            }
        })
    }

     console.log("Seed está finalizado");
}

main()