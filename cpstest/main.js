    
    //variaveis

    let millisecond = 0
    let second = 0

    let cron

    const btn = document.getElementById('btn')
    const btnPause = document.getElementById('btnPause')
    const btnReset = document.getElementById('btnReset')
    const seconds = document.getElementById('seconds')
    const milliseconds = document.getElementById('milliseconds')
    const clicks = document.getElementById('clicks')
    var clicksNum = parseInt(clicks.innerHTML)

    //funções

    function start() {
        pause()
        cron = setInterval(() => { timer() }, 10)
        btn.innerHTML = ""
    }

    function pause(){
        clearInterval(cron)
    }

    function reset(){
        clicksNum = 0
        second = 0
        millisecond = 0

        seconds.innerHTML = '0'
        milliseconds.innerHTML = '000'
        clicks.innerHTML = '0'

        btn.removeAttribute('disabled', '')
        btn.innerHTML = "Iniciar"
        pause()
        document.getElementById('cps').innerHTML = "Seu CPS é: 0"

    }

    function timer(){
        millisecond += 10
        cpsMath()
        if (millisecond == 1000) {
            millisecond = 0
            second++


            var secondsNum = parseInt(seconds.innerHTML)
            if(secondsNum == 4){
            btn.setAttribute('disabled', '')
            pause()
            cpsMath()
            }   
        }

    seconds.innerHTML = second
    milliseconds.innerHTML = millisecond
   
    }

    function cpsMath(){
        let fullTime = second + '.' + millisecond
        let cps = clicksNum / fullTime
        document.getElementById('cps').innerHTML = "Seu CPS é: " + cps.toFixed(2)
    }

    //event listeners

    btn.addEventListener('click', () => {
        start()
        clicksNum += 1
        let clicksStr = clicksNum.toString()
        clicks.innerHTML = clicksStr
    })

    btnReset.addEventListener('click', () => {
        reset()
    })