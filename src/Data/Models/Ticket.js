class Ticket {
    #ntarjeta;
    #tutor;
    #monto;
    #concepto;
    #date;

    constructor(ntarjeta, tutor, monto, concepto, date) {
        this.#ntarjeta = ntarjeta;
        this.#tutor = tutor;
        this.#monto = monto;
        this.#concepto = concepto;
        this.#date = date;
    }

    getNtargeta(){
        return this.#ntarjeta
    }
    getTutor(){
        return this.#tutor
    }
    getMonto(){
        return this.#monto
    }
    getConcepto(){
        return this.#concepto
    }
    getDate(){
        return this.#date
    }
}

export default Ticket;
