import buttonL from './buttonL';
function SampleData(props) {

    const { samples } = props

    if (!samples || samples.length === 0) return <p>Нет данных.</p>

    return (
        <div  className="Samples--list">
            <h1 style ={{ textAlign : 'center'}}>Таблица содержаний чего то в руде</h1>
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Iron_content</th>
                <th>sera_content</th>
                <th>other_content</th>
                <th>month</th>
                <th>user</th>

            </tr>
            </thead>
            <tbody>
            {samples.map( s  =>
                <tr  key={s.id}>
                <td>{s.id}  </td>
                <td>{s.name}</td>
                <td>{s.iron_content}</td>
                <td>{s.sera_content}</td>
                <td>{s.other_content}</td>
                <td>{s.month}</td>
                <td>{s.user}</td>
                <button onClick={console.log("1")}> clickDick </button>
                
            </tr>)}
            </tbody>
            </table>

        </div>
        );
}

export default SampleData