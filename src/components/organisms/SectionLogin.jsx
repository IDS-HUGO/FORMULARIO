import { useState } from 'react';
import Swal from 'sweetalert2';
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import { list } from '../../Data/Controllers/depencendies'; // Asegúrate de que 'list' sea una instancia de LinkedList
import './SectionLogin.css';
import Tickets from '../molecules/Tickets';
import Ticket from '../../Data/Models/Ticket';

function SectionLogin() {
    const [ntarjeta, setNtarjeta] = useState('');
    const [tutor, setTutor] = useState('');
    const [monto, setMonto] = useState('');
    const [concepto, setConcepto] = useState('');
    const [nip, setNip] = useState('');
    const [date, setDate] = useState('');
    const [transferencias, setTransferencias] = useState([]);

    const handlerClick = (event) => {
        Swal.fire({
            title: "Transferencia exitosa",
            text: `Destinatario: ${tutor}
                   Num. tarjeta: ${ntarjeta}
                   Monto: ${monto}
                   Concepto: ${concepto}
                   Fecha: ${date}`,
            imageUrl: "https://www.pngfind.com/pngs/m/588-5885474_palomita-de-calificacion-png-imagenes-de-taches-y.png",
            imageHeight: 100,
        });

        let transferencia = new Ticket(ntarjeta, tutor, monto, concepto, date);
        list.push(transferencia);

        const nuevasTransferencias = [];
        for (let i = 0; i < list.size(); i++) {
            nuevasTransferencias.push(list.getElementAt(i).getData());
        }
        setTransferencias(nuevasTransferencias);

        setNtarjeta('');
        setTutor('');
        setMonto('');
        setConcepto('');
        setNip('');
        setDate('');
    };

    return (
        <>
            <div id="login_section">
                <img id='img' src="/2.png" alt="" />
                <Field type="text" placeholder="2435-7689-1432-5432" text="Num. de Tarjeta." val={ntarjeta} fnVal={setNtarjeta} />
                <Field type="text" placeholder="Destinatario" text="Tutor de la tarjeta" val={tutor} fnVal={setTutor} />
                <Field type="number" placeholder="$00.00" text="Monto:" val={monto} fnVal={setMonto} />
                <Field type="text" placeholder="Concepto" text="Concepto" val={concepto} fnVal={setConcepto} />
                <Field type="password" placeholder="NIP" text="NIP (Confirmar Transferencia)" val={nip} fnVal={setNip} />
                <Field type="date" text="Fecha" val={date} fnVal={setDate} />
                <Button title="REALIZAR TRANSFERENCIA" onClick={handlerClick} />
            </div>
            <div id='transf'>
                <div id='transferencias'>
                    {
                        transferencias.map((transfer, index) => (
                            <Tickets key={index} 

                            ntarjeta={transfer.getNtargeta()} 
                            tutor={transfer.getTutor()} 
                            monto={transfer.getMonto()} 
                            concepto={transfer.getConcepto()} 
                            date={transfer.getDate()}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default SectionLogin;
