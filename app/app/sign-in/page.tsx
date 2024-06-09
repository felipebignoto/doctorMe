import { Button } from '@/components/button'
import { Field } from '@/components/form'
import { Header } from '@/components/header'
import Link from 'next/link'

export default function SignIn() {
  return (
    <div>
      <Header title="Login" href="/" iconClassName="w-4 h-4" />
      <div className="py-5">
        <h1 className="font-bold text-xl">Acesse sua conta</h1>
        <p>Olá, informe seus dados para acessar.</p>
      </div>

      <div className="flex flex-col gap-4">
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

        <Button className="mb-8">Login</Button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex h-6 relative w-full items-center justify-center mb-4">
          <span className="absolute z-10 bg-white px-2">Ou</span>
          <div className="border-b border-gray-200 w-full absolute text-sm"></div>
        </div>
        <p className="text-">
          Não está cadastrado?{' '}
          <Link
            href={'/sign-up'}
            className="text-green-600 font-semibold underline"
          >
            Crie sua conta
          </Link>
        </p>
      </div>
    </div>
  )
}
