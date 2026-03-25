exports.getDate = function (){
    const today = new Date()

    const option = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return day = today.toLocaleDateString('pt-BR', option)
}

exports.getDay = function () {

    const today = new Date()
    const option = {weekday: 'short',};

    const day = today.toLocaleDateString('pt-BR', option)

    return day
}