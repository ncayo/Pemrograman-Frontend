function DataProv(props){
    const {dt_provinsi, nomer} = props;

    return(
        <tr>
            <td>{nomer}</td>
            <td>{dt_provinsi.kota}</td>
            <td>{dt_provinsi.kasus}</td>
            <td>{dt_provinsi.sembuh}</td>
            <td>{dt_provinsi.dirawat}</td>
            <td>{dt_provinsi.meninggal}</td>
        </tr>
    )
}

export default DataProv;