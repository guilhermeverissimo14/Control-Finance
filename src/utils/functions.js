export const months = (month) => {
    switch (month) {
        case 1:
            return 'Janeiro';
        case 2:
            return 'Fevereiro';
        case 3:
            return 'Março';
        case 4:
            return 'Abril';
        case 5:
            return 'Maio';
        case 6:
            return 'Junho';
        case 7:
            return 'Julho';
        case 8:
            return 'Agosto';
        case 9:
            return 'Setembro';
        case 10:
            return 'Outubro';
        case 11:
            return 'Novembro';
        case 12:
            return 'Dezembro';
        default:
            return 'Mês não encontrado';
    }
}

export const years = (year) => {
    switch (year) {
        case 2021:
            return '2021';
        case 2022:
            return '2022';
        case 2023:
            return '2023';
        case 2024:
            return '2024';
        case 2025:
            return '2025';
        case 2026:
            return '2026';
        case 2027:
            return '2027';
        case 2028:
            return '2028';
        case 2029:
            return '2029';
        case 2030:
            return '2030';
        default:
            return 'Ano não encontrado';
    }
}