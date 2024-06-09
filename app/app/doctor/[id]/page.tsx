'use client'

import { Button } from '@/components/button'
import { Header } from '@/components/header'
import { Icon } from '@/components/icon'
import { formatHour } from '@/other/helpers'
import Image from 'next/image'
import React, { useState } from 'react'

interface AgendaSelected {
  id: string
  date: string
}

export default function DoctorId({
  params,
}: Readonly<{ params: { id: string } }>) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [agendaSelected, setAgendaSelected] = useState<AgendaSelected | null>(
    null,
  )
  const closeMOdal = () => setIsModalVisible(false)
  const handleSelectAgenda = (params: AgendaSelected) => {
    setAgendaSelected({
      id: params.id,
      date: params.date,
    })
    setIsModalVisible(true)
  }
  const doctor = {
    firstName: 'Vinicius',
    lastName: 'Campos',
    speciality: 'oftalmologista',
    state: 'RS',
    city: 'Porto alegre',
    picture: 'photo-4.jpg',
    bio: 'jfnajfbjasnfjanfoasnfjsdnfajbfjadbao',
    price: 100,
    attendances: 150,
    experience: '8 anos',
    availability: 'segunda a sexta',
    address: 'rua, estado, cidade',
    agenda: [
      {
        id: '1',
        data: '2024-06-04 13:08:33',
        available: true,
      },
      {
        id: '2',
        data: '2024-06-04 14:08:33',
        available: true,
      },
    ],
  }
  return (
    <div>
      <Header title="Agenda" href="/" iconClassName="h-4 w-4" />
      <div className="flex flex-col gap-5 mt-5">
        <div className="bg-green-700 p-4 rounded-xl text-white flex gap-4">
          <Image
            alt="foto"
            src={`/photos/${doctor.picture}`}
            width={76}
            height={76}
            className="rounded-xl"
          />

          <div>
            <h1 className="font-semibold">
              Dr. {doctor.firstName} {doctor.lastName}
            </h1>
            <p>{doctor.speciality}</p>
            <p>
              {' '}
              <Icon name="map" className="w-3 h-3 text-white">
                {doctor.city} {doctor.state}
              </Icon>
            </p>
          </div>
        </div>
        <p className="p-4 border border-gray-100">
          Médico formado pela Universidade
        </p>

        <div className="border-b border-gray-100 flex justify-center py-2">
          <div className="w-1/2">
            <h2 className="text-[#9f9f9f]">Valor da consulta</h2>
            <p>{doctor.price}</p>
          </div>
          <div>
            <h2 className="text-[#9f9f9f]">Atendimentos</h2>
            <p>{doctor.attendances}</p>
          </div>
        </div>

        <div className="border-b border-gray-100 flex justify-center py-2">
          <div className="w-1/2">
            <h2 className="text-[#9f9f9f]">Formação</h2>
            <p>Dr...</p>
          </div>
          <div>
            <h2 className="text-[#9f9f9f]">Experiência</h2>
            <p>{doctor.experience}</p>
          </div>
        </div>

        <div className="border-b border-gray-100 flex flex-col items-center justify-center py-2">
          <h2 className="text-[#9f9f9f]">Disponibilidade</h2>
          <p>{doctor.availability}</p>
        </div>

        <div className="border-b border-gray-100 flex flex-col items-center justify-center py-2">
          <h2 className="text-[#9f9f9f]">Localidade</h2>
          <p>
            {doctor.address} {doctor.city} {doctor.state}
          </p>
        </div>

        <h2 className="border text-center p-3 border-gray-100">
          Horários disponiveis
        </h2>
        <div className="px-2 flex flex-col gap-5">
          <div className="flex">
            <div className="w-[90px] h-9 flex items-center font-semibold">
              Hoje
            </div>
            <Agenda
              agenda={doctor.agenda}
              onSelectAgenda={handleSelectAgenda}
            />
          </div>
          <div className="flex">
            <div className="w-[90px] h-9 flex items-center font-semibold">
              Amanhã
            </div>
            <Agenda
              agenda={doctor.agenda}
              onSelectAgenda={handleSelectAgenda}
            />
          </div>
        </div>
        <Modal
          agendaSelected={agendaSelected}
          isVisible={isModalVisible}
          onClose={closeMOdal}
        />
      </div>
    </div>
  )
}

type AgendaProps = {
  id: string
  data: string
  available: boolean
}

function Agenda({
  agenda,
  onSelectAgenda,
}: {
  agenda: AgendaProps[]
  onSelectAgenda: ({ id, date }: AgendaSelected) => void
}) {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {agenda.map((item) => (
        <AgendaButton
          date={item.data}
          key={item.id}
          {...item}
          onClick={onSelectAgenda}
        />
      ))}
    </div>
  )
}

function AgendaButton({
  id,
  date,
  available,
  onClick,
}: {
  id: string
  date: string
  available: boolean
  onClick: ({ id, date }: AgendaSelected) => void
}) {
  if (!available) return null
  return (
    <button
      onClick={() => onClick({ id, date })}
      className="text-sm font-semibold text-green-500 bg-green-100 rounded-md py-2 px-3 hover:bg-green-200"
    >
      {formatHour(new Date(date))}
    </button>
  )
}

function Modal({
  isVisible,
  onClose,
  agendaSelected,
}: {
  isVisible: boolean
  onClose: () => void
  agendaSelected: AgendaSelected | null
}) {
  if (!isVisible) return null

  const handleOutClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div
      onClick={handleOutClick}
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-end "
    >
      <div className="bg-white rounded-3xl  h-full max-h-[286px] w-full max-w-96 mx-auto p-8 text-center gap-8 flex flex-col">
        <h2 className="font-semibold text-2xl mb-6">Confirmar o agendamento</h2>
        <p className="mb-12 text-sm">Agendamento pra o dia 01/01/2000</p>
        <Button>Sim, quero confirmar</Button>
      </div>
    </div>
  )
}
