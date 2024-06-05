export default function DoctorId({params} : Readonly<{params: {id: string}}>) {
  return <h1>doctor - {params.id}</h1>;
}
