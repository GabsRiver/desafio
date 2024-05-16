function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques(); 
        this.enter();
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.eq();
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clear = el => this.display.value = '';

    this.del = el => this.display.value = this.display.value.slice(0, -1);

    this.eq = () => {
        
        try{
            let conta = this.display.value;
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta)

        } catch (e) {
            alert('Conta inválida');
            return;
        }
    }

    this.enter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.eq();
            }
        });
    };
    
}

const calculadora = new Calculadora();
calculadora.inicia();