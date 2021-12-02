module.exports = [
    {
        question: 'O que você achou do bot:',
        name: 'Bot'
    },
    {
        question: 'Sua satisfação com o chatbot',
        placeholder: 'Escolha uma opção:',
        custonId: 'nivel',
        minValues: 1,
        maxValues:1,
        options:[
            {
                label: 'Ótimo',
                valeu: '1',
                description: 'Foi Excelente',
                emoji: ''
            },
            {
                label: 'Bom',
                valeu: '2',
                description: 'Foi Bom',
                emoji: ''
            },
            {
                label: 'Médio',
                valeu: '1',
                description: 'Foi Médio',
                emoji: ''
            },
            {
                label: 'Ruim',
                valeu: '1',
                description: 'Foi Ruim',
                emoji: ''
            }            
        ]    
    },
    {
        question: 'Você encontrou mais bugs?',
        name: 'Bugs'
    }
]