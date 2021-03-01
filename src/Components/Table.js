import React from 'react';
import data from '../Constants/data.json';

const Table = () => {

    const { close, offexchtradevolumeeex, onexchtradevolumeeex, tradedatetimegmt } = data //destructuring

    return (

        <table>
            <thead>
                <tr>
                    <th>close</th>
                    <th>offexchtradevolumeeex</th>
                    <th>onexchtradevolumeeex</th>
                    <th>tradedatetimegmt</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table> 
        
    )
}

export default Table



