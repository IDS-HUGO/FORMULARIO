import Text from "../atoms/Text";

function Tickets(props) {
    return (
        <div id="txt_tickets">
            <Text text="TRANSFERENCIAS"></Text>
            <Text text={props.ntarjeta} />
            <Text text={props.tutor} />
            <Text text={props.monto} />
            <Text text={props.concepto} />
            <Text text={props.date} />
        </div>
    );
}

export default Tickets;
