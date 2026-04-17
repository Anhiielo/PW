export default function App() {
  return (
    <main>
      <h1>Tabla de notas</h1>
      <table>
        <caption>Registro de notas de estudiantes</caption>
        <thead>
          <tr>
            <th scope="col">Nombre del estudiante</th>
            <th scope="col">Código</th>
            <th scope="col">Curso</th>
            <th scope="col">Promedio</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Estudiante_1</td>
            <td>2025001</td>
            <td>Programación Web</td>
            <td>18</td>
            <td>Aprobado</td>
          </tr>
          <tr>
            <td>Estudiante_2</td>
            <td>2025002</td>
            <td>Programación Web</td>
            <td>13</td>
            <td>Aprobado</td>
          </tr>
          <tr>
            <td>Estudiante_3</td>
            <td>2025003</td>
            <td>Programación Web</td>
            <td>10</td>
            <td>Desaprobado</td>
          </tr>
          <tr>
            <td>Estudiante_4</td>
            <td>2025004</td>
            <td>Programación Web</td>
            <td>16</td>
            <td>Aprobado</td>
          </tr>
          <tr>
            <td>Estudiante_5</td>
            <td>2025005</td>
            <td>Programación Web</td>
            <td>19</td>
            <td>Aprobado</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
