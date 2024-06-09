import { Header } from '@/components/header'
import { formatHour } from '@/other/helpers'
import Image from 'next/image'

export default function Patient() {
  const appointments = [
    {
      id: '1',
      date: '2024-06-04 13:08:33',
      firstName: 'John',
      speciality: 'dentista',
      picture: 'photo-1.jpg',
      made: false,
    },
    {
      id: '2',
      date: '2024-06-05 09:22:10',
      firstName: 'Alice',
      speciality: 'cardiologista',
      picture: 'photo-2.jpg',
      made: false,
    },
    {
      id: '3',
      date: '2024-06-06 15:45:21',
      firstName: 'Carlos',
      speciality: 'neurologista',
      picture: 'photo-3.jpg',
      made: true,
    },
    {
      id: '4',
      date: '2024-06-07 11:30:45',
      firstName: 'Mariana',
      speciality: 'pediatra',
      picture: 'photo-4.jpg',
      made: false,
    },
    {
      id: '5',
      date: '2024-06-08 08:15:37',
      firstName: 'Felipe',
      speciality: 'ortopedista',
      picture: 'photo-5.jpg',
      made: true,
    },
  ]
  return (
    <>
      <Header
        href="/"
        title="Meus agendamentos"
        iconClassName="w-4 h-4"
      ></Header>

      <div className="border mt-8 mb-9 border-gray-100 p-2 flex justify-center items-center">
        <button className="rounded-full w-full py-2 px-4 font-semibold bg-green-600 hover:opacity-85">
          Próximos
        </button>
        <button className="w-full rounded-fullpy-2 px-4 hover:bg-gray-100">
          Realizados
        </button>
      </div>

      <div className="">
        <h2 className="font-semibold text-lg mb-4">Hoje</h2>
        <div className="flex flex-col gap-4 mb-5">
          {appointments.map((item) => (
            <Card
              key={item.id}
              date={item.date}
              firstName={item.firstName}
              id={item.id}
              made={item.made}
              picture={item.picture}
              speciality={item.speciality}
            />
          ))}
        </div>
        <h2 className="font-semibold text-lg mb-4">Amanhã</h2>
      </div>
    </>
  )
}

type AppointmentProps = {
  id: string
  firstName: string
  speciality: string
  date: string
  made: boolean
  picture: string
}

function Card(appointment: AppointmentProps) {
  return (
    <div className="flex w-full items-center gap-6">
      <div className="flex flex-col ">
        {formatHour(new Date(appointment.date))}
        <span className="border-b border-dashed"></span>
        {formatHour(new Date(appointment.date), true)}
      </div>

      <div className="flex p-4 rounded-lg bg-green-50 w-full items-center relative gap-4">
        <span className="absolute  -m-4 w-[2px] h-[60px] bg-green-500 rounded-r-lg"></span>
        <div>
          <Image
            alt={appointment.firstName}
            src={`/photos/${appointment.picture}`}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg">{appointment.firstName}</h2>
          <p className="text-[#343a40]">{appointment.speciality}</p>
        </div>
      </div>
    </div>
  )
}
