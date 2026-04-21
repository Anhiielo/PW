export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6 max-w-6xl mx-auto">Tabla de notas</h1>
      <div className="bg-white rounded-xl shadow p-6 max-w-6xl mx-auto">
        <table className="w-full border-collapse">
          <caption className="text-lg mb-4">Registro de notas de estudiantes</caption>
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Nombre del estudiante</th>
              <th className="p-3 text-left">Código</th>
              <th className="p-3 text-left">Curso</th>
              <th className="p-3 text-left">Promedio</th>
              <th className="p-3 text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-3">Estudiante_1</td>
              <td className="p-3">2025001</td>
              <td className="p-3">Programación Web</td>
              <td className="p-3">18</td>
              <td className="p-3">Aprobado</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3">Estudiante_2</td>
              <td className="p-3">2025002</td>
              <td className="p-3">Programación Web</td>
              <td className="p-3">13</td>
              <td className="p-3">Aprobado</td>
            </tr>
            <tr className="border-b border-gray-200 bg-red-50">
              <td className="p-3">Estudiante_3</td>
              <td className="p-3">2025003</td>
              <td className="p-3">Programación Web</td>
              <td className="p-3">10</td>
              <td className="p-3">Desaprobado</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3">Estudiante_4</td>
              <td className="p-3">2025004</td>
              <td className="p-3">Programación Web</td>
              <td className="p-3">16</td>
              <td className="p-3">Aprobado</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3">Estudiante_5</td>
              <td className="p-3">2025005</td>
              <td className="p-3">Programación Web</td>
              <td className="p-3">19</td>
              <td className="p-3">Aprobado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}