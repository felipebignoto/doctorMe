import { Button } from '@/components/button'
import { Field } from '@/components/form'
import { Header } from '@/components/header'
import Link from 'next/link'

export default function SignUn() {
  return (
    <div>
      <Header title="Criar conta" href="/" iconClassName="w-4 h-4" />
      <div className="py-5">
        <h1 className="font-bold text-xl">Crie sua conta</h1>
        <p>Por favor, nos informe seu nome e uma senha.</p>
      </div>

      <div className="flex flex-col gap-4">
        <Field
          inputProps={{
            type: 'text',
            id: 'nome',
            placeholder: 'Digite seu nome',
            defaultValue: '',
            autoFocus: true,
          }}
          labelProps={{
            children: 'Nome',
          }}
        />

        <Field
          inputProps={{
            type: 'text',
            id: 'sign',
            placeholder: 'Digite seu telefone',
            defaultValue: '',
            autoFocus: true,
          }}
          labelProps={{
            children: 'Telefone',
          }}
        />

        <Field
          inputProps={{
            type: 'text',
            id: 'password',
            placeholder: 'Digite sua senha',
            defaultValue: '',
            autoFocus: true,
            className: 'mb-2',
          }}
          labelProps={{
            children: 'Senha',
          }}
        />

        <Button className="mb-8">Criar conta</Button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-">
          Já está cadastrado?{' '}
          <Link
            href={'/sign-in'}
            className="text-green-600 font-semibold underline"
          >
            Acesse sua conta
          </Link>
        </p>
      </div>
    </div>
  )
}
