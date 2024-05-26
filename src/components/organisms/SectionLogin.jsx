import { useState } from 'react';
import Swal from 'sweetalert2'
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import { list } from '../../Data/Controllers/depencendies';
import './SectionLogin.css'

function SectionLogin() {

    const [ntarjeta,     setNtarjeta] = useState('')
    const [tutor, setTutor] = useState ('')
    const [monto,setMonto] = useState ('')
    const [concepto,setConcepto] = useState('')
    const [nip, setNip] = useState('')
    const [date, setDate] = useState ('')
    const [transferencias, setTransferencias] = useState([]); // Definimos el estado aquí

    const handlerClick = (event) => {
        Swal.fire({
            title: "Transferencia exitosa",
            text: `Destinatario: ${tutor}
                   Num. tarjeta: ${ntarjeta}
                   Monto: ${monto}
                   Concepto: ${concepto}
                   Fecha: ${date}`,
            imageUrl: "https://www.google.com/imgres?q=palomita%20png&imgurl=https%3A%2F%2Fwww.pngfind.com%2Fpngs%2Fm%2F588-5885474_palomita-de-calificacion-png-imagenes-de-taches-y.png&imgrefurl=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2FhJRJbio_palomita-de-calificacion-png-imagenes-de-taches-y%2F&docid=08HFSYlPMsSsAM&tbnid=n_9bqH_N9QlPkM&vet=12ahUKEwjG7v-2qKqGAxUDl-4BHXiVAUYQM3oECBcQAA..i&w=840&h=884&hcb=2&ved=2ahUKEwjG7v-2qKqGAxUDl-4BHXiVAUYQM3oECBcQAA",
            imageHeight: 100,
        });

        const nuevaTransferencia = { tutor, ntarjeta, monto, concepto, date };
        list.push(nuevaTransferencia);
        setTransferencias([...transferencias, nuevaTransferencia]); // Actualizamos el estado
    };

    const view = (event) => {
        let content = '<h3>Transferencias realizadas:</h3>';
        if (list.isEmpty()) {
            content += '<p>No se han realizado transferencias.</p>';
        } else {
            for (let i = 0; i < list.size(); i++) {
                const node = list.getElementAt(i);
                if (node) {
                    const transferencia = node.element;
                    content += `
                        <div>
                            <p><strong>Transferencia ${i + 1}:</strong></p>
                            <p>Destinatario: ${transferencia.tutor}</p>
                            <p>Num. tarjeta: ${transferencia.ntarjeta}</p>
                            <p>Monto: ${transferencia.monto}</p>
                            <p>Concepto: ${transferencia.concepto}</p>
                            <p>Fecha: ${transferencia.date}</p>
                        </div>
                        <hr>
                    `;
                }
            }
        }

        document.getElementById('transferencias').innerHTML = content;
    };



    
    
    return (
        <>
          
        <div id="login_section">
            <img id='img' src="/2.png" alt="" />
            <Field type="text" placeholder="2435-7689-1432-5432" text="Num. de Tarjeta." val={ntarjeta} fnVal={setNtarjeta}/>
            <Field type="text" placeholder="Destinatario" text="Tutor de la tarjeta" val ={tutor} fnVal={setTutor}/>
            <Field type="number" placeholder="$00.00" text="Monto:" val ={monto} fnVal={setMonto}/>
            <Field type="text" placeholder="Concepto" text="Concepto" val ={concepto} fnVal={setConcepto}/>
            <Field type="number" placeholder="NIP" text="NIP (Confirmar Transferencia)" val ={nip} fnVal={setNip}/>
            <Field type="date"  text="Date" val={date} fnVal={setDate}/>
            <Button title="REALIZAR TRANFERENCIA" onclick={handlerClick} />
            <Button id='view-transfer' title="IMPRIMIR TRANSFERENCIAS" onclick={view} />
        </div> 
        <div>
            <div id='transferencias'></div>
        </div>
        
        </>
     )
}

export default SectionLogin;